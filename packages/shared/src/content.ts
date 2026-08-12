/**
 * All site copy, typed and centralised.
 *
 * Both apps read from here, so a wording change lands on web and mobile
 * at once and the two can never drift out of sync.
 */

import type { IconName } from './icons';

export const site = {
  name: 'Vision for Change',
  tagline: 'Better Vision. Better Access.',
  description:
    'Vision for Change is a youth-led eye-care initiative working to make essential eye care more accessible to people facing financial barriers.',
  shortDescription: 'Making eye care more accessible.',
  url: 'https://visionforchange.xyz',
  email: 'visionforchange18@gmail.com',
  phone: '+1 613 282 8851',
  phoneHref: '+16132828851',
  instagram: 'https://www.instagram.com/visionforchange2026/',
  instagramHandle: '@visionforchange2026',
  sponsorForm:
    'https://docs.google.com/forms/d/e/1FAIpQLSeTK_PN2sIn9YGsXqR97BFPVaWW6oPix-yyXlw8b3ifZ2gABw/viewform',
  locality: 'Ottawa',
  region: 'ON',
  country: 'CA',
  founded: '2026',
} as const;

export function mailto(subject: string): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/mission', label: 'Our Mission' },
  { href: '/app', label: 'Our App' },
  { href: '/assistance', label: 'Get Assistance' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/about', label: 'About Us' },
] as const;

export const primaryCta = { href: '/assistance', label: 'Get Eye-Care Assistance' } as const;

/* ── Home ─────────────────────────────────────────── */

export const hero = {
  badge: 'Youth Led',
  badgeNote: 'Eye-care access initiative',
  titleTop: 'Better Vision.',
  titleAccent: 'Better Access.',
  body: site.description,
  note: "We're building a community where access to eye care isn't determined by your ability to pay.",
} as const;

export type Problem = { icon: IconName; title: string; body: string };

export const problemIntro = {
  eyebrow: 'The Problem',
  titleTop: "Eye care shouldn't be",
  titleAccent: 'out of reach.',
  body: 'Millions of people face barriers to accessing regular eye care, whether because of cost, lack of coverage, limited awareness, or difficulty finding appropriate services.',
} as const;

export const problems: Problem[] = [
  {
    icon: 'cost',
    title: 'Cost',
    body: 'Eye examinations, glasses, and other vision services can be difficult to afford.',
  },
  {
    icon: 'device',
    title: 'Prevention',
    body: "People often don't know how their everyday screen habits can affect their visual comfort and eye-health habits.",
  },
  {
    icon: 'search',
    title: 'Access',
    body: "Finding appropriate eye-care resources can be difficult for people who don't know where to start.",
  },
];

export type Pillar = {
  icon: IconName;
  title: string;
  kicker: string;
  body: string;
  linkLabel: string;
  href: string;
  external?: boolean;
};

export const pillars: Pillar[] = [
  {
    icon: 'device',
    title: 'Prevention',
    kicker: 'Technology that encourages healthier eye-care habits.',
    body: 'Our mobile app helps users understand their screen habits, receive reminders, access educational resources, and find professional eye-care services.',
    linkLabel: 'Learn About the App',
    href: '/app',
  },
  {
    icon: 'handshake',
    title: 'Access',
    kicker: 'Connecting people with eye-care resources.',
    body: "We're developing partnerships with optometrists and community organizations to help people experiencing financial barriers access appropriate care.",
    linkLabel: 'Request Assistance',
    href: '/assistance',
  },
  {
    icon: 'book',
    title: 'Education',
    kicker: 'Making eye health easier to understand.',
    body: "Through social media, community outreach, and educational resources, we're working to make eye-care information accessible to everyone.",
    linkLabel: 'Follow Our Work',
    href: site.instagram,
    external: true,
  },
];

/** Placeholder metrics. Replace `value` once figures are verified. */
export const metrics = [
  { value: '0', label: 'App users' },
  { value: '0', label: 'Community partners' },
  { value: '0', label: 'Optometry partners' },
  { value: '0', label: 'People connected to care' },
] as const;

export const impactIntro = {
  eyebrow: 'Our Impact',
  titleTop: "We're just",
  titleAccent: 'getting started.',
  body: 'Vision for Change is currently building its first community partnerships and preparing our mobile app for early users.',
  footnote: 'These figures will be updated as soon as we have verified data to report.',
} as const;

/* ── Mission ──────────────────────────────────────── */

export const mission = {
  eyebrow: 'Our Mission',
  titleTop: "Access to eye care shouldn't depend on",
  titleAccent: 'your ability to pay.',
  body: 'Vision for Change is built around one belief: essential eye care is a basic need, not a luxury. We work on prevention, access, and education at the same time, because barriers rarely arrive one at a time.',
  aside:
    'We are a youth-led, volunteer-run initiative. We are not a clinic and we are not a medical provider. What we do is connect people to care, build tools that make prevention easier, and make eye-health information clearer.',
} as const;

