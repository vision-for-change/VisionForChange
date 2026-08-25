import Link from 'next/link';
import { site } from '@vfc/shared';
import { Brand } from './ui';
import { Icon } from './Icon';

const EXPLORE = [
  { href: '/mission', label: 'Our Mission' },
  { href: '/app', label: 'Our App' },
  { href: '/assistance', label: 'Get Eye-Care Assistance' },
  { href: '/eye-care-guide', label: 'Eye Care Guide' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/updates', label: 'Our Work' },
  { href: '/about', label: 'About Us' },
];

/**
 * Deep links into the guide. Each one is a question people search for, so
 * the anchor text doubles as the internal-link signal for that section.
 */
const GUIDE = [
  { href: '/eye-care-guide#affordable-eye-care', label: 'Affordable eye care' },
  { href: '/eye-care-guide#why-regular-eye-care-matters', label: 'Why eye exams matter' },
  { href: '/eye-care-guide#screen-time-and-eyes', label: 'Screen time and your eyes' },
  { href: '/eye-care-guide#connect-with-an-optometrist', label: 'Finding an optometrist' },
];

const PARTNER = [
  { href: site.optometryForm, label: 'Optometrists' },
  { href: site.communityForm, label: 'Organizations' },
  { href: site.sponsorForm, label: 'Sponsors' },
  { href: site.volunteerForm, label: 'Volunteers' },
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
          <a href={site.assistanceForm} target="_blank" rel="noopener noreferrer">
            Assistance Form
          </a>
        </nav>

        <nav className="foot-col" aria-label="Eye care guide">
          <b>Eye Care Guide</b>
          {GUIDE.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <nav className="foot-col" aria-label="For partners">
          <b>For Partners</b>
          {PARTNER.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          ))}
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
        <p>
          {/* The handle is visible text, not just an icon label, so the
              account and this site read as the same organization. */}
          <a href={site.instagram} target="_blank" rel="me noopener noreferrer">
            Instagram {site.instagramHandle}
          </a>
        </p>
        <p>
          {site.locality}, Ontario, Canada
        </p>
      </div>
    </footer>
  );
}
