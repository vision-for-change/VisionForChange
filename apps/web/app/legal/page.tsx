import type { Metadata } from 'next';
import { legal, site } from '@vfc/shared';
import { JsonLd } from '@/components/JsonLd';
import { Reveal } from '@/components/Reveal';
import { PageHead } from '@/components/ui';
import { breadcrumbJsonLd, pageMetadata } from '@/components/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Legal',
  description:
    'Privacy, terms, and accessibility for Vision for Change, in plain language.',
  path: '/legal',
});

export default function LegalPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Legal', path: '/legal' },
        ])}
      />
      <PageHead
        eyebrow="Legal"
        top="Privacy, terms and"
        accent="accessibility"
        body="Plain-language summaries of how we handle your information and what you can expect from this site."
        aside={`Questions about any of this? Email us at ${site.email} and we'll answer directly.`}
      />

      <div className="sec">
        <div className="wrap wrap-narrow">
          <div className="grid-2">
            {legal.map((item) => (
              <Reveal className="card" key={item.title}>
                <h2 className="h-sm" id={item.title.toLowerCase()}>
                  {item.title}
                </h2>
                <p>{item.body}</p>
              </Reveal>
            ))}

            <Reveal className="card">
              <h2 className="h-sm">Questions</h2>
              <p>
                Reach us any time at{' '}
                <a href={`mailto:${site.email}`} style={{ color: 'var(--teal)', fontWeight: 600 }}>
                  {site.email}
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}
