 "use client";

import ServicePageTemplate, { type ServicePageTemplateProps } from '@/components/ServicePageTemplate';
import { BarChart, LineChart, Megaphone, Target, TrendingUp } from 'lucide-react';

const strategicMarketingPage: ServicePageTemplateProps = {
  badge: 'Data-Driven Growth',
  badgeIcon: Target,
  title: 'Strategic',
  highlight: 'Marketing',
  description:
    'We build focused digital marketing systems that improve visibility, attract stronger leads, and turn attention into consistent growth.',
  heroHighlights: ['SEO strategy', 'Paid campaigns', 'Social growth', 'Performance reporting'],
  overview: {
    title: 'Marketing that connects brand attention to business results',
    description:
      'We blend strategy, positioning, channel execution, and optimization so every activity supports a clearer growth objective.',
    points: [
      'Audience research and market positioning',
      'Channel planning and campaign architecture',
      'Creative and messaging direction',
      'Measurement, reporting, and optimization loops',
    ],
    icon: LineChart,
  },
  spotlight: {
    title: 'Performance visibility at every stage',
    description:
      'Instead of pushing disconnected tactics, we build a system that helps you understand what is working, what is wasting budget, and where to double down.',
    points: [
      'Stronger search and brand visibility',
      'Better lead quality and targeting',
      'Clearer content and ad direction',
      'Ongoing optimization based on actual results',
    ],
    icon: Target,
  },
  capabilities: [
    {
      title: 'SEO Optimization',
      description:
        'Improve rankings, discoverability, and qualified traffic with search strategy grounded in intent.',
      icon: TrendingUp,
    },
    {
      title: 'Social Strategy',
      description:
        'Build consistent messaging, stronger community engagement, and sharper platform direction.',
      icon: Megaphone,
    },
    {
      title: 'Performance Ads',
      description:
        'Run more focused paid campaigns with better targeting, stronger creative, and smarter budget allocation.',
      icon: BarChart,
    },
  ],
  process: [
    {
      step: '01',
      title: 'Research the Market',
      description:
        'We study audience behavior, category competition, and current performance to find the right angle for growth.',
    },
    {
      step: '02',
      title: 'Shape the Strategy',
      description:
        'Positioning, channel priorities, offers, and campaign structure are aligned with your goals and budget.',
    },
    {
      step: '03',
      title: 'Launch and Execute',
      description:
        'Campaigns, content direction, and creative priorities are rolled out with clarity and speed.',
    },
    {
      step: '04',
      title: 'Optimize and Scale',
      description:
        'We refine what is underperforming, expand what is working, and keep reporting tied to business impact.',
    },
  ],
  deliverables: [
    'Marketing roadmap and channel recommendations',
    'Audience, messaging, and content direction',
    'Campaign planning for organic and paid channels',
    'Performance benchmarks and reporting structure',
    'Optimization priorities for conversion improvement',
    'Clearer strategic direction for future growth',
  ],
  outcomes: [
    'Stronger visibility in the channels that matter most',
    'Better use of budget through more focused execution',
    'Clearer reporting on campaign direction and impact',
    'A growth strategy that is easier to repeat and improve',
  ],
  cta: {
    title: 'Need a growth plan that feels more strategic than scattered?',
    description:
      'We can help organize your channels, messaging, and campaign decisions into a system that is easier to scale.',
    primaryHref: '/#process',
    primaryLabel: 'See Our Process',
    secondaryHref: '/#services',
    secondaryLabel: 'Explore All Services',
  },
};

export default function StrategicMarketingPage() {
  return <ServicePageTemplate {...strategicMarketingPage} />;
}
