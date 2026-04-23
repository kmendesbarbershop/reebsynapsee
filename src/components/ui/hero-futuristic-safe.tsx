import { useState, useEffect, type ComponentType } from 'react';

const FuturisticHeroSafe = () => {
  const [supported, setSupported] = useState(false);
  const [HeroComponent, setHeroComponent] = useState<ComponentType | null>(null);

  useEffect(() => {
    let cancelled = false;
    const checkSupport = async () => {
      if (typeof navigator !== 'undefined' && 'gpu' in navigator) {
        try {
          const adapter = await (navigator as any).gpu.requestAdapter();
          if (adapter && !cancelled) {
            const mod = await import('./hero-futuristic');
            if (cancelled) return;
            setHeroComponent(() => mod.FuturisticHero);
            setSupported(true);
          }
        } catch {
          if (!cancelled) setSupported(false);
        }
      }
    };
    checkSupport();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!supported || !HeroComponent) {
    return (
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 60%, rgba(74,222,128,0.25) 0%, rgba(74,222,128,0.08) 35%, transparent 70%)',
            animation: 'pulseGlow 4s ease-in-out infinite alternate',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 20% 80%, rgba(74,222,128,0.15) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(34,197,94,0.18) 0%, transparent 45%)',
          }}
        />
      </div>
    );
  }

  return <HeroComponent />;
};

export default FuturisticHeroSafe;
