import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let rafId: number;
    let targetX = 0,
      targetY = 0;
    let ringX = 0,
      ringY = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement;
      setHovered(!!el.closest("a, button, [data-cursor-hover]"));
    };

    const animate = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      setRingPos({ x: ringX, y: ringY });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor cursor-dot"
        style={{ transform: `translate3d(${pos.x - 3}px, ${pos.y - 3}px, 0)` }}
      />
      <div
        className={`custom-cursor cursor-ring ${hovered ? "hovered" : ""}`}
        style={{
          transform: `translate3d(${ringPos.x - (hovered ? 30 : 18)}px, ${ringPos.y - (hovered ? 30 : 18)}px, 0)`,
        }}
      />
    </>
  );
};
