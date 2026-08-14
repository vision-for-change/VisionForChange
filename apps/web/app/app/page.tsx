import type { Metadata } from 'next';
import { appFeatures, appPage, mailto } from '@vfc/shared';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { Reveal } from '@/components/Reveal';
import { ActionLink, CtaBand, Eyebrow, Notice, PageHead, SplitHeading } from '@/components/ui';
import { BASE_URL, breadcrumbJsonLd, pageMetadata, webPageJsonLd } from '@/components/seo';

const TITLE = 'Our App: Screen Habit Tracking and Eye-Care Reminders';
const DESCRIPTION =
  'Track your screen habits, get break reminders, learn evidence-based eye care, and find optometrists. The Vision for Change mobile app, free on iOS and Android.';

export const metadata: Metadata = pageMetadata({
  title: 'Our App',
  absoluteTitle: TITLE,
  description: DESCRIPTION,
  path: '/app',
});

const appJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Vision for Change',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'iOS, Android',
  description: appPage.body,
  url: `${BASE_URL}/app`,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CAD' },
  publisher: { '@id': `${BASE_URL}/#organization` },
  featureList: appFeatures.map((feature) => `${feature.title}: ${feature.body}`),
};

/** Static UI mockups. Purely decorative, so they stay out of the a11y tree. */
function DeviceMockups() {
  return (
    <Reveal className="devices">
      <div className="device" aria-hidden="true">
        <div className="screen">
          <span className="screen-bar" />
          <div className="screen-top">
            <small>Today&apos;s screen time</small>
            <b>6h 42m</b>
            <i>2h 10m above your goal</i>
          </div>
          <div className="screen-body">
            <div className="srow">
              <span className="srow-ico">
                <Icon name="clock" />
              </span>
              <span className="srow-txt">
                <b>Break reminder</b>
                <span>Next in 12 minutes</span>
                <span className="sbar">
                  <i style={{ width: '62%' }} />
                </span>
              </span>
            </div>
            <div className="srow">
              <span className="srow-ico">
                <Icon name="eye" />
              </span>
              <span className="srow-txt">
                <b>20-20-20 streak</b>
                <span>4 days in a row</span>
              </span>
            </div>
            <div className="srow">
              <span className="srow-ico">
                <Icon name="book" />
              </span>
              <span className="srow-txt">
                <b>Learn</b>
                <span>Why screens cause dry eyes</span>
              </span>
            </div>
            <div className="srow">
              <span className="srow-ico">
                <Icon name="pin" />
              </span>
              <span className="srow-txt">
                <b>Find care</b>
                <span>3 clinics near you</span>
              </span>
            </div>
          </div>
          <div className="screen-nav">
            <Icon name="home" className="on" />
            <Icon name="chart" />
            <Icon name="book" />
            <Icon name="user" />
          </div>
        </div>
      </div>

      <div className="device aux" aria-hidden="true">
        <div className="screen">
          <span className="screen-bar" />
          <div className="screen-top dark">
            <small>Habit check-in</small>
            <b>4 of 5</b>
            <i>Weekly goals met</i>
          </div>
          <div className="screen-body">
            {[
              { icon: 'bulb', title: 'Lighting', note: 'Reduce glare at night' },
              { icon: 'drop', title: 'Blink breaks', note: 'Every 30 minutes' },
              { icon: 'moon', title: 'Night mode', note: 'On after 9 PM' },
              { icon: 'scan', title: 'Screening tools', note: 'In development' },
            ].map((row) => (
              <div className="srow" key={row.title}>
                <span className="srow-ico">
                  <Icon name={row.icon as 'bulb'} />
                </span>
                <span className="srow-txt">
                  <b>{row.title}</b>
                  <span>{row.note}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="screen-nav">
            <Icon name="home" />
            <Icon name="chart" className="on" />
            <Icon name="book" />
            <Icon name="user" />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function AppPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: TITLE,
          description: DESCRIPTION,
          path: '/app',
        })}
      />
      <JsonLd data={appJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Our App', path: '/app' },
        ])}
      />
      <PageHead
        eyebrow={appPage.eyebrow}
        top={appPage.titleTop}
        accent={appPage.titleAccent}
        body={appPage.body}
        aside={appPage.aside}
      />

      <div className="sec">
        <div className="wrap app-showcase">
          <DeviceMockups />
          <Reveal>
            <Eyebrow index="01">Why we built it</Eyebrow>
            <SplitHeading top={appPage.whyTitleTop} accent={appPage.whyTitleAccent} />
            <p className="lead" style={{ marginTop: 18 }}>
              {appPage.whyBody}
            </p>
            <div className="btns" style={{ marginTop: 32 }}>
              <ActionLink href={mailto('App Beta Signup')} label={appPage.betaCta} />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="sec tone">
        <div className="wrap">
          <Reveal className="head">
            <Eyebrow index="02">Features</Eyebrow>
            <SplitHeading top="Five things the app" accent="helps you do" />
          </Reveal>

          <Reveal className="features">
            {appFeatures.map((feature) => (
              <article className="feature" key={feature.title}>
                <span className="feature-ico">
                  <Icon name={feature.icon} />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </Reveal>

          <Reveal>
            <div style={{ marginTop: 32 }}>
              <Notice icon="alert">
                Our screening tools are{' '}
                <strong>not intended to diagnose eye conditions</strong> or replace an examination
                by a qualified eye-care professional.
              </Notice>
            </div>
          </Reveal>
        </div>
      </div>

      <CtaBand
        top="Be one of our"
        accent="first users."
        body="We're preparing the app for early testers. Join the beta list and we'll reach out when it's ready."
        actions={
          <ActionLink href={mailto('App Beta Signup')} label={appPage.betaCta} variant="inverse" />
        }
      />
    </>
  );
}
