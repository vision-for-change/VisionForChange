import Link from 'next/link';
import { mailto, site } from '@vfc/shared';
import { Brand } from './ui';
import { Icon } from './Icon';

const EXPLORE = [
  { href: '/mission', label: 'Our Mission' },
  { href: '/app', label: 'Our App' },
  { href: '/assistance', label: 'Get Assistance' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/about', label: 'About Us' },
];

const LEGAL = [
  { href: '/legal#privacy', label: 'Privacy' },
  { href: '/legal#terms', label: 'Terms' },
  { href: '/legal#accessibility', label: 'Accessibility' },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="foot-grid">
        <div className="foot-brand">
          <Brand inverse />
          <p>{site.shortDescription}</p>
          <div className="foot-social">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vision for Change on Instagram"
            >
              <Icon name="instagram" />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email Vision for Change">
              <Icon name="mail" />
            </a>
          </div>
        </div>

        <nav className="foot-col" aria-label="Explore">
          <b>Explore</b>
          {EXPLORE.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <nav className="foot-col" aria-label="For partners">
          <b>For Partners</b>
          <a href={mailto('Optometry Partnership')}>Optometrists</a>
          <a href={mailto('Community Partnership')}>Organizations</a>
          <a href={site.sponsorForm} target="_blank" rel="noopener noreferrer">
            Sponsors
          </a>
          <a href={mailto('Volunteering')}>Volunteers</a>
        </nav>

        <nav className="foot-col" aria-label="Legal">
          <b>Legal</b>
          {LEGAL.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="foot-bottom">
        <p>
          &copy; {site.founded} {site.name}. Youth-led eye-care initiative.
        </p>
        <p>Ottawa, Canada</p>
      </div>
    </footer>
  );
}
