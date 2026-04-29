 "use client";

import ServicePageTemplate, { type ServicePageTemplateProps } from '@/components/ServicePageTemplate';
import { Code2, Globe, Rocket, Server, Terminal } from 'lucide-react';

const customDevelopmentPage: ServicePageTemplateProps = {
  badge: 'Full-Stack Engineering',
  badgeIcon: Terminal,
  title: 'Custom',
  highlight: 'Development',
  description:
    'We build scalable software products, internal tools, and digital platforms that are fast, dependable, and ready to grow with your business.',
  heroHighlights: ['Web platforms', 'APIs and backend', 'Internal systems', 'Modern product builds'],
  overview: {
    title: 'Software designed to support long-term growth',
    description:
      'From customer-facing products to operations tools, we build systems that solve today’s need without creating tomorrow’s technical bottleneck.',
    points: [
      'Product scoping and technical planning',
      'Custom dashboards and internal portals',
      'Frontend and backend development',
      'Integration with payments, CRM, and third-party tools',
    ],
    icon: Globe,
  },
  spotlight: {
    title: 'Architecture built for speed and resilience',
    description:
      'We focus on maintainable foundations, strong performance, and clean release processes so your product is easier to improve over time.',
    points: [
      'Scalable codebase structure',
      'Secure and reliable API design',
      'Better deployment and release confidence',
      'Cleaner handoff for internal teams',
    ],
    icon: Rocket,
  },
  capabilities: [
    {
      title: 'Web Applications',
      description:
        'Custom platforms, portals, and interfaces designed around your workflow and business model.',
      icon: Globe,
    },
    {
      title: 'Backend and APIs',
      description:
        'Robust service architecture for data handling, integrations, permissions, and performance.',
      icon: Server,
    },
    {
      title: 'Product Engineering',
      description:
        'Feature planning and implementation with an emphasis on usability, velocity, and quality.',
      icon: Code2,
    },
  ],
  process: [
    {
      step: '01',
      title: 'Scope the Build',
      description:
        'We align on requirements, user flows, priorities, and technical constraints before development starts.',
    },
    {
      step: '02',
      title: 'Design the System',
      description:
        'Architecture, component strategy, data flow, and integration planning are shaped around future maintainability.',
    },
    {
      step: '03',
      title: 'Develop and Validate',
      description:
        'We build in iterations, test key flows, and keep progress visible so decisions happen early instead of late.',
    },
    {
      step: '04',
      title: 'Launch and Support',
      description:
        'Deployment, QA, refinements, and next-step recommendations help the product stay stable after release.',
    },
  ],
  deliverables: [
    'Technical roadmap and scoped feature plan',
    'Production-ready frontend and backend implementation',
    'Core integrations and API connections',
    'Admin or internal control interfaces where needed',
    'Testing and launch-readiness support',
    'Clean structure for future expansion',
  ],
  outcomes: [
    'A product foundation that is easier to extend and maintain',
    'Faster operational execution through better custom tooling',
    'Improved performance, stability, and release confidence',
    'A build that fits your workflow instead of forcing workarounds',
  ],
  cta: {
    title: 'Need software that fits your business instead of bending it?',
    description:
      'We can help turn the idea into a clear build plan, a solid architecture, and a product your team can keep growing.',
    primaryHref: '/#process',
    primaryLabel: 'See Our Process',
    secondaryHref: '/#services',
    secondaryLabel: 'Explore All Services',
  },
};

export default function CustomDevelopmentPage() {
  return <ServicePageTemplate {...customDevelopmentPage} />;
}
