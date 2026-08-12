import type { Metadata } from 'next';
import { hero, site } from '@vfc/shared';
import { ActionLink, CtaBand } from '@/components/ui';
import { HeroArt, ImpactSection, Pillars, ProblemRows } from '@/components/sections';
import { pageMetadata } from '@/components/seo';

export const metadata: Metadata = pageMetadata({
  title: `${site.name}: ${site.tagline}`,
  description: site.description,
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <p className="hero-tagline">
              <b>{hero.badge}</b>
              <span>{hero.badgeNote}</span>
            </p>
            <h1 className="h-xl">
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

      <ProblemRows index="01" />
      <Pillars index="02" />
      <ImpactSection tone index="03" />

      <CtaBand
        eyebrow="Get Assistance"
        index="04"
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
