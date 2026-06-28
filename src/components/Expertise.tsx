import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const TechnologyStrip = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-[12px] font-medium tracking-[0.06em] text-white/65">
      {children}
    </div>
  )
}

function TechToken({ children }: { children: ReactNode }) {
  return <span className="whitespace-nowrap">{children}</span>
}

function DotSep() {
  return <span aria-hidden className="text-white/30">•</span>
}

function ExpertiseBlock({
  index,
  title,
  description,
}: {
  index: string
  title: string
  description: string
}) {
  return (
    <motion.div
      className="group relative flex h-full flex-col justify-between rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-white/20"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
      transition={{ duration: 0.65 }}
    >
      {/* number */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="text-[54px] leading-none font-bold tracking-[-1.2px] text-white/95">
            {index}
          </div>
          <div className="mt-3 text-[18px] font-semibold tracking-[-0.2px] text-white">
            {title}
          </div>
        </div>

        {/* micro ornament */}
        <div className="hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 md:flex">
          <div className="h-2 w-2 rounded-full bg-[#06B6D4] shadow-[0_0_24px_rgba(6,182,212,.35)]" />
        </div>
      </div>

      {/* editorial divider */}
      <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

      {/* description */}
      <p className="mt-6 max-w-[42ch] text-sm leading-relaxed text-white/70 md:text-[14px]">
        {description}
      </p>

      {/* subtle luxury underline */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]">
        <div
          aria-hidden
          className="absolute -right-24 -top-24 h-[220px] w-[220px] rounded-full bg-[#8B5CF6]/15 blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div
          aria-hidden
          className="absolute -bottom-28 -left-24 h-[240px] w-[240px] rounded-full bg-[#06B6D4]/10 blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
    </motion.div>
  )
}

export default function Expertise() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-20 md:py-28" aria-label="Expertise">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-14%] top-[-25%] h-[540px] w-[540px] rounded-full bg-[#8B5CF6]/10 blur-[120px]" />
        <div className="absolute right-[-16%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[#06B6D4]/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        {/* header */}
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-3">
            <span className="h-[1px] w-10 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] opacity-80" />
            <span className="text-xs font-semibold tracking-[0.26em] text-white/70">EXPERTISE</span>
          </div>
          <h2 className="text-[40px] leading-[1.06] font-bold tracking-[-1px] text-white md:text-[54px]">
            Expertise
          </h2>
          <p className="max-w-[720px] text-base leading-relaxed text-white/70 md:text-lg">
            Areas where I create the most impact.
          </p>
        </div>

        {/* blocks */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2">
          <ExpertiseBlock
            index="01"
            title="Frontend Engineering"
            description="Building scalable, responsive and high-performance web applications using React, TypeScript and modern frontend architectures."
          />
          <ExpertiseBlock
            index="02"
            title="UI/UX Design"
            description="Designing intuitive digital experiences with a strong focus on usability, accessibility and visual hierarchy."
          />
          <ExpertiseBlock
            index="03"
            title="Design Systems"
            description="Creating reusable components and design systems that improve consistency and development speed."
          />
          <ExpertiseBlock
            index="04"
            title="Performance & Optimization"
            description="Improving website speed, accessibility, responsiveness and overall user experience."
          />
        </div>

        {/* tech strip (secondary) */}
        <TechnologyStrip>
          <TechToken>React</TechToken>
          <DotSep />
          <TechToken>TypeScript</TechToken>
          <DotSep />
          <TechToken>Next.js</TechToken>
          <DotSep />
          <TechToken>Tailwind CSS</TechToken>
          <DotSep />
          <TechToken>Framer Motion</TechToken>
          <DotSep />
          <TechToken>Figma</TechToken>
        </TechnologyStrip>
      </div>
    </section>
  )
}

