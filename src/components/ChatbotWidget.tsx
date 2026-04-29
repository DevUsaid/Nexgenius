"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, Check, MessageCircle, Send, Sparkles, X } from 'lucide-react';
import type { ChatbotLink, ChatbotMessage, ChatbotReply } from '@/lib/chatbot';
import { getWelcomeReply } from '@/lib/chatbot';

type Message = ChatbotMessage & {
  id: string;
  links?: ChatbotLink[];
  suggestions?: string[];
};

type CompletionResponse = {
  notificationConfigured: boolean;
  notificationMode?: 'resend' | null;
  notificationSent: boolean;
  serviceInterest: string;
  summary: string;
};

function toAssistantMessage(id: string, reply: ChatbotReply): Message {
  return {
    id,
    role: 'assistant',
    text: reply.text,
    suggestions: reply.suggestions,
    links: reply.links,
  };
}

function getConversationHistory(messages: Message[]): ChatbotMessage[] {
  return messages.map(({ role, text }) => ({ role, text }));
}

export default function ChatbotWidget() {
  const welcome = getWelcomeReply();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    toAssistantMessage('welcome', welcome),
  ]);
  const viewportRef = useRef<HTMLDivElement>(null);
  const messageIdCounter = useRef(0);

  const generateId = (role: string) => {
    messageIdCounter.current += 1;
    return `${role}-${messageIdCounter.current}`;
  };

  useEffect(() => {
    const container = viewportRef.current;

    if (!container) {
      return;
    }

    container.scrollTop = container.scrollHeight;
  }, [messages, isLoading, isCompleting]);

  async function sendMessage(messageText: string) {
    const trimmed = messageText.trim();

    if (!trimmed || isLoading || isCompleting) {
      return;
    }

    const userMessage: Message = {
      id: generateId('user'),
      role: 'user',
      text: trimmed,
    };
    const nextHistory = [...messages, userMessage];

    setMessages(nextHistory);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          history: getConversationHistory(nextHistory),
          message: trimmed,
        }),
      });

      if (!response.ok) {
        throw new Error('Chat request failed');
      }

      const reply = (await response.json()) as ChatbotReply;

      setMessages((current) => [
        ...current,
        toAssistantMessage(generateId('assistant'), reply),
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: generateId('assistant-error'),
          role: 'assistant',
          text:
            'I could not reply just now, but I can still help you explore our services. Try asking about design, development, marketing, or AI automation.',
          suggestions: [
            'Tell me about UI/UX Design',
            'I need a website',
            'I need automation with AI',
          ],
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  async function completeConversation() {
    if (messages.length < 2 || isLoading || isCompleting) {
      return;
    }

    setIsCompleting(true);

    try {
      const response = await fetch('/api/chat/complete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          history: getConversationHistory(messages),
        }),
      });

      if (!response.ok) {
        throw new Error('Conversation completion failed');
      }

      const payload = (await response.json()) as CompletionResponse;
      let completionText = `Conversation wrapped up. I marked this as ${payload.serviceInterest} and prepared a short summary for follow-up.`;

      if (payload.notificationSent) {
        completionText = `Conversation wrapped up. An email notification was sent${payload.notificationMode === 'resend' ? ' through Resend' : ''} with this summary: ${payload.summary}`;
      } else if (!payload.notificationConfigured) {
        completionText = `Conversation wrapped up. I prepared this summary, but email sending is not configured yet: ${payload.summary}`;
      }

      setMessages((current) => [
        ...current,
        {
          id: generateId('assistant-complete'),
          role: 'assistant',
          text: completionText,
          suggestions: [
            'Tell me about UI/UX Design',
            'I need a website',
            'I need automation with AI',
          ],
          links: [
            { label: 'Explore Services', href: '/#services' },
            { label: 'See Our Process', href: '/#process' },
          ],
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
          {
            id: generateId('assistant-complete-error'),
            role: 'assistant',
            text:
            'I could not complete the conversation handoff just now. Your chat is still here, and you can try the email notification again.',
        },
      ]);
    } finally {
      setIsCompleting(false);
    }
  }

  const lastAssistantMessage = [...messages]
    .reverse()
    .find((message) => message.role === 'assistant');

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-4 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            className="w-[calc(100vw-2rem)] max-w-[24rem] overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/95 shadow-[0_24px_80px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl"
          >
            <div className="relative overflow-hidden border-b border-slate-200/80 bg-slate-950 px-5 py-4 text-white">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-indigo-500/20 blur-3xl"></div>
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="mb-1 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-indigo-300">
                    <Sparkles className="h-4 w-4" />
                    NexGenius Bot
                  </div>
                  <h2 className="text-lg font-bold">Ask about services, process, or next steps</h2>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Close chatbot"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div ref={viewportRef} className="max-h-[24rem] space-y-4 overflow-y-auto px-4 py-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-[1.5rem] px-4 py-3 text-base leading-relaxed shadow-sm ${
                      message.role === 'user'
                        ? 'bg-indigo-600 text-white'
                        : 'border border-slate-200 bg-slate-50 text-slate-700'
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>

                    {message.links && message.links.length > 0 ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.links.map((link) => (
                          <Link
                            key={`${message.id}-${link.href}`}
                            href={link.href}
                            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-indigo-200 hover:text-indigo-700"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}

              {isLoading || isCompleting ? (
                <div className="flex justify-start">
                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500 shadow-sm">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400"></span>
                      <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400 [animation-delay:120ms]"></span>
                      <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400 [animation-delay:240ms]"></span>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            {lastAssistantMessage?.suggestions && lastAssistantMessage.suggestions.length > 0 ? (
              <div className="border-t border-slate-200/80 px-4 py-3">
                <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Quick prompts
                </div>
                <div className="flex flex-wrap gap-2">
                  {lastAssistantMessage.suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => void sendMessage(suggestion)}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-indigo-200 hover:text-indigo-700"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="border-t border-slate-200/80 px-4 pt-4">
              <button
                type="button"
                onClick={() => void completeConversation()}
                disabled={messages.length < 2 || isLoading || isCompleting}
                className="mb-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-indigo-200 hover:text-indigo-700 disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-400"
              >
                <Check className="h-4 w-4" />
                End chat & send email
              </button>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                void sendMessage(input);
              }}
              className="p-4 pt-0"
            >
              <div className="flex items-center gap-3 rounded-[1.5rem] border border-slate-200 bg-slate-50 px-3 py-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about AI, design, development..."
                  className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  disabled={isLoading || isCompleting || !input.trim()}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white transition-all hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen((current) => !current)}
        className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-5 py-4 text-white shadow-[0_20px_50px_-18px_rgba(15,23,42,0.45)] transition-all hover:bg-indigo-600"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-indigo-300 transition-colors group-hover:text-white">
          {isOpen ? <X className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
        </span>
        <span className="hidden pr-1 text-left sm:block">
          <span className="block text-sm font-bold leading-tight">Need help?</span>
          <span className="block text-xs text-slate-300 group-hover:text-indigo-100">
            Chat with NexGenius
          </span>
        </span>
        <MessageCircle className="h-5 w-5 sm:hidden" />
      </motion.button>
    </div>
  );
}
