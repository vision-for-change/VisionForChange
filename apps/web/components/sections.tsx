import {
  impactIntro,
  metrics,
  pillars,
  problemIntro,
  problems,
  whatIs,
} from '@vfc/shared';
import { Icon } from './Icon';
import { Reveal } from './Reveal';
import { ArrowLink, Eyebrow, SplitHeading } from './ui';

/**
 * States plainly what the organization is, in a heading phrased the way
 * people ask it. The home page otherwise leads with a tagline, which reads
 * well but never actually says what Vision for Change does.
 */
export function WhatIsSection({ index = '01' }: { index?: string }) {
  return (
    <div className="sec">
      <div className="wrap what-is">
        <Reveal>
          <Eyebrow index={index}>{whatIs.eyebrow}</Eyebrow>
          <h2 className="h-lg">{whatIs.heading}</h2>
          <p className="lead" style={{ marginTop: 18 }}>
            {whatIs.body}
          </p>
          <div className="btns" style={{ marginTop: 30 }}>
            <ArrowLink href="/mission" label="Read our mission" />
          </div>
        </Reveal>

        <Reveal>
          <ul className="what-is-list">
            {whatIs.points.map((point) => (
              <li key={point.label}>
                <span className="what-is-ico">
                  <Icon name="check" size="sm" />
                </span>
                <span>
                  <b>{point.label}</b>
                  <span>{point.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}

/** Decorative line drawing used in the home hero. */
export function HeroArt() {
  return (
    <div className="hero-art">
      <svg viewBox="0 0 440 380" fill="none" aria-hidden="true">
        <circle cx="220" cy="190" r="168" stroke="#E4E0D7" />
        <circle cx="220" cy="190" r="126" stroke="#E4E0D7" strokeDasharray="3 7" />
        <path
          d="M64 190c0 0 66-84 156-84s156 84 156 84-66 84-156 84S64 190 64 190Z"
          fill="#FFFFFF"
          stroke="#16201F"
          strokeWidth="2"
        />
        <circle cx="220" cy="190" r="56" fill="#EDF4F2" stroke="#0E6E62" strokeWidth="2" />
        <circle cx="220" cy="190" r="56" fill="none" stroke="#0E6E62" strokeWidth="1" strokeDasharray="2 6" />
        <circle cx="220" cy="190" r="23" fill="#16201F" />
        <circle cx="210" cy="180" r="7.5" fill="#FBFAF7" opacity=".9" />
        <path d="M220 106v-30M220 274v30M64 190H34M376 190h30" stroke="#D3CEC2" strokeWidth="1.4" />
        <circle cx="220" cy="72" r="3.4" fill="#0E6E62" />
        <circle cx="220" cy="308" r="3.4" fill="#0E6E62" />
        <circle cx="30" cy="190" r="3.4" fill="#B4552F" />
        <circle cx="410" cy="190" r="3.4" fill="#0E6E62" />
        <path d="M120 122 96 98M320 122l24-24M120 258l-24 24M320 258l24 24" stroke="#E4E0D7" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

/** The problem, as an editorial rule-separated list. */
export function ProblemRows({ index = '01' }: { index?: string }) {
  return (
    <div className="sec tone">
      <div className="wrap">
        <Reveal className="head">
          <Eyebrow index={index}>{problemIntro.eyebrow}</Eyebrow>
          <SplitHeading top={problemIntro.titleTop} accent={problemIntro.titleAccent} />
          <p className="lead">{problemIntro.body}</p>
        </Reveal>

        <div className="rows">
          {problems.map((problem, i) => (
            <Reveal key={problem.title} className="row-item">
              <p className="row-num">{String(i + 1).padStart(2, '0')}</p>
              <div className="row-head">
                <span className="row-icon">
                  <Icon name={problem.icon} />
                </span>
                <h3 className="h-sm">{problem.title}</h3>
              </div>
              <p className="body">{problem.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

/** The same three problems as cards, for pages that need a lighter treatment. */
export function ProblemCards({ index = '01' }: { index?: string }) {
  return (
    <div className="sec">
      <div className="wrap">
        <Reveal className="head">
          <Eyebrow index={index}>{problemIntro.eyebrow}</Eyebrow>
          <SplitHeading top={problemIntro.titleTop} accent={problemIntro.titleAccent} />
          <p className="lead">{problemIntro.body}</p>
        </Reveal>

        <div className="grid-3">
          {problems.map((problem) => (
            <Reveal key={problem.title} className="card">
              <span className="card-icon">
                <Icon name={problem.icon} />
              </span>
              <h3 className="h-sm">{problem.title}</h3>
              <p>{problem.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Pillars({ tone = false, index = '02' }: { tone?: boolean; index?: string }) {
  return (
    <div className={tone ? 'sec tone' : 'sec'}>
      <div className="wrap">
        <Reveal className="head">
          <Eyebrow index={index}>What We Do</Eyebrow>
          <SplitHeading top="Three ways we're creating" accent="change" />
        </Reveal>

        <Reveal className="pillars">
          {pillars.map((pillar, i) => (
            <article className="pillar" key={pillar.title}>
              <div>
                <span className="pillar-icon">
                  <Icon name={pillar.icon} size="lg" />
                </span>
                <h3 className="h-md">{pillar.title}</h3>
                <p className="pillar-kicker">{pillar.kicker}</p>
                <p className="body">{pillar.body}</p>
                <ArrowLink href={pillar.href} label={pillar.linkLabel} external={pillar.external} />
              </div>
              <p className="pillar-index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </div>
  );
}

export function Metrics() {
  return (
    <Reveal className="metrics">
      {metrics.map((metric) => (
        <div className="metric" key={metric.label}>
          <b>{metric.value}</b>
          <span>{metric.label}</span>
        </div>
      ))}
    </Reveal>
  );
}

export function ImpactSection({
  tone = false,
  index = '03',
  showFootnote = false,
  center = true,
}: {
  tone?: boolean;
  index?: string;
  showFootnote?: boolean;
  center?: boolean;
}) {
  return (
    <div className={tone ? 'sec tone' : 'sec'}>
      <div className="wrap">
        <Reveal className={center ? 'head center' : 'head'}>
          <Eyebrow index={index} center={center}>
            {impactIntro.eyebrow}
          </Eyebrow>
          <SplitHeading top={impactIntro.titleTop} accent={impactIntro.titleAccent} />
          <p className="lead">{impactIntro.body}</p>
        </Reveal>

        <Metrics />

        {showFootnote ? (
          <Reveal>
            <p className="small" style={{ marginTop: 22 }}>
              {impactIntro.footnote}
            </p>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
