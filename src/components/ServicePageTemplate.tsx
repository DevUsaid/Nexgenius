"use client";

import Link from 'next/link';
import BackgroundParticles from '@/components/BackgroundParticles';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2, type LucideIcon } from 'lucide-react';

type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

type SectionCard = {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
};

type CTA = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export type ServicePageTemplateProps = {
  badge: string;
  badgeIcon: LucideIcon;
  title: string;
  highlight: string;
  description: string;
  heroHighlights: string[];
  overview: SectionCard;
  spotlight: SectionCard;
  capabilities: Capability[];
  process: ProcessStep[];
  deliverables: string[];
  outcomes: string[];
  cta: CTA;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export default function ServicePageTemplate({
  badge,
  badgeIcon: BadgeIcon,
  title,
  highlight,
  description,
  heroHighlights,
  overview,
  spotlight,
  capabilities,
  process,
  deliverables,
  outcomes,
  cta,
}: ServicePageTemplateProps) {
  const OverviewIcon = overview.icon;
  const SpotlightIcon = spotlight.icon;
  const capabilityGridClass =
    capabilities.length === 4 ? 'md:grid-cols-2 xl:grid-cols-4' : 'md:grid-cols-3';

  return (
    <main className="relative min-h-screen bg-slate-50">
      <BackgroundParticles />
      <Navbar />

      <div className="relative z-10 px-6 pb-20 pt-32">
        <div className="mx-auto max-w-7xl">
          <motion.section
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mb-20 text-center"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center space-x-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-700"
            >
              <BadgeIcon className="h-4 w-4" />
              <span>{badge}</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mb-8 text-5xl font-black text-slate-950 md:text-7xl"
            >
              {title} <span className="text-gradient">{highlight}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600"
            >
              {description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.section>

          <section className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              className="rounded-[2.5rem] border border-slate-100 bg-white p-12 shadow-sm"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
                <OverviewIcon className="h-8 w-8 text-indigo-600" />
              </div>
              <h2 className="mb-6 text-3xl font-bold text-slate-950">{overview.title}</h2>
              <p className="mb-10 text-lg leading-relaxed text-slate-600">
                {overview.description}
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {overview.points.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              className="relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-950 p-12 text-white shadow-xl"
            >
              <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-[110px]"></div>
              <div className="relative">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                  <SpotlightIcon className="h-8 w-8 text-indigo-400" />
                </div>
                <h3 className="mb-6 text-3xl font-bold">{spotlight.title}</h3>
                <p className="mb-10 text-lg leading-relaxed text-slate-300">
                  {spotlight.description}
                </p>

                <div className="space-y-4">
                  {spotlight.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-slate-200"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          <section className="mb-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="mb-8 max-w-3xl"
            >
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">
                What We Cover
              </p>
              <h2 className="mb-4 text-4xl font-black tracking-tight text-slate-950">
                Service scope built around real business needs
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Each engagement is shaped to solve a practical problem, improve execution,
                and make the next stage of growth easier to manage.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className={`grid grid-cols-1 gap-8 ${capabilityGridClass}`}
            >
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="soft-card rounded-[2rem] border border-slate-100 bg-white p-10"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50">
                      <Icon className="h-7 w-7 text-indigo-600" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-slate-950">{item.title}</h3>
                    <p className="leading-relaxed text-slate-600">{item.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </section>

          <section className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="rounded-[2.5rem] border border-slate-100 bg-white p-12 shadow-sm"
            >
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">
                How We Work
              </p>
              <h2 className="mb-5 text-4xl font-black tracking-tight text-slate-950">
                A clearer process from kickoff to rollout
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                We keep momentum high by turning strategy into clear milestones, visible
                decisions, and execution your team can confidently follow.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="grid gap-5"
            >
              {process.map((item) => (
                <motion.div
                  key={item.step}
                  variants={fadeUp}
                  className="rounded-[2rem] border border-slate-200/80 bg-white/90 px-6 py-6 shadow-sm backdrop-blur-sm"
                >
                  <div className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-indigo-600">
                    {item.step}
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-slate-950">{item.title}</h3>
                  <p className="leading-relaxed text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="rounded-[2.5rem] border border-slate-100 bg-white p-12 shadow-sm"
            >
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">
                Deliverables
              </p>
              <h2 className="mb-6 text-3xl font-bold text-slate-950">What you get from the engagement</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-5 py-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                    <span className="text-sm font-medium leading-relaxed text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-950 p-12 text-white shadow-xl"
            >
              <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]"></div>
              <div className="relative">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-indigo-300">
                  Outcomes
                </p>
                <h2 className="mb-6 text-3xl font-bold">What this should unlock for your team</h2>
                <div className="space-y-4">
                  {outcomes.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-[2.5rem] border border-slate-200/80 bg-white/85 p-12 shadow-sm backdrop-blur-sm"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">
                  Next Step
                </p>
                <h2 className="mb-4 text-4xl font-black tracking-tight text-slate-950">
                  {cta.title}
                </h2>
                <p className="text-lg leading-relaxed text-slate-600">{cta.description}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={cta.primaryHref}
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200"
                >
                  {cta.primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                {cta.secondaryHref && cta.secondaryLabel ? (
                  <Link
                    href={cta.secondaryHref}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950"
                  >
                    {cta.secondaryLabel}
                  </Link>
                ) : null}
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
