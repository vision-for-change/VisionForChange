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
  /**
   * One-sentence definition, written so it can stand alone as an answer to
   * "what is Vision for Change". Used in the organization schema and on the
   * home page, so search engines and readers get the same statement.
   */
  definition:
    'Vision for Change is a youth-led, volunteer-run eye-care initiative based in Ottawa, Ontario, Canada. We work to make eye care more accessible through prevention tools, connections to optometrists and community partners, and free eye-health education.',
  /**
   * The same claim as `definition`, cut to fit a search result snippet.
   * `definition` is too long for a meta description and would be truncated.
   */
  metaDescription:
    'Vision for Change is a youth-led eye-care initiative in Ottawa, Ontario, making eye care more accessible through prevention, referrals, and free education.',
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
  { href: '/eye-care-guide', label: 'Eye Care Guide' },
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

/**
 * Plain-language definition block for the home page. It exists so the page
 * answers "what is Vision for Change" directly, in a heading and a
 * paragraph, rather than leaving the answer implied by the tagline.
 */
export const whatIs = {
  eyebrow: 'Who We Are',
  heading: 'What is Vision for Change?',
  body: site.definition,
  points: [
    {
      label: 'Youth-led and volunteer-run',
      body: 'Founded in 2026 by students in Ottawa, Ontario. Nobody here draws a salary.',
    },
    {
      label: 'Free to ask for help',
      body: 'Requesting eye-care assistance costs nothing, and we never ask for payment information.',
    },
    {
      label: 'Not a clinic',
      body: 'We connect people to qualified eye-care professionals. We do not diagnose or treat.',
    },
  ],
} as const;

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

/* ── Eye Care Guide ───────────────────────────────── */

/**
 * Long-form answers to the questions people actually search before they
 * look for help. Each entry is rendered as a section on `/eye-care-guide`
 * and, in shortened form, as a `FAQPage` entry, so the heading text and
 * the structured-data question stay identical.
 *
 * Nothing here is medical advice. Anything specific to a person's eyes is
 * deliberately deferred to a qualified professional, and every coverage
 * claim is framed as "check the current rules" because those change.
 */
export type GuideLink = { label: string; href: string };
export type GuideSection = {
  id: string;
  question: string;
  /** One-paragraph answer, also used verbatim as the FAQ schema answer. */
  summary: string;
  body: string[];
  points?: readonly string[];
  links?: readonly GuideLink[];
};

export const guidePage = {
  eyebrow: 'Eye Care Guide',
  titleTop: 'Straight answers about',
  titleAccent: 'eye care and eye health.',
  body: 'Practical, plain-language answers to the questions we get asked most: how to find affordable eye care, why regular eye exams matter, how to protect your eyesight, and how to get connected with an optometrist in Ottawa and across Ontario.',
  aside:
    'Written by the Vision for Change team and kept general on purpose. We are not a medical provider, and none of this replaces an eye exam by a qualified professional.',
  disclaimer:
    'This guide is general eye-health education, not medical advice, a diagnosis, or a treatment plan. Coverage rules and program details change, so confirm anything specific with a licensed optometrist, your provider, or the official source before relying on it.',
  closingTop: 'Still stuck on',
  closingAccent: 'cost or access?',
  closingBody:
    "If money or another barrier is standing between you and an eye exam, tell us about your situation. Requesting eye-care assistance from Vision for Change is free, and we'll do our best to connect you with available support.",
} as const;

