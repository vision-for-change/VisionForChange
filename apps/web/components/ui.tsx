import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Icon } from './Icon';

/* ── Brand mark ── */

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  const plate = inverse ? '#FBFAF7' : '#16201F';
  const stroke = inverse ? '#16201F' : '#FBFAF7';
  const pupil = inverse ? '#FBFAF7' : '#16201F';
  return (
    <svg className="brand-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="11" fill={plate} />
      <path
        d="M8 20c0 0 4.8-7 12-7s12 7 12 7-4.8 7-12 7S8 20 8 20Z"
        stroke={stroke}
        strokeWidth="1.6"
      />
      <circle cx="20" cy="20" r="4.3" fill="#0E6E62" />
      <circle cx="20" cy="20" r="1.7" fill={pupil} />
    </svg>
  );
}

/**
 * The full wordmark, used in the nav. `Brand` below stays for the footer:
 * this artwork is black and teal, so it would disappear on the dark plate.
 *
 * The alt text carries the organization name, since the words here are
 * pixels rather than markup.
 */
export function BrandLogo() {
  return (
    <Link href="/" className="brand-logo" aria-label="Vision for Change, home">
      <Image src="/vision-for-change-wordmark.png" alt="Vision for Change" width={1265} height={189} priority />
    </Link>
  );
}

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="brand">
      <BrandMark inverse={inverse} />
      <span className="brand-name">
        Vision for <i>Change</i>
      </span>
    </Link>
  );
}

/* ── Typography ── */

export function Eyebrow({
  index,
  children,
  center = false,
}: {
  index?: string;
  children: ReactNode;
  center?: boolean;
}) {
  return (
    <p className={center ? 'eyebrow center' : 'eyebrow'}>
      {index ? <b>{index}</b> : null}
      <span>{children}</span>
    </p>
  );
}

/**
 * Headings split into a plain part and an italic accent part, matching
 * the pattern used throughout the content model.
 */
export function SplitHeading({
  top,
  accent,
  as = 'h2',
  size = 'h-lg',
  className,
}: {
  top: string;
  accent: string;
  as?: 'h1' | 'h2';
  size?: 'h-xl' | 'h-lg';
  className?: string;
}) {
  const Tag = as;
  return (
    <Tag className={className ? `${size} ${className}` : size}>
      {top} <em className="accent">{accent}</em>
    </Tag>
  );
}

/* ── Links and buttons ── */

type ButtonVariant = 'primary' | 'outline' | 'inverse' | 'quiet';

export function ActionLink({
  href,
  label,
  variant = 'primary',
  external = false,
  className,
}: {
  href: string;
  label: string;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
}) {
  const cls = `btn btn-${variant}${className ? ` ${className}` : ''}`;
  const icon = <Icon name={external ? 'arrowUpRight' : 'arrow'} size="sm" />;

  if (external || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a
        className={cls}
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {label}
        {icon}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {label}
      {icon}
    </Link>
  );
}

export function ArrowLink({
  href,
  label,
  external = false,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const icon = <Icon name={external ? 'arrowUpRight' : 'arrow'} size="sm" />;

  if (external || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a
        className="arrow-link"
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {label}
        {icon}
      </a>
    );
  }
  return (
    <Link className="arrow-link" href={href}>
      {label}
      {icon}
    </Link>
  );
}

/* ── Blocks ── */

export function Notice({ icon, children }: { icon: 'info' | 'alert'; children: ReactNode }) {
  return (
    <div className="notice" role="note">
      <Icon name={icon} />
      <div>{children}</div>
    </div>
  );
}

export function PageHead({
  eyebrow,
  top,
  accent,
  body,
  aside,
}: {
  eyebrow: string;
  top: string;
  accent: string;
  body: string;
  aside: string;
}) {
  return (
    <header className="page-head">
      <div className="page-head-grid">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <SplitHeading as="h1" top={top} accent={accent} />
          <p className="lead">{body}</p>
        </div>
        <aside className="page-head-aside">
          <p>{aside}</p>
        </aside>
      </div>
    </header>
  );
}

export function CtaBand({
  top,
  accent,
  body,
  actions,
  eyebrow,
  index,
}: {
  top: string;
  accent: string;
  body: string;
  actions: ReactNode;
  eyebrow?: string;
  index?: string;
}) {
  return (
    <section className="band">
      <div className="band-inner" style={{ maxWidth: 660 }}>
        {eyebrow ? <Eyebrow index={index}>{eyebrow}</Eyebrow> : null}
        <SplitHeading top={top} accent={accent} />
        <p className="lead">{body}</p>
        <div className="btns">{actions}</div>
      </div>
    </section>
  );
}
