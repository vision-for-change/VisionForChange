import type { Metadata } from 'next';
import { about, roadmap, team } from '@vfc/shared';
import { JsonLd } from '@/components/JsonLd';
import { Reveal } from '@/components/Reveal';
import { ActionLink, Eyebrow, PageHead, SplitHeading } from '@/components/ui';
import { ImpactSection } from '@/components/sections';
import { breadcrumbJsonLd, pageMetadata } from '@/components/seo';

export const metadata: Metadata = pageMetadata({
  title: 'About Us',
  description:
    'Vision for Change is a youth-led initiative founded on one idea: access to quality eye care should not depend solely on financial circumstances.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
        ])}
      />
      <PageHead
        eyebrow={about.eyebrow}
        top={about.titleTop}
        accent={about.titleAccent}
        body={about.body}
        aside={about.aside}
      />

      <div className="sec">
        <div className="wrap about-grid">
          <Reveal>
            <Eyebrow index="01">Why we started</Eyebrow>
            <SplitHeading top={about.storyTitleTop} accent={about.storyTitleAccent} />
            <div className="prose" style={{ marginTop: 24 }}>
              {about.story.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="quote">
              <p>{about.quote}</p>
            </blockquote>
            <div className="prose">
              <p>{about.storyClose}</p>
            </div>
          </Reveal>

          <Reveal>
            <Eyebrow index="02">Where we&apos;re going</Eyebrow>
            <ol className="timeline" style={{ marginTop: 24 }}>
              {roadmap.map((item) => (
                <li className={item.done ? 'tl done' : 'tl'} key={item.title}>
                  <b>{item.title}</b>
                  <span>{item.body}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>

      <div className="sec tone">
        <div className="wrap">
          <Reveal className="head">
            <Eyebrow index="03">Our team</Eyebrow>
            <SplitHeading top="The people" accent="behind it" />
            <p className="lead">
              A small, youth-led team spread across outreach, development, and partnerships.
            </p>
          </Reveal>

          <div className="team">
            {team.map((member) => (
              <Reveal className="member" key={member.name}>
                <span className="member-avatar" aria-hidden="true">
                  {member.initials}
                </span>
                <b>{member.name}</b>
                <span>{member.role}</span>
                <p>{member.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="btns" style={{ marginTop: 36 }}>
              <ActionLink href="/get-involved" label="Join the Team" variant="outline" />
            </div>
          </Reveal>
        </div>
      </div>

      <ImpactSection index="04" center={false} showFootnote />
    </>
  );
}
