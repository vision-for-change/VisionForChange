import type { Metadata } from 'next';
import { hero, site } from '@vfc/shared';
import { ActionLink, CtaBand } from '@/components/ui';
import {
  HeroArt,
  ImpactSection,
  Pillars,
  ProblemRows,
  WhatIsSection,
} from '@/components/sections';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, webPageJsonLd } from '@/components/seo';

const TITLE = `${site.name}: Accessible Eye Care Initiative in Ottawa`;

export const metadata: Metadata = pageMetadata({
  title: site.name,
  absoluteTitle: TITLE,
  description: site.metaDescription,
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          type: 'WebPage',
          title: TITLE,
          description: site.definition,
          path: '/',
        })}
      />
      <section className="hero">
        <div className="hero-grid">
          <div>
            <p className="hero-tagline">
              <b>{hero.badge}</b>
              <span>{hero.badgeNote}</span>
            </p>
            {/*
              The visible h1 is the tagline, which carries no brand name. The
              organization name leads the heading for screen readers and
              crawlers so the site's most important heading names the entity
              the domain belongs to, without altering the hero's design.
            */}
            <h1 className="h-xl">
              <span className="visually-hidden">{site.name}: </span>
              {hero.titleTop}
              <br />
              <em className="accent">{hero.titleAccent}</em>
            </h1>
            <p className="lead">{hero.body}</p>
            <div className="btns">
              <ActionLink href="/assistance" label="Get Assistance" variant="primary" />
              <ActionLink href="/app" label="Explore Our App" variant="outline" />
            </div>
            <p className="hero-note">{hero.note}</p>
          </div>
          <HeroArt />
        </div>
      </section>

      <WhatIsSection index="01" />
      <ProblemRows index="02" />
      <Pillars index="03" />
      <ImpactSection tone index="04" />

      <CtaBand
        eyebrow="Get Assistance"
        index="05"
        top="Need help accessing"
        accent="eye care?"
        body="If cost or another barrier is standing in the way, tell us about your situation and we'll do our best to connect you with available assistance."
        actions={
          <>
            <ActionLink href="/assistance" label="Request Assistance" variant="inverse" />
            <ActionLink href="/get-involved" label="Get Involved" variant="quiet" />
          </>
        }
      />
    </>
  );
}