/* ── App ──────────────────────────────────────────── */

export const appPage = {
  eyebrow: 'Our App',
  titleTop: 'Your eyes. Your habits.',
  titleAccent: 'Your care.',
  body: 'A simple mobile app that helps you understand your screen habits, build healthier routines, and find eye-care resources when you need them.',
  aside:
    "In development. We're preparing a first release for early testers, and we'd like you to be one of them.",
  whyTitleTop: 'Small habits,',
  whyTitleAccent: 'built into your day.',
  whyBody:
    'Most of us spend hours in front of screens without ever thinking about what it does to our eyes. The app makes that visible, then gives you simple, evidence-based steps you can actually keep up with.',
  betaCta: 'Join the App Beta',
  disclaimer:
    'Our screening tools are not intended to diagnose eye conditions or replace an examination by a qualified eye-care professional.',
} as const;

export const appFeatures: Problem[] = [
  { icon: 'chart', title: 'Track', body: 'Understand your screen-time habits.' },
  {
    icon: 'bell',
    title: 'Remind',
    body: 'Get reminders to take breaks and practice healthier screen habits.',
  },
  { icon: 'book', title: 'Learn', body: 'Access simple, evidence-based eye-care information.' },
  { icon: 'pin', title: 'Connect', body: 'Find optometrists and eye-care resources.' },
  {
    icon: 'scan',
    title: 'Screen',
    body: 'Explore our developing screening tools designed to help users identify when professional evaluation may be appropriate.',
  },
];

/* ── Assistance ───────────────────────────────────── */

export const assistance = {
  eyebrow: 'Get Eye-Care Assistance',
  titleTop: 'Need help accessing',
  titleAccent: 'eye care?',
  body: 'If cost or another barrier is preventing you from accessing eye care, Vision for Change may be able to connect you with available resources and participating providers.',
  aside:
    'Requesting assistance is free. We never ask for payment information, and we only share your details with a provider if you want us to.',
  cta: 'Request Assistance',
  disclaimer:
    "We're an early-stage initiative still building our provider network, so we can't guarantee an outcome for every request. We'll do our best to connect you with available assistance.",
} as const;

export const assistanceSteps = [
  {
    title: 'Tell us about your situation',
    body: 'Complete our short assistance form.',
  },
  {
    title: 'We review your request',
    body: "We'll determine what resources or partnerships may be appropriate.",
  },
  {
    title: 'We connect you',
    body: "If we can assist, we'll work to connect you with an appropriate resource or participating provider.",
  },
] as const;

export const assistanceFaq = [
  {
    q: 'Who can apply?',
    a: "Anyone facing a financial or practical barrier to accessing eye care. You don't need to prove anything up front. Just tell us honestly about your situation.",
  },
  {
    q: 'What does it cost?',
    a: 'Nothing. Requesting assistance is free, and we never ask for payment information.',
  },
  {
    q: 'How long does it take?',
    a: "We review requests as they come in. Because we're volunteer-run, response times can vary, and we'll keep you updated.",
  },
  {
    q: 'Is my information private?',
    a: 'We only share what is necessary to connect you with a resource or participating provider, and only with your knowledge.',
  },
] as const;

/* ── Get Involved ─────────────────────────────────── */

export type Involve = {
  icon: IconName;
  title: string;
  body: string;
  linkLabel: string;
  href: string;
  external?: boolean;
};

export const involvePage = {
  eyebrow: 'Get Involved',
  titleTop: 'Four ways to help us',
  titleAccent: 'widen access.',
  body: "Whether you provide care, run an organization, can offer support, or simply want to give your time, there's a place for you here.",
  aside:
    "Every partnership we add directly increases the number of people we can help. We're a small team, so a single introduction goes a long way.",
} as const;

export const involveOptions: Involve[] = [
  {
    icon: 'glasses',
    title: 'Optometrists',
    body: 'Interested in helping make eye care more accessible? Partner with us to offer reduced-cost or sponsored services to people we connect you with.',
    linkLabel: 'Become an Optometry Partner',
    href: mailto('Optometry Partnership'),
  },
  {
    icon: 'building',
    title: 'Organizations',
    body: "Are you a school, nonprofit, community organization, or youth organization interested in working with us? Let's find a way to reach the people you serve.",
    linkLabel: 'Become a Community Partner',
    href: mailto('Community Partnership'),
  },
  {
    icon: 'heart',
    title: 'Sponsors',
    body: "Help us expand access to eye-care services and technology. Sponsorship directly funds the care we're able to facilitate and the tools we build.",
    linkLabel: 'Support Vision for Change',
    href: site.sponsorForm,
    external: true,
  },
  {
    icon: 'users',
    title: 'Volunteers',
    body: 'Help us educate, build, organize, and grow our initiative. We need people for outreach, design, development, research, and community events.',
    linkLabel: 'Volunteer',
    href: mailto('Volunteering'),
  },
];

/* ── About ────────────────────────────────────────── */

