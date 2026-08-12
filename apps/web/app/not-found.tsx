import type { Metadata } from 'next';
import { ActionLink, Eyebrow, SplitHeading } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="sec">
      <div className="wrap wrap-narrow" style={{ textAlign: 'center', padding: '48px 0' }}>
        <Eyebrow center>Error 404</Eyebrow>
        <SplitHeading as="h1" top="We couldn't find" accent="that page." />
        <p className="lead" style={{ margin: '18px auto 32px' }}>
          The link may be out of date. Everything we publish is reachable from the pages below.
        </p>
        <div className="btns center">
          <ActionLink href="/" label="Back to Home" variant="primary" />
          <ActionLink href="/assistance" label="Get Assistance" variant="outline" />
        </div>
      </div>
    </div>
  );
}
