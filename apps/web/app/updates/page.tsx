import type { Metadata } from 'next';
import { site, updates, updatesPage } from '@vfc/shared';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { Reveal } from '@/components/Reveal';
import { ActionLink, PageHead } from '@/components/ui';
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from '@/components/seo';

const TITLE = 'Our Work: Vision for Change Updates and Progress';
const DESCRIPTION =
  'Progress updates from Vision for Change: community partnerships, the app beta, optometry partners, eye-health workshops, and our first impact report.';

export const metadata: Metadata = pageMetadata({
  title: 'Our Work',
  absoluteTitle: TITLE,
  description: DESCRIPTION,
  path: '/updates',
});

export default function UpdatesPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          type: 'CollectionPage',
          title: TITLE,
          description: DESCRIPTION,
          path: '/updates',
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Our Work', path: '/updates' },
        ])}
      />
      <PageHead
        eyebrow={updatesPage.eyebrow}
        top={updatesPage.titleTop}
        accent={updatesPage.titleAccent}
        body={updatesPage.body}
        aside={updatesPage.aside}
      />

      <div className="sec">
        <div className="wrap wrap-narrow">
          <ul className="updates">
            {updates.map((update) => (
              <Reveal as="li" className="update" key={update.title}>
                <span className="update-ico">
                  <Icon name={update.icon} />
                </span>
                <div>
                  <b>{update.title}</b>
                  <p>{update.body}</p>
                </div>
                <div className="chip-wrap">
                  <span
                    className={
                      update.status === 'upcoming' ? 'chip' : `chip ${update.status}`
                    }
                  >
                    {update.statusLabel}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <div className="btns center" style={{ marginTop: 44 }}>
              <ActionLink href={site.instagram} label="Follow Our Work" external />
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
