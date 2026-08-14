import type { Metadata } from 'next';
import { involveOptions, involvePage, site } from '@vfc/shared';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { Reveal } from '@/components/Reveal';
import { ArrowLink, Eyebrow, PageHead, SplitHeading } from '@/components/ui';
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from '@/components/seo';

const TITLE = 'Get Involved: Partner with Vision for Change';
const DESCRIPTION =
  'Partner with Vision for Change as an optometrist, community organization, sponsor, or volunteer, and help widen access to eye care in Ottawa and beyond.';

export const metadata: Metadata = pageMetadata({
  title: 'Get Involved',
  absoluteTitle: TITLE,
  description: DESCRIPTION,
  path: '/get-involved',
});

export default function GetInvolvedPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          type: 'ContactPage',
          title: TITLE,
          description: DESCRIPTION,
          path: '/get-involved',
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Get Involved', path: '/get-involved' },
        ])}
      />
      <PageHead
        eyebrow={involvePage.eyebrow}
        top={involvePage.titleTop}
        accent={involvePage.titleAccent}
        body={involvePage.body}
        aside={involvePage.aside}
      />

      <div className="sec">
        <div className="wrap">
          <div className="involve-grid">
            {involveOptions.map((option) => (
              <Reveal className="involve" key={option.title}>
                <span className="involve-ico">
                  <Icon name={option.icon} size="lg" />
                </span>
                <h2 className="h-md">{option.title}</h2>
                <p>{option.body}</p>
                <ArrowLink
                  href={option.href}
                  label={option.linkLabel}
                  external={option.external}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="sec tone">
        <div className="wrap wrap-narrow">
          <Reveal className="head center">
            <Eyebrow center>Contact</Eyebrow>
            <SplitHeading top="Not sure where you" accent="fit in?" />
            <p className="lead">
              Reach out and tell us what you&apos;d like to do. We&apos;ll figure it out together.
            </p>
          </Reveal>

          <Reveal className="contact-list">
            <a className="contact-row" href={`mailto:${site.email}`}>
              <span className="contact-ico">
                <Icon name="mail" />
              </span>
              <span>
                <small>Email</small>
                <b>{site.email}</b>
              </span>
              <Icon name="arrow" className="ico-arrow" />
            </a>

            <a className="contact-row" href={`tel:${site.phoneHref}`}>
              <span className="contact-ico">
                <Icon name="phone" />
              </span>
              <span>
                <small>Phone</small>
                <b>{site.phone}</b>
              </span>
              <Icon name="arrow" className="ico-arrow" />
            </a>

            <a
              className="contact-row"
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-ico">
                <Icon name="instagram" />
              </span>
              <span>
                <small>Instagram</small>
                <b>{site.instagramHandle}</b>
              </span>
              <Icon name="arrowUpRight" className="ico-arrow" />
            </a>
          </Reveal>
        </div>
      </div>
    </>
  );
}
