export type ChatbotLink = {
  href: string;
  label: string;
};

export type ChatbotReply = {
  links?: ChatbotLink[];
  suggestions?: string[];
  text: string;
};

export type ChatbotMessage = {
  role: 'assistant' | 'user';
  text: string;
};

const defaultSuggestions = [
  'Tell me about UI/UX Design',
  'Which service is best for automation?',
  'How does your process work?',
];

function normalizeText(input: string) {
  return input.toLowerCase().trim();
}

function includesAny(input: string, terms: string[]) {
  return terms.some((term) => input.includes(term));
}

export function normalizeConversationHistory(input: unknown, limit = 12): ChatbotMessage[] {
  if (!Array.isArray(input)) {
    return [];
  }

  return input
    .filter((item): item is ChatbotMessage => {
      if (!item || typeof item !== 'object') {
        return false;
      }

      const role = 'role' in item ? item.role : undefined;
      const text = 'text' in item ? item.text : undefined;

      return (
        (role === 'assistant' || role === 'user') &&
        typeof text === 'string' &&
        text.trim().length > 0
      );
    })
    .map((item) => ({
      role: item.role,
      text: item.text.trim(),
    }))
    .slice(-limit);
}

export function formatConversationTranscript(messages: ChatbotMessage[]) {
  return messages
    .map((message) => `${message.role === 'user' ? 'Visitor' : 'Assistant'}: ${message.text}`)
    .join('\n');
}

export function detectServiceInterest(messages: ChatbotMessage[]) {
  const text = normalizeText(messages.map((message) => message.text).join(' '));

  if (includesAny(text, ['ui/ux', 'ui ux', 'ux', 'design', 'interface', 'landing page'])) {
    return 'UI/UX Design';
  }

  if (includesAny(text, ['website', 'web app', 'development', 'app', 'portal', 'dashboard', 'software'])) {
    return 'Custom Development';
  }

  if (includesAny(text, ['marketing', 'seo', 'ads', 'lead', 'growth', 'social media', 'campaign'])) {
    return 'Strategic Marketing';
  }

  if (includesAny(text, ['ai', 'automation', 'chatbot', 'agent', 'llm', 'workflow'])) {
    return 'AI Solutions';
  }

  return 'General Inquiry';
}

export function summarizeConversationFallback(messages: ChatbotMessage[]) {
  const service = detectServiceInterest(messages);
  const lastUserMessage = [...messages]
    .reverse()
    .find((message) => message.role === 'user')?.text;

  if (!lastUserMessage) {
    return `Website visitor completed a ${service.toLowerCase()} conversation and may need a follow-up.`;
  }

  const trimmedMessage =
    lastUserMessage.length > 220 ? `${lastUserMessage.slice(0, 217)}...` : lastUserMessage;

  return `Website visitor likely needs ${service}. Latest request: ${trimmedMessage}`;
}

export function getWelcomeReply(): ChatbotReply {
  return {
    text:
      "Hi, I'm the NexGenius assistant. I can help you explore our services, explain our process, and point you to the right page based on your goal.",
    suggestions: defaultSuggestions,
    links: [
      { label: 'View Services', href: '/#services' },
      { label: 'See Our Process', href: '/#process' },
    ],
  };
}

