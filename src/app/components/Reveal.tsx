'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  as?: 'div' | 'article' | 'section';
  className?: string;
};

export default function Reveal({ children, delay = 0, as = 'div', className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const [settled, setSettled] = useState(false); // drops the stagger delay so hovers feel instant
  const Tag = as as 'div';

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
          timer = setTimeout(() => setSettled(true), delay + 1000);
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [delay]);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: settled ? '0ms' : `${delay}ms` }}
      className={`transition-[opacity,translate,box-shadow,border-color] duration-700 ease-premium motion-reduce:translate-y-0 motion-reduce:opacity-100 ${shown ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        } ${className}`}
    >
      {children}
    </Tag>
  );
}