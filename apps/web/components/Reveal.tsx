'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Fades content in as it scrolls into view.
 *
 * The content is always present in the HTML: this only toggles a class.
 * Crawlers and no-JS users get the fully visible page via the `.no-js`
 * rule in globals.css, so nothing here can hide content from indexing.
 *
 * Three cases short-circuit straight to visible: reduced-motion, no
 * IntersectionObserver support, and content already on screen at mount.
 * Everything else waits for the observer.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  className,
}: {
  children: ReactNode;
  as?: 'div' | 'section' | 'li';
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      el.classList.add('in');
      return;
    }

    // Already on screen at mount: show it immediately, no fade on arrival.
    if (el.getBoundingClientRect().top < window.innerHeight - 40) {
      el.classList.add('in');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.disconnect();
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const cls = className ? `rv ${className}` : 'rv';
  return (
    <Tag ref={ref as never} className={cls}>
      {children}
    </Tag>
  );
}
