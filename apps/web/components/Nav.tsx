'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav, primaryCta } from '@vfc/shared';
import { Brand } from './ui';
import { Icon } from './Icon';

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Route change closes the drawer.
  useEffect(() => setOpen(false), [pathname]);

  // Escape closes the drawer, so keyboard users are never trapped.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isCurrent = (href: string) => pathname === href;

  return (
    <>
      <nav className={stuck ? 'nav stuck' : 'nav'} aria-label="Primary">
        <Brand />

        <ul className="nav-links">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href={primaryCta.href} className="nav-cta">
          {primaryCta.label}
          <Icon name="arrow" size="sm" />
        </Link>

        <button
          type="button"
          className={open ? 'burger open' : 'burger'}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {open ? (
        <div className="drawer" id="mobile-drawer">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/updates" aria-current={isCurrent('/updates') ? 'page' : undefined}>
            Our Work
          </Link>
          <Link href={primaryCta.href} className="nav-cta">
            {primaryCta.label}
            <Icon name="arrow" size="sm" />
          </Link>
        </div>
      ) : null}
    </>
  );
}
