import { motion } from 'framer-motion'
import {
  Aperture,
  Search,
  PenTool,
  Code2,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'
import type { ReactNode } from 'react'

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle: string
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="inline-flex items-center gap-3">
        <span className="h-[1px] w-10 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] opacity-80" />
        <span className="text-xs font-semibold tracking-[0.26em] text-white/70">{eyebrow}</span>
      </div>
      <h2 className="text-[40px] leading-[1.06] font-bold tracking-[-1px] text-white md:text-[54px]">{title}</h2>
      <p className="max-w-[720px] text-base leading-relaxed text-white/70 md:text-lg">{subtitle}</p>
    </div>
  )
}

function StepIcon({
  children,
  tone,
}: {
  children: ReactNode
  tone: 'violet' | 'cyan'
}) {
  const cls =
    tone === 'violet'
      ? 'border-[#8B5CF6]/25 bg-[#8B5CF6]/10 text-[#8B5CF6]'
      : 'border-[#06B6D4]/25 bg-[#06B6D4]/10 text-[#06B6D4]'

  return (
    <span
      className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${cls} ring-1 ring-white/10`}
      aria-hidden
    >
      {children}
    </span>
  )
}

type Step = {
  id: string
  number: string
  title: string
  description: string
  tone: 'violet' | 'cyan'
  icon: ReactNode
}

function ProcessCard({
  step,
  index,
}: {
  step: Step
  index: number
}) {
  return (
    <motion.div
      className="group relative flex h-full flex-col rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur transition"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.65, ease: 'easeOut', delay: index * 0.04 }}
      whileHover={{ y: -3 }}
    >
      {/* subtle luxury border accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(135deg, rgba(139,92,246,0.18) 0%, rgba(6,182,212,0.12) 45%, rgba(255,255,255,0) 70%)',
        }}
      />

      <div className="relative flex items-start justify-between gap-5">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <StepIcon tone={step.tone}>
              <span className="h-5 w-5">{step.icon}</span>
            </StepIcon>
            <div className="text-sm font-semibold tracking-[-0.15px] text-white/95">{step.title}</div>
          </div>

          <div className="mt-4 grid gap-2">
            <div className="flex items-baseline gap-3">
              <div className="text-[54px] leading-none font-bold tracking-[-1.4px] text-white/95">
                {step.number}
              </div>
              <div className="h-[1px] w-10 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
            </div>

            <p className="text-sm leading-relaxed text-white/70 md:text-[14px]">{step.description}</p>
          </div>
        </div>
      </div>

      <div className="relative mt-6 h-[1px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

      <div className="relative mt-5 text-xs font-semibold tracking-wide text-white/55">
        {step.id === 'discovery' && 'Align on what success looks like'}
        {step.id === 'research' && 'Find patterns, gaps and defensible value'}
        {step.id === 'design' && 'Design for clarity, flow and usability'}
        {step.id === 'development' && 'Ship a scalable, responsive UI foundation'}
        {step.id === 'optimization' && 'Measure, improve and validate before release'}
        {step.id === 'delivery' && 'Polish, document and deliver for real users'}
      </div>
    </motion.div>
  )
}

export default function MyProcess() {
  const steps: Step[] = [
    {
      id: 'discovery',
      number: '01',
      title: 'Discovery',
      description:
        'Understanding project goals, target audience and business requirements before making any decisions.',
      tone: 'violet',
      icon: <Aperture className="h-5 w-5" />,
    },
    {
      id: 'research',
      number: '02',
      title: 'Research',
      description:
        'Analyzing competitors, finding opportunities and identifying what makes the product stand out.',
      tone: 'cyan',
      icon: <Search className="h-5 w-5" />,
    },
    {
      id: 'design',
      number: '03',
      title: 'Design',
      description:
        'Creating wireframes and UI concepts in Figma with a strong focus on usability, clarity and user experience.',
      tone: 'violet',
      icon: <PenTool className="h-5 w-5" />,
    },
    {
      id: 'development',
      number: '04',
      title: 'Development',
      description:
        'Building responsive and scalable frontend applications using React, TypeScript and modern frontend architecture.',
      tone: 'cyan',
      icon: <Code2 className="h-5 w-5" />,
    },
    {
      id: 'optimization',
      number: '05',
      title: 'Optimization',
      description:
        'Improving performance, accessibility, SEO and overall user experience before launch.',
      tone: 'violet',
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      id: 'delivery',
      number: '06',
      title: 'Delivery',
      description:
        'Testing, refining and delivering a polished product ready for real-world users.',
      tone: 'cyan',
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
  ]

  return (
    <section id="process" className="relative overflow-hidden bg-[#050816] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-14%] top-[-30%] h-[540px] w-[540px] rounded-full bg-[#8B5CF6]/10 blur-[120px]" />
        <div className="absolute right-[-16%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[#06B6D4]/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="MY PROCESS"
          title="A workflow that ships quality"
          subtitle="A senior product mindset: align goals, design for clarity, build with scalable architecture, then optimize and deliver with confidence."
        />

        {/* Desktop timeline: single row of connected cards */}
        <div className="mt-12 hidden md:block">
          <div className="relative grid grid-cols-6 gap-5">
            {/* connecting rail */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-[90px] h-[1px]"
              style={{ background: 'linear-gradient(to right, rgba(139,92,246,0.65), rgba(6,182,212,0.45))' }}
            />

            {steps.map((step, i) => (
              <div key={step.id} className="relative">
                {/* marker dot */}
                <div
                  aria-hidden
                  className="absolute left-1/2 top-[78px] h-2.5 w-2.5 -translate-x-1/2 rounded-full"
                  style={{
                    background:
                      step.tone === 'violet'
                        ? 'rgba(139,92,246,0.95)'
                        : 'rgba(6,182,212,0.95)',
                    boxShadow:
                      step.tone === 'violet'
                        ? '0 0 24px rgba(139,92,246,0.35)'
                        : '0 0 24px rgba(6,182,212,0.30)',
                  }}
                />
                <ProcessCard step={step} index={i} />
              </div>
            ))}
          </div>

          {/* thin border under rail */}
          <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
        </div>

        {/* Tablet layout: 2 columns */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:hidden sm:grid-cols-2 lg:grid-cols-2">
          {steps.map((step, i) => (
            <ProcessCard key={step.id} step={step} index={i} />
          ))}
        </div>

        {/* Mobile single vertical timeline */}
        <div className="mt-12 md:hidden">
          <div className="relative">
            <div
              aria-hidden
              className="absolute left-[22px] top-2 bottom-0 w-[1px] bg-gradient-to-b from-[#8B5CF6]/40 via-white/10 to-[#06B6D4]/30"
            />
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={step.id} className="relative">
                  <div
                    aria-hidden
                    className="absolute left-[16px] top-6 h-3 w-3 rounded-full"
                    style={{
                      background:
                        step.tone === 'violet'
                          ? 'rgba(139,92,246,0.95)'
                          : 'rgba(6,182,212,0.95)',
                      boxShadow:
                        step.tone === 'violet'
                          ? '0 0 28px rgba(139,92,246,0.35)'
                          : '0 0 28px rgba(6,182,212,0.30)',
                    }}
                  />
                  {/* reuse card but remove large number dominance on small screens */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
                    transition={{ duration: 0.6, delay: i * 0.03 }}
                    className="group relative rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div className="min-w-0">
                        <div className="flex items-center gap-3">
                          <StepIcon tone={step.tone}>
                            <span className="h-5 w-5">{step.icon}</span>
                          </StepIcon>
                          <div className="text-sm font-semibold tracking-[-0.15px] text-white/95">{step.title}</div>
                        </div>
                        <div className="mt-4 flex items-baseline gap-3">
                          <div className="text-[38px] leading-none font-bold tracking-[-1.0px] text-white/95">
                            {step.number}
                          </div>
                          <div className="h-[1px] w-9 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-white/70">{step.description}</p>
                        <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                        <div className="mt-5 text-xs font-semibold tracking-wide text-white/55">
                          {step.id === 'discovery' && 'Align on what success looks like'}
                          {step.id === 'research' && 'Find patterns, gaps and defensible value'}
                          {step.id === 'design' && 'Design for clarity, flow and usability'}
                          {step.id === 'development' && 'Ship a scalable, responsive UI foundation'}
                          {step.id === 'optimization' && 'Measure, improve and validate before release'}
                          {step.id === 'delivery' && 'Polish, document and deliver for real users'}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