export function getChatbotReply(message: string): ChatbotReply {
  const input = normalizeText(message);

  if (!input) {
    return getWelcomeReply();
  }

  if (includesAny(input, ['hi', 'hello', 'hey', 'salam', 'assalam', 'aoa'])) {
    return {
      text:
        'Hello! If you tell me what you want to improve, I can point you to the right NexGenius service and explain how we can help.',
      suggestions: [
        'I need a website',
        'I want more leads',
        'I need automation with AI',
      ],
    };
  }

  if (includesAny(input, ['ui/ux', 'ui ux', 'ux', 'design', 'interface', 'landing page'])) {
    return {
      text:
        'Our UI/UX Design service focuses on research, clean user flows, responsive interfaces, and conversion-focused experiences. It is a strong fit if you want your product to feel more premium and easier to use.',
      links: [{ label: 'Open UI/UX Design', href: '/services/ui-ux-design' }],
      suggestions: [
        'What deliverables do you provide?',
        'How does your process work?',
        'I need a website too',
      ],
    };
  }

  if (includesAny(input, ['website', 'web app', 'development', 'app', 'portal', 'dashboard', 'software'])) {
    return {
      text:
        'Our Custom Development service is for websites, platforms, dashboards, internal tools, and scalable product builds. We handle planning, frontend, backend, integrations, and launch support.',
      links: [{ label: 'Open Custom Development', href: '/services/custom-development' }],
      suggestions: [
        'What technologies do you use?',
        'How does your process work?',
        'Can you build internal tools?',
      ],
    };
  }

  if (includesAny(input, ['marketing', 'seo', 'ads', 'lead', 'growth', 'social media', 'campaign'])) {
    return {
      text:
        'Our Strategic Marketing service helps with SEO, social strategy, paid campaigns, messaging direction, and performance optimization. It is ideal if you want stronger visibility and better lead quality.',
      links: [{ label: 'Open Strategic Marketing', href: '/services/strategic-marketing' }],
      suggestions: [
        'How do you improve leads?',
        'What channels do you manage?',
        'What is your process?',
      ],
    };
  }

  if (includesAny(input, ['ai', 'automation', 'chatbot', 'agent', 'llm', 'workflow'])) {
    return {
      text:
        'Our AI Solutions service is built around practical automation, copilots, chatbots, knowledge assistants, and business workflows. The goal is to save time, improve consistency, and create useful AI systems your team will actually adopt.',
      links: [{ label: 'Open AI Solutions', href: '/services/ai-solutions' }],
      suggestions: [
        'Which service is best for automation?',
        'Can you build AI chatbots?',
        'How do you start an AI project?',
      ],
    };
  }

  if (includesAny(input, ['process', 'how do you work', 'workflow', 'steps', 'timeline'])) {
    return {
      text:
        'Our usual flow is: 1) understand the goal and constraints, 2) define the right strategy and scope, 3) design/build in focused milestones, and 4) launch, refine, and improve based on real usage.',
      suggestions: [
        'What deliverables do you provide?',
        'I need a website',
        'I want more leads',
      ],
      links: [{ label: 'See Our Process', href: '/#process' }],
    };
  }

  if (includesAny(input, ['deliverables', 'what do i get', 'what do you provide', 'output'])) {
    return {
      text:
        'Deliverables depend on the service, but they usually include strategy, execution assets, structured milestones, and a clear next-step roadmap. On service pages, we have added sections for capabilities, process, deliverables, and outcomes.',
      suggestions: [
        'Tell me about UI/UX Design',
        'Tell me about AI Solutions',
        'Tell me about Strategic Marketing',
      ],
    };
  }

  if (includesAny(input, ['price', 'pricing', 'cost', 'budget', 'quote'])) {
    return {
      text:
        'Pricing depends on scope, timeline, and complexity. The best next step is to define your goal first, then we can recommend the right service path and estimate the build or campaign effort more accurately.',
      suggestions: [
        'I need a website',
        'I need automation with AI',
        'I want more leads',
      ],
      links: [{ label: 'See Our Services', href: '/#services' }],
    };
  }

  if (includesAny(input, ['contact', 'call', 'meeting', 'talk', 'consultation'])) {
    return {
      text:
        'You can start by exploring the service that matches your goal, then move into our process flow. If you want, tell me your main goal and I will suggest the best service to start with.',
      suggestions: [
        'I need a website',
        'I want more leads',
        'I need automation with AI',
      ],
      links: [
        { label: 'See Our Process', href: '/#process' },
        { label: 'Explore Services', href: '/#services' },
      ],
    };
  }

  return {
    text:
      'I can help with UI/UX Design, Custom Development, Strategic Marketing, and AI Solutions. Tell me your goal, like improving design, building software, getting more leads, or automating workflows.',
    suggestions: defaultSuggestions,
    links: [{ label: 'Explore Services', href: '/#services' }],
  };
}
