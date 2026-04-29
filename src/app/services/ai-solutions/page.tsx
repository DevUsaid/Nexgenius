 "use client";

import ServicePageTemplate, { type ServicePageTemplateProps } from '@/components/ServicePageTemplate';
import { Bot, Brain, Cpu, Database, Zap } from 'lucide-react';

const aiSolutionsPage: ServicePageTemplateProps = {
  badge: 'The Era of Automation',
  badgeIcon: Cpu,
  title: 'AI',
  highlight: 'Solutions',
  description:
    'Unlock practical AI systems that reduce manual effort, speed up decisions, and help your team serve customers with more consistency.',
  heroHighlights: ['AI copilots', 'Workflow automation', 'Insight engines', 'Customer support AI'],
  overview: {
    title: 'Practical AI built around real business workflows',
    description:
      'We focus on AI use cases that connect directly to revenue, operations, and customer experience instead of creating tools that look impressive but stay unused.',
    points: [
      'Use-case discovery and prioritization',
      'Prompt and system design',
      'Knowledge base and data integration',
      'Internal and customer-facing assistants',
    ],
    icon: Cpu,
  },
  spotlight: {
    title: 'Move from experimentation to real adoption',
    description:
      'Our approach is designed to make AI useful in day-to-day execution, with clear safeguards, measurable wins, and a rollout path your team can actually maintain.',
    points: [
      'Reduce repetitive manual work',
      'Shorten response and turnaround times',
      'Improve reporting and decision support',
      'Create repeatable AI workflows across teams',
    ],
    icon: Brain,
  },
  capabilities: [
    {
      title: 'Custom LLM Solutions',
      description:
        'AI assistants trained around your business context, tone, and operational requirements.',
      icon: Brain,
    },
    {
      title: 'AI Chatbots',
      description:
        'Customer-facing bots that answer faster, qualify better, and stay aligned with your service standards.',
      icon: Bot,
    },
    {
      title: 'Data Intelligence',
      description:
        'Smarter dashboards, pattern recognition, and predictive insights that support better planning.',
      icon: Database,
    },
    {
      title: 'Process Automation',
      description:
        'Workflow automation that removes repetitive tasks and frees your team for higher-value work.',
      icon: Zap,
    },
  ],
  process: [
    {
      step: '01',
      title: 'Identify High-Value Use Cases',
      description:
        'We map where AI can remove friction, save time, or improve the customer experience fastest.',
    },
    {
      step: '02',
      title: 'Prototype the Workflow',
      description:
        'Before full rollout, we validate prompts, outputs, and decision points against real scenarios.',
    },
    {
      step: '03',
      title: 'Connect Your Systems',
      description:
        'We integrate the model with your data sources, tools, and business logic so it becomes operational.',
    },
    {
      step: '04',
      title: 'Monitor and Improve',
      description:
        'Post-launch, we refine output quality, governance, and adoption based on actual team usage.',
    },
  ],
  deliverables: [
    'AI opportunity and implementation roadmap',
    'Prompt architecture and workflow design',
    'Knowledge base or data-source integration plan',
    'Prototype or production-ready assistant experience',
    'Usage guidance and operational safeguards',
    'Measurement framework for AI performance',
  ],
  outcomes: [
    'Faster customer response with less manual handling',
    'More structured internal knowledge access across teams',
    'Better visibility into trends, issues, and opportunities',
    'AI systems that are easier to govern, improve, and scale',
  ],
  cta: {
    title: 'Want to turn AI into an actual business advantage?',
    description:
      'We can help define the right use cases, the right rollout order, and the right execution model for your team.',
    primaryHref: '/#process',
    primaryLabel: 'See Our Process',
    secondaryHref: '/#services',
    secondaryLabel: 'Explore All Services',
  },
};

export default function AISolutionsPage() {
  return <ServicePageTemplate {...aiSolutionsPage} />;
}