export const guideSections: GuideSection[] = [
  {
    id: 'affordable-eye-care',
    question: 'How can I get affordable eye care?',
    summary:
      'Start by checking whether your eye exam is already covered. In Ontario, OHIP generally covers routine eye exams for people under 20 and 65 and over, and for people of any age with certain qualifying medical conditions. If you fall outside that, look at school and workplace benefits, community health centres, and initiatives like Vision for Change that connect people to reduced-cost or sponsored care.',
    body: [
      'Affordable eye care usually comes down to finding the right door rather than finding a discount. Most people who assume an exam will cost them money have not checked whether it is already covered, and coverage in Ontario is broader than a lot of people expect.',
      'In Ontario, OHIP has generally covered a routine eye exam once a year for people aged 19 and under and for people aged 65 and over. People between those ages can also be covered when they have a qualifying medical condition, such as diabetes, glaucoma, or cataracts, and people receiving social assistance may be eligible as well. These rules and the list of qualifying conditions change from time to time, so confirm the current details on the Government of Ontario website or with an optometry office before you book.',
      'Glasses are a separate question from the exam, and they are where cost most often becomes the real barrier. Ontario runs a program that provides a free pair of glasses to junior and senior kindergarten students who need them after an eye exam. School and workplace benefit plans frequently include a vision allowance people forget to use. Local service clubs and community health centres sometimes help with frames and lenses, and some optometry practices quietly keep a low-cost frame range for patients who ask.',
      'If none of those apply to you, that is exactly the gap Vision for Change works in. We are building a network of participating optometrists and community partners so that people facing a financial barrier have somewhere to be referred to.',
    ],
    points: [
      'Check OHIP eligibility first. A covered exam costs you nothing.',
      'Ask your school, college, or employer whether a vision allowance is included in your benefits.',
      'Ask the optometry office directly about lower-cost frame options. Many have them and do not advertise them.',
      'Ask about the cost of the exam when you book, so nothing is a surprise at the desk.',
    ],
    links: [
      { label: 'OHIP eye care coverage (Ontario.ca)', href: 'https://www.ontario.ca/page/eye-care' },
      { label: 'Request assistance from Vision for Change', href: '/assistance' },
    ],
  },
  {
    id: 'why-regular-eye-care-matters',
    question: 'Why is regular eye care important?',
    summary:
      'Many serious eye conditions cause no pain and no early symptoms, and the vision they take does not come back. A routine eye exam can catch glaucoma, diabetic retinopathy, and macular degeneration before you would ever notice them yourself, and it can surface signs of conditions like diabetes and high blood pressure that have nothing to do with your eyes.',
    body: [
      'The most persuasive argument for regular eye exams is also the least intuitive one: the conditions most worth catching are the ones you cannot feel. Glaucoma damages peripheral vision so gradually that people routinely lose a significant amount before noticing. Diabetic retinopathy and age-related macular degeneration follow a similar pattern. In each case, vision lost to the condition is generally not recoverable, while vision preserved by catching it early is.',
      'An eye exam is also one of the few routine appointments where a clinician can look directly at blood vessels and nerve tissue without any imaging. That is why optometrists sometimes spot early signs of diabetes, high blood pressure, or other systemic conditions in people who came in for a glasses prescription.',
      'For children, the case is different but just as strong. A child with uncorrected vision has no way of knowing their sight is unusual, because it is the only sight they have ever had. That often gets read as a reading difficulty, an attention problem, or disinterest in school, when the actual issue is that they cannot see the board. This is a large part of why Vision for Change cares about access as much as awareness: an exam that never happens cannot catch anything.',
      'How often you should go depends on your age, your health, and your family history, which is a question for an optometrist rather than a website. Many adults are advised to go every one to two years, and more often when there is a risk factor involved.',
    ],
    points: [
      'Glaucoma, diabetic retinopathy, and macular degeneration are often symptom-free early on.',
      'Eye exams can surface early signs of diabetes and high blood pressure.',
      'Children rarely report vision problems, because they have nothing to compare their sight to.',
      'Book sooner than scheduled if vision changes suddenly, or if you have eye pain, flashes, or a sudden increase in floaters.',
    ],
    links: [{ label: 'How our app helps you keep up with eye health', href: '/app' }],
  },
  {
    id: 'protect-your-eyesight',
    question: 'How can I protect my eyesight?',
    summary:
      'Most of what protects your eyes long-term is unglamorous: wear sunglasses that block UV, do not smoke, manage blood sugar and blood pressure, wear protective eyewear for sport and DIY, follow the care rules for contact lenses, take breaks from screens, and get your eyes examined on schedule.',
    body: [
      'There is no supplement or exercise that reliably improves eyesight, and claims otherwise are usually selling something. What genuinely helps is protecting your eyes from the things known to damage them and catching problems early enough to act on.',
      'Ultraviolet light is the most underrated risk. Cumulative UV exposure is associated with cataracts and other eye damage, so sunglasses rated to block UVA and UVB are protective equipment, not an accessory, and they matter on bright winter days as much as in summer. Smoking is the other big one: it substantially raises the risk of macular degeneration and cataracts, and stopping lowers that risk.',
      'General health does more work here than most people realise. Uncontrolled diabetes and high blood pressure both damage the small blood vessels in the retina, so managing them is eye care even when it does not feel like it. A diet with plenty of vegetables and regular physical activity supports the same outcome.',
      'Then there are the avoidable accidents. A large share of serious eye injuries happen during sport, home repair, and yard work, and most would have been prevented by proper protective eyewear. If you wear contact lenses, following the replacement schedule and never sleeping in lenses that are not designed for it prevents infections that can permanently affect sight.',
    ],
    points: [
      'Wear sunglasses that block 100% of UVA and UVB, year round.',
      'If you smoke, stopping measurably lowers your risk of macular degeneration and cataracts.',
      'Keep blood sugar and blood pressure in a healthy range. Your retina depends on it.',
      'Wear protective eyewear for sport, power tools, and yard work.',
      'Follow contact lens hygiene and replacement schedules, and never sleep in lenses not approved for it.',
      'Take regular breaks from screens, and give children time outdoors every day.',
    ],
  },
  {
    id: 'screen-time-and-eyes',
    question: 'How much screen time is bad for your eyes?',
    summary:
      'There is no proven amount of screen time that permanently damages an adult eye. What screens reliably cause is digital eye strain, which is uncomfortable but temporary, and it tends to appear after roughly two hours of continuous close work. For children, the concern is different: time spent on near work instead of outdoors is associated with faster progression of short-sightedness.',
    body: [
      'This question gets answered badly in both directions. Screens are not burning out your retinas, and the "blue light is destroying your eyes" framing has not held up well in research. But the discomfort people describe after a long day of screens is real, has a name, and has a fix.',
      'Digital eye strain comes mostly from two things. You blink far less while concentrating on a screen, which dries the eye surface, and your focusing muscles stay locked at one close distance for hours. That produces tired eyes, blurring, dryness, headaches, and neck ache. It is temporary and it responds to breaks, blinking, and the setup of your workspace rather than to anything permanent being wrong.',
      'The commonly recommended habit is the 20-20-20 rule: every 20 minutes, look at something roughly 20 feet away for about 20 seconds. It works because it interrupts the sustained near focus, and it is easy enough that people actually do it. Positioning the screen slightly below eye level, cutting glare, and keeping the room lit rather than working in the dark all help too.',
      'For children the research points somewhere else. Rates of myopia, or short-sightedness, have risen sharply, and the strongest protective factor identified so far is time spent outdoors, with roughly two hours a day being the figure usually cited. That makes outdoor time more useful to focus on than a strict screen-hour limit.',
      'The Vision for Change app is built around this: rather than telling you to use your phone less, it makes your screen habits visible and prompts the small breaks that actually relieve strain.',
    ],
    points: [
      'Follow the 20-20-20 rule: every 20 minutes, look 20 feet away for 20 seconds.',
      'Blink deliberately during long sessions. You blink far less than usual while focused on a screen.',
      'Put the screen slightly below eye level, about an arm’s length away.',
      'Reduce glare and avoid working in a dark room with a bright screen.',
      'For children, prioritise around two hours of outdoor time a day.',
      'Persistent strain, headaches, or blurring is a reason to book an eye exam, not to buy filters.',
    ],
    links: [{ label: 'See how the Vision for Change app tracks screen habits', href: '/app' }],
  },
  {
    id: 'find-eye-care-support',
    question: 'Where can I find eye care support?',
    summary:
      'If cost is the barrier, Vision for Change can try to connect you with available resources and participating providers, free of charge. Community health centres, school vision programs, service clubs, and organizations like CNIB are also worth contacting, and in Ontario the provincial eye care page is the authoritative source on what is publicly covered.',
    body: [
      'Support falls into a few categories, and knowing which one you need saves a lot of time. If the problem is paying for an exam, start with coverage. If the problem is paying for glasses, start with benefit plans, school programs, and community organizations. If the problem is not knowing where to start at all, that is what we are here for.',
      'Vision for Change accepts assistance requests from anyone facing a financial or practical barrier to eye care. You do not need to prove anything up front, requesting help is free, we never ask for payment information, and we only share your details with a provider if you want us to. We are early-stage and still building our provider network, so we cannot promise an outcome for every request, but we will tell you honestly what we can and cannot do.',
      'Community health centres often serve people without benefits and can point to local programs that are not advertised widely. For people living with significant sight loss, CNIB provides support services across Canada. Schools and youth organizations in Ottawa are frequently the fastest route to help for children, which is why we work to partner with them directly.',
    ],
    links: [
      { label: 'Request eye-care assistance', href: '/assistance' },
      { label: 'Eye care in Ontario (Ontario.ca)', href: 'https://www.ontario.ca/page/eye-care' },
      { label: 'CNIB support services', href: 'https://www.cnib.ca/' },
    ],
  },
  {
    id: 'connect-with-an-optometrist',
    question: 'How can I get connected with an optometrist?',
    summary:
      'You do not need a referral to see an optometrist in Ontario. You can book directly, find a licensed practice through the Ontario Association of Optometrists, and verify any practitioner on the public register of the College of Optometrists of Ontario. If cost is what is stopping you, ask Vision for Change and we will try to connect you with a participating provider.',
    body: [
      'Optometrists are primary eye-care providers, so in Ontario you can book an appointment yourself without a doctor referring you first. That surprises people, and it removes a step that often stalls the whole process.',
      'When you call, it is worth asking three things: whether your exam is covered by OHIP given your age and health, what the exam costs if it is not, and whether they have lower-cost frame options. Asking about cost up front is normal and nobody will think it is strange.',
      'You can verify that a practitioner is licensed through the public register maintained by the College of Optometrists of Ontario, and find practices through the Ontario Association of Optometrists. Checking the register takes a minute and is worth doing.',
      'If the barrier is money rather than information, tell us. Vision for Change is building a network of participating optometrists specifically so that we can connect people who would otherwise go without an exam. Sending us a request costs nothing and puts you under no obligation.',
    ],
    points: [
      'No referral is needed to see an optometrist in Ontario. Book directly.',
      'Ask about OHIP coverage, exam cost, and frame options when you book.',
      'Verify any practitioner on the College of Optometrists of Ontario public register.',
      'If cost is the barrier, send Vision for Change an assistance request instead of skipping the exam.',
    ],
    links: [
      { label: 'Find an optometrist (Ontario Association of Optometrists)', href: 'https://optom.on.ca/' },
      { label: 'College of Optometrists of Ontario', href: 'https://www.collegeoptom.on.ca/' },
      { label: 'Ask us to connect you', href: '/assistance' },
    ],
  },
];

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
