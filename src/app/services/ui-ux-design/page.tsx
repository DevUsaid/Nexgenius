 "use client";

import ServicePageTemplate, { type ServicePageTemplateProps } from '@/components/ServicePageTemplate';
import { LayoutGrid, MonitorSmartphone, Palette, PenTool, Users } from 'lucide-react';

const uiUxDesignPage: ServicePageTemplateProps = {
  badge: 'Human-Centered Design',
  badgeIcon: Palette,
  title: 'UI/UX',
  highlight: 'Design',
  description:
    'We design premium digital experiences that look sharp, feel effortless, and guide users toward action with less friction.',
  heroHighlights: ['UX research', 'Design systems', 'Responsive interfaces', 'Conversion-focused flows'],
  overview: {
    title: 'Design that earns attention and keeps it',
    description:
      'Every screen is shaped around clarity, trust, and measurable business outcomes so users can move through the experience with confidence.',
    points: [
      'Wireframes and user flows',
      'High-fidelity interface design',
      'Component systems and style libraries',
      'Landing pages and product experiences',
    ],
    icon: PenTool,
  },
  spotlight: {
    title: 'From idea to usable product',
    description:
      'We map friction, simplify decisions, and turn complex user journeys into polished digital experiences that feel intentional from end to end.',
    points: [
      'Clearer user journeys',
      'Stronger visual hierarchy',
      'Faster decision-making for users',
      'Better engagement and conversion flow',
    ],
    icon: MonitorSmartphone,
  },
  capabilities: [
    {
      title: 'UX Research',
      description:
        'User insights, journey mapping, and experience audits that uncover what is blocking clarity or conversion.',
      icon: Users,
    },
    {
      title: 'UI Systems',
      description:
        'Scalable design systems and polished interface patterns that support consistency and speed.',
      icon: LayoutGrid,
    },
    {
      title: 'Responsive Experiences',
      description:
        'Web and mobile experiences that stay intuitive across screen sizes and real usage contexts.',
      icon: MonitorSmartphone,
    },
  ],
  process: [
    {
      step: '01',
      title: 'Understand the User and Goal',
      description:
        'We clarify the audience, the friction points, and the business action the experience needs to support.',
    },
    {
      step: '02',
      title: 'Structure the Experience',
      description:
        'Wireframes, hierarchy, flows, and page logic are shaped before visual design begins.',
    },
    {
      step: '03',
      title: 'Design the Interface',
      description:
        'We build the visual layer with stronger clarity, interaction cues, and brand consistency.',
    },
    {
      step: '04',
      title: 'Refine Through Feedback',
      description:
        'We iterate based on stakeholder input and usability observations so the final product feels intentional.',
    },
  ],
  deliverables: [
    'User flows and experience structure',
    'Wireframes for core screens or journeys',
    'High-fidelity visual interface design',
    'Responsive layouts for key breakpoints',
    'Design system or reusable UI guidelines',
    'Recommendations for usability improvements',
  ],
  outcomes: [
    'Cleaner user journeys with less confusion and drop-off',
    'A more premium visual impression across the product',
    'Better consistency between screens, states, and devices',
    'Design decisions that support stronger conversion behavior',
  ],
  cta: {
    title: 'Need an interface that feels premium and performs better?',
    description:
      'We can help turn your concept, product, or existing workflow into a sharper experience your users can trust quickly.',
    primaryHref: '/#process',
    primaryLabel: 'See Our Process',
    secondaryHref: '/#services',
    secondaryLabel: 'Explore All Services',
  },
};

export default function UIUXDesignPage() {
  return <ServicePageTemplate {...uiUxDesignPage} />;
}
