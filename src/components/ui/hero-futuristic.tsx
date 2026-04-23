'use client';

import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useAspect, useTexture } from '@react-three/drei';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three/webgpu';
import { bloom } from 'three/examples/jsm/tsl/display/BloomNode.js';
import {
  abs,
  blendScreen,
  float,
  mod,
  mx_cell_noise_float,
  oneMinus,
  smoothstep,
  texture,
  uniform,
  uv,
  vec2,
  vec3,
  pass,
  mix,
  add,
} from 'three/tsl';

const TEXTUREMAP = { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' };
const DEPTHMAP = { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' };

extend(THREE as any);

const WIDTH = 300;
const HEIGHT = 300;

const PostProcessing = ({
  strength = 1.2,
  threshold = 0.8,
  fullScreenEffect = true,
}: {
  strength?: number;
  threshold?: number;
  fullScreenEffect?: boolean;
}) => {
  const { gl, scene, camera } = useThree();
  const progressRef = useRef<any>({ value: 0 });

  const render = useMemo(() => {
    const postProcessing = new (THREE as any).PostProcessing(gl);
    const scenePass = pass(scene, camera);
    const scenePassColor = scenePass.getTextureNode('output');
    const bloomPass = bloom(scenePassColor, strength, 0.5, threshold);

    const uScanProgress = uniform(0);
    progressRef.current = uScanProgress;

    const scanPos = float(uScanProgress.value);
    const scanWidth = float(0.04);
    const scanLine = smoothstep(0, scanWidth, abs(uv().y.sub(scanPos)));

    const greenOverlay = vec3(0.29, 0.87, 0.5).mul(oneMinus(scanLine)).mul(0.5);

    const withScan = mix(
      scenePassColor,
      add(scenePassColor, greenOverlay),
      fullScreenEffect ? smoothstep(0.9, 1.0, oneMinus(scanLine)) : 1.0,
    );

    postProcessing.outputNode = withScan.add(bloomPass);
    return postProcessing;
  }, [camera, gl, scene, strength, threshold, fullScreenEffect]);

  useFrame(({ clock }) => {
    if (progressRef.current) {
      progressRef.current.value = Math.sin(clock.getElapsedTime() * 0.4) * 0.5 + 0.5;
    }
    render.renderAsync();
  }, 1);

  return null;
};

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);
  const meshRef = useRef<any>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (rawMap && depthMap) setVisible(true);
  }, [rawMap, depthMap]);

  const { material, uniforms } = useMemo(() => {
    const uPointer = uniform(new THREE.Vector2(0));
    const uProgress = uniform(0);

    const tDepthMap = texture(depthMap);
    const tMap = texture(rawMap, uv().add(tDepthMap.r.mul(uPointer).mul(0.012)));

    const aspect = float(WIDTH).div(HEIGHT);
    const tUv = vec2(uv().x.mul(aspect), uv().y);
    const tiling = vec2(120.0);
    const tiledUv = mod(tUv.mul(tiling), 2.0).sub(1.0);
    const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2));
    const dist = float(tiledUv.length());
    const dot = float(smoothstep(0.5, 0.49, dist)).mul(brightness);
    const flow = oneMinus(smoothstep(0, 0.02, abs(tDepthMap.r.sub(uProgress))));

    const mask = dot.mul(flow).mul(vec3(0.3, 10, 0.5));

    const mat = new (THREE as any).MeshBasicNodeMaterial({
      colorNode: blendScreen(tMap, mask),
      transparent: true,
      opacity: 0,
    });

    return { material: mat, uniforms: { uPointer, uProgress } };
  }, [rawMap, depthMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock, pointer }) => {
    uniforms.uProgress.value = Math.sin(clock.getElapsedTime() * 0.4) * 0.5 + 0.5;
    uniforms.uPointer.value = pointer;
    if (meshRef.current) {
      const mat = meshRef.current.material as any;
      if ('opacity' in mat) {
        mat.opacity = THREE.MathUtils.lerp(mat.opacity, visible ? 1 : 0, 0.07);
      }
    }
  });

  return (
    <mesh ref={meshRef} scale={[w, h, 1]} material={material}>
      <planeGeometry args={[1, 1]} />
    </mesh>
  );
};

export const FuturisticHero = () => {
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      flat
      gl={async (props: any) => {
        const renderer = new (THREE as any).WebGPURenderer(props);
        await renderer.init();
        return renderer;
      }}
    >
      <Scene />
      <PostProcessing />
    </Canvas>
  );
};

export default FuturisticHero;
