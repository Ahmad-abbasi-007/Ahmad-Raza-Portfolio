import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices with fine pointers
    const matchMedia = window.matchMedia('(pointer: fine)');
    setIsDesktop(matchMedia.matches);

    if (!matchMedia.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('clickable');
        setIsPointer(isClickable);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isDesktop || !isVisible) return null;

  return (
    <>
      {/* Tiny dot */}
      <div
        className="fixed pointer-events-none z-50 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '8px' : '6px',
          height: isPointer ? '8px' : '6px',
        }}
      />
      {/* Glow outer ring */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full border border-cyan-400/40 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${
          isPointer
            ? 'w-10 h-10 bg-cyan-400/10 scale-110 border-cyan-400'
            : 'w-7 h-7 bg-transparent scale-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};
