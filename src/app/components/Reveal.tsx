'use client';
import { useEffect, useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  as?: 'div' | 'article' | 'section';
  className?: string;
};

export default function Reveal({ children, delay = 0, as = 'div', className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const Tag = as as 'div';

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
