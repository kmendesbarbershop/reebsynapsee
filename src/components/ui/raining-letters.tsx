"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";

interface Character {
  char: string;
  x: number;
  y: number;
  speed: number;
}

const ALL_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

export const RainingLettersBackground: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set());

  const createCharacters = useCallback(() => {
    const newCharacters: Character[] = [];
    for (let i = 0; i < 250; i++) {
      newCharacters.push({
        char: ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: 0.08 + Math.random() * 0.25,
      });
    }
    return newCharacters;
  }, []);

  useEffect(() => {
    setCharacters(createCharacters());
  }, [createCharacters]);

  useEffect(() => {
    const updateActiveIndices = () => {
      const newActiveIndices = new Set<number>();
      const numActive = Math.floor(Math.random() * 4) + 3;
      for (let i = 0; i < numActive; i++) {
        newActiveIndices.add(Math.floor(Math.random() * characters.length));
      }
      setActiveIndices(newActiveIndices);
    };
    const flickerInterval = setInterval(updateActiveIndices, 60);
    return () => clearInterval(flickerInterval);
  }, [characters.length]);

  useEffect(() => {
    let animationFrameId: number;
    const updatePositions = () => {
      setCharacters((prevChars) =>
        prevChars.map((char) => ({
          ...char,
          y: char.y + char.speed,
          ...(char.y >= 105 && {
            y: -5,
            x: Math.random() * 100,
            char: ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)],
          }),
        })),
      );
      animationFrameId = requestAnimationFrame(updatePositions);
    };
    animationFrameId = requestAnimationFrame(updatePositions);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {characters.map((char, index) => {
        const isActive = activeIndices.has(index);
        return (
          <span
            key={index}
            className="absolute font-mono text-sm transition-colors duration-100"
            style={{
              left: `${char.x}%`,
              top: `${char.y}%`,
              color: isActive ? "#B6FF00" : "#1f1f1f",
              textShadow: isActive
                ? "0 0 8px #B6FF00, 0 0 12px rgba(182,255,0,0.6)"
                : "none",
              fontWeight: isActive ? 700 : 400,
              willChange: "transform, top",
            }}
          >
            {char.char}
          </span>
        );
      })}
    </div>
  );
};

export default RainingLettersBackground;
