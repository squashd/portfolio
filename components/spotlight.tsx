"use client";
import { useRef, useState } from "react";

type SpotLightProps = {
  children: React.ReactNode;
};

// Credit: Julien Thibeaut
// Source: https://www.julienthibeaut.xyz/blog/create-modern-spotlight-effect-with-react-css

export const SpotLightEffect = (props: SpotLightProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-lg bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400 text-card-foreground shadow-md dark:bg-slate-900 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900"
    >
      <div
        className="pointer-events-none invisible absolute -inset-px opacity-0 transition duration-300 dark:visible"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
        }}
      />
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 dark:invisible"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgb(139, 92, 246,0.6), transparent 40%)`,
        }}
      />
      {props.children}
    </div>
  );
};
