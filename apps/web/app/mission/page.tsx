import type { Metadata } from 'next';
import { mission } from '@vfc/shared';
import { JsonLd } from '@/components/JsonLd';
import { ActionLink, CtaBand, PageHead } from '@/components/ui';
import { Pillars, ProblemCards } from '@/components/sections';
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from '@/components/seo';

const TITLE = 'Our Mission: Accessible and Affordable Eye Care';
const DESCRIPTION =
  'Essential eye care is a basic need, not a luxury. How Vision for Change works on prevention, access, and eye health education at the same time.';

export const metadata: Metadata = pageMetadata({
  title: 'Our Mission',
  absoluteTitle: TITLE,
  description: DESCRIPTION,
  path: '/mission',
});

export default function MissionPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          type: 'AboutPage',
          title: TITLE,
          description: DESCRIPTION,
          path: '/mission',
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Our Mission', path: '/mission' },
        ])}
      />
      <PageHead
        eyebrow={mission.eyebrow}
        top={mission.titleTop}
        accent={mission.titleAccent}
        body={mission.body}
        aside={mission.aside}
      />

      <ProblemCards index="01" />
      <Pillars tone index="02" />

      <CtaBand
        top="Want to help us"
        accent="go further?"
        body="Optometrists, organizations, sponsors, and volunteers all have a place in this work."
        actions={<ActionLink href="/get-involved" label="Get Involved" variant="inverse" />}
      />
    </>
  );
}
