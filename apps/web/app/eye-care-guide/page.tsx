import type { Metadata } from 'next';
import Link from 'next/link';
import { guidePage, guideSections, mailto, site } from '@vfc/shared';
import { JsonLd } from '@/components/JsonLd';
import { Reveal } from '@/components/Reveal';
import { ActionLink, CtaBand, Eyebrow, Notice, PageHead } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, webPageJsonLd } from '@/components/seo';

const TITLE = 'Eye Care Guide: Affordable Eye Care and Eye Health';
const DESCRIPTION =
  'Plain-language answers on affordable eye care, why eye exams matter, protecting your eyesight, screen time, and finding an optometrist in Ottawa and Ontario.';

export const metadata: Metadata = pageMetadata({
  title: 'Eye Care Guide',
  absoluteTitle: TITLE,
  description: DESCRIPTION,
  path: '/eye-care-guide',
});

/** Internal links keep the reader on site; external ones open in a new tab. */
function GuideLink({ href, label }: { href: string; label: string }) {
  const external = href.startsWith('http');
  const icon = <Icon name={external ? 'arrowUpRight' : 'arrow'} size="sm" />;

  if (external) {
    return (
      <a className="arrow-link" href={href} target="_blank" rel="noopener noreferrer">
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

export default function EyeCareGuidePage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: TITLE,
          description: DESCRIPTION,
          path: '/eye-care-guide',
        })}
      />
      {/*
        The FAQ entries reuse each section's heading and summary verbatim, so
        the structured data can never drift from what the page actually says.
      */}
      <JsonLd
        data={faqJsonLd(guideSections.map((s) => ({ q: s.question, a: s.summary })))}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Eye Care Guide', path: '/eye-care-guide' },
        ])}
      />

      <PageHead
        eyebrow={guidePage.eyebrow}
        top={guidePage.titleTop}
        accent={guidePage.titleAccent}
        body={guidePage.body}
        aside={guidePage.aside}
      />

      <div className="sec">
        <div className="wrap wrap-narrow">
          {/* Jump list: a real table of contents, and it gives crawlers the
              full set of questions this page answers in one block. */}
          <Reveal>
            <nav className="guide-toc" aria-label="Questions answered on this page">
              <b>On this page</b>
              <ol>
                {guideSections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.question}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>

          {guideSections.map((section, i) => (
            <Reveal as="section" className="guide-sec" key={section.id}>
              <article id={section.id}>
                <Eyebrow index={String(i + 1).padStart(2, '0')}>Question</Eyebrow>
                <h2 className="h-lg guide-q">{section.question}</h2>

                <p className="lead guide-summary">{section.summary}</p>

                <div className="prose">
                  {section.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>

                {section.points ? (
                  <ul className="guide-points">
                    {section.points.map((point) => (
                      <li key={point}>
                        <Icon name="check" size="sm" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {section.links ? (
                  <div className="guide-links">
                    {section.links.map((link) => (
                      <GuideLink key={link.href} href={link.href} label={link.label} />
                    ))}
                  </div>
                ) : null}
              </article>
            </Reveal>
          ))}

          <Reveal>
            <div style={{ marginTop: 8 }}>
              <Notice icon="alert">{guidePage.disclaimer}</Notice>
            </div>
          </Reveal>

          <Reveal>
            <p className="small" style={{ marginTop: 24 }}>
              Questions this guide does not answer? Email{' '}
              <a href={mailto('Eye Care Question')} style={{ color: 'var(--teal)', fontWeight: 600 }}>
                {site.email}
              </a>{' '}
              and a member of the Vision for Change team will get back to you.
            </p>
          </Reveal>
        </div>
      </div>

      <CtaBand
        eyebrow="Get Assistance"
        top={guidePage.closingTop}
        accent={guidePage.closingAccent}
        body={guidePage.closingBody}
        actions={
          <>
            <ActionLink href="/assistance" label="Request Assistance" variant="inverse" />
            <ActionLink href="/app" label="Explore Our App" variant="quiet" />
          </>
        }
      />
    </>
  );
}