export const about = {
  eyebrow: 'About Us',
  titleTop: 'Built by young people who believe',
  titleAccent: 'vision matters.',
  body: 'Vision for Change began with a simple idea: access to quality eye care should not depend solely on someone’s financial circumstances.',
  aside:
    'Founded in 2026 in Ottawa, Canada. Youth-led, volunteer-run, and working on prevention, access, and education at the same time.',
  storyTitleTop: 'A pair of glasses',
  storyTitleAccent: 'changes everything.',
  story: [
    "For a lot of people, an eye exam and a pair of glasses is the difference between struggling through a classroom or a workday and simply being able to see. It's one of the most solvable problems in health care, and it still isn't solved, mostly because of cost and access.",
    "We started Vision for Change because that gap felt both unfair and fixable. We're young, we're volunteer-run, and we don't have the resources of a large charity. What we do have is the ability to build tools, talk to people, and connect the ones who need care with the ones who can provide it.",
  ],
  quote:
    'Access to quality eye care should not depend solely on someone’s financial circumstances.',
  storyClose:
    "That's the whole thesis. Everything we build, the app, the partnerships, the education work, comes back to it.",
} as const;

export const roadmap = [
  {
    title: 'Launch the initiative',
    body: 'Establish Vision for Change and build our public presence.',
    done: true,
  },
  {
    title: 'Ship the app beta',
    body: 'Get our screen-habit and education tools into the hands of first users.',
    done: false,
  },
  {
    title: 'Build the provider network',
    body: 'Bring on optometry and community partners so we can act on assistance requests.',
    done: false,
  },
  {
    title: 'Publish our first impact report',
    body: "Share real, verified numbers on who we've helped and how.",
    done: false,
  },
] as const;

/** Placeholder team. Replace with real names, roles, and photos. */
export const team = [
  {
    initials: 'VC',
    name: 'Founder',
    role: 'Direction and Partnerships',
    body: "Leads the initiative's strategy and builds relationships with optometrists and community organizations.",
  },
  {
    initials: 'VC',
    name: 'App Lead',
    role: 'Product and Development',
    body: 'Designs and builds the Vision for Change mobile app and its screen-habit tools.',
  },
  {
    initials: 'VC',
    name: 'Outreach Lead',
    role: 'Education and Community',
    body: 'Runs our social media, educational content, and community workshops.',
  },
  {
    initials: 'VC',
    name: 'Volunteers',
    role: 'Everything Else',
    body: 'The people who help us research, organize, design, and show up. Want to join them?',
  },
] as const;

/* ── Updates ──────────────────────────────────────── */

export type UpdateStatus = 'active' | 'planned' | 'upcoming';

export const updatesPage = {
  eyebrow: 'Our Work',
  titleTop: 'Latest',
  titleAccent: 'updates',
  body: "What we're building, who we're working with, and where we're headed next.",
  aside:
    'We publish progress as it happens, including the parts that are still in progress. Follow along on Instagram for the day-to-day.',
} as const;

export const updates: {
  icon: IconName;
  title: string;
  body: string;
  status: UpdateStatus;
  statusLabel: string;
}[] = [
  {
    icon: 'flag',
    title: 'Our first community partnership',
    body: "We're in conversation with local schools and community organizations to reach people who need eye care but don't know where to start.",
    status: 'active',
    statusLabel: 'In progress',
  },
  {
    icon: 'device',
    title: 'Vision for Change app beta',
    body: 'Our screen-habit tracking, reminders, and education tools are being prepared for a first group of testers.',
    status: 'active',
    statusLabel: 'In progress',
  },
  {
    icon: 'glasses',
    title: 'First optometry partner',
    body: "We're building our network of participating providers so we can act on assistance requests.",
    status: 'active',
    statusLabel: 'In progress',
  },
  {
    icon: 'book',
    title: 'Eye-health workshops',
    body: 'Short, practical sessions on screen habits and when to see a professional, designed for schools and youth groups.',
    status: 'planned',
    statusLabel: 'Planned',
  },
  {
    icon: 'chart',
    title: 'Our first impact report',
    body: "Once we have real data, we'll publish it: partners, people connected to care, and the value of care facilitated.",
    status: 'upcoming',
    statusLabel: 'Upcoming',
  },
];

/* ── Legal ────────────────────────────────────────── */

export const legal = [
  {
    title: 'Privacy',
    body: 'We collect only what you send us directly: your name, contact details, and what you tell us about your situation. We use it to respond to you and, with your knowledge, to connect you with a resource or participating provider. We do not sell your information.',
  },
  {
    title: 'Terms',
    body: 'Vision for Change provides information and referrals. We are not a medical provider, and nothing on this site or in our app is medical advice, a diagnosis, or a substitute for an examination by a qualified eye-care professional.',
  },
  {
    title: 'Accessibility',
    body: 'We aim to keep this site usable with a keyboard and a screen reader, with readable contrast and no motion that cannot be turned off. If something is not working for you, email us and we will fix it.',
  },
] as const;
