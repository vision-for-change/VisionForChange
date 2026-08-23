import type { Metadata } from 'next';
import { assistance, assistanceFaq, assistanceSteps, mailto, site } from '@vfc/shared';
import { JsonLd } from '@/components/JsonLd';
import { Reveal } from '@/components/Reveal';
import { ActionLink, ArrowLink, Eyebrow, Notice, PageHead, SplitHeading } from '@/components/ui';
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, webPageJsonLd } from '@/components/seo';

const TITLE = 'Get Eye-Care Assistance: Free Help Accessing Eye Care';
const DESCRIPTION =
  'If cost is preventing you from accessing eye care, Vision for Change can try to connect you with eye care support and optometrists in Ottawa. Free to request.';

export const metadata: Metadata = pageMetadata({
  title: 'Get Eye-Care Assistance',
  absoluteTitle: TITLE,
  description: DESCRIPTION,
  path: '/assistance',
});

export default function AssistancePage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: TITLE,
          description: DESCRIPTION,
          path: '/assistance',
        })}
      />
      <JsonLd data={faqJsonLd(assistanceFaq)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Get Eye-Care Assistance', path: '/assistance' },
        ])}
      />
      <PageHead
        eyebrow={assistance.eyebrow}
        top={assistance.titleTop}
        accent={assistance.titleAccent}
        body={assistance.body}
        aside={assistance.aside}
      />

      <div className="sec">
        <div className="wrap">
          <Reveal className="head center">
            <Eyebrow index="01" center>
              How it works
            </Eyebrow>
            <SplitHeading top="Three steps," accent="no cost to you." />
          </Reveal>

          <ol className="steps">
            {assistanceSteps.map((step, i) => (
              <Reveal as="li" className="step" key={step.title}>
                <span className="step-num" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="h-sm">{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <div className="btns center" style={{ marginTop: 44 }}>
              <ActionLink href={site.assistanceForm} label={assistance.cta} external />
            </div>
            <p className="center" style={{ marginTop: 18 }}>
              {/* The form is the way in, but nobody should be stuck if they
                  can't use it, so the email route stays one click away. */}
              <ArrowLink href={mailto('Eye-Care Assistance Request')} label="Prefer to email us instead?" />
            </p>
          </Reveal>

          <Reveal>
            <div style={{ maxWidth: 660, margin: '32px auto 0' }}>
              <Notice icon="info">
                We&apos;re an early-stage initiative still building our provider network, so we
                can&apos;t guarantee an outcome for every request.{' '}
                <strong>We&apos;ll do our best to connect you with available assistance.</strong>
              </Notice>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="sec tone">
        <div className="wrap wrap-narrow">
          <Reveal className="head center">
            <Eyebrow index="02" center>
              Common questions
            </Eyebrow>
            <SplitHeading top="Before you" accent="reach out" />
          </Reveal>

          <div className="grid-2">
            {assistanceFaq.map((item) => (
              <Reveal className="card" key={item.q}>
                <h3 className="h-sm">{item.q}</h3>
                <p>{item.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
