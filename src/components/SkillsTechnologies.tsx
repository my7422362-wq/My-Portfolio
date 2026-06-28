import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  LayoutGrid,
  PenTool,
  Component,
  Search,
} from 'lucide-react'
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiFigma,
  SiGit,
  SiGithub,
  SiXcode,
  SiVite,
  SiFramer,
} from 'react-icons/si'




const SectionLabel = ({ children }: { children: ReactNode }) => {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-[1px] w-10 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] opacity-80" />
      <span className="text-xs font-semibold tracking-[0.26em] text-white/70">
        {children}
      </span>
    </div>
  )
}

const SoftScrollReveal = ({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}



function SkillItem({
  icon,
  label,
}: {
  icon: ReactNode
  label: string
}) {
  return (
    <motion.div
      className="group flex items-center gap-3.5 rounded-xl px-3.5 py-2.5 transition"
      variants={{
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ x: 2 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="flex min-w-0 items-center gap-3.5">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:border-white/20">
          {icon}
        </span>

        <div className="min-w-0">
          <div className="truncate text-base font-semibold tracking-[-0.15px] text-white/95">
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  )
}


function SkillCard({
  index,
  title,
  items,
}: {
  index: string
  title: string
items: Array<{ icon: ReactNode; label: string; indicator?: 'dot' | 'line' }>
}) {
  return (
    <motion.div
      className="group relative flex h-full flex-col rounded-[24px] border border-[#1E1E1E] bg-[#111111] p-5 transition"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      whileHover={{ y: -3 }}
    >

      {/* vertical accent beside title area */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-10 top-0 h-full w-[2px] rounded-full bg-gradient-to-b from-[#8B5CF6] to-[#06B6D4] opacity-45"
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <div className="text-sm font-semibold tracking-[0.16em] text-white/60">
              {title}
            </div>
            <h3 className="mt-2 text-[22px] font-bold tracking-[-0.4px] text-white">
              {title}
            </h3>
          </div>

          <div className="hidden items-end md:flex">
            <div className="text-[44px] font-bold leading-none tracking-[-1.4px] text-white/5">
              {index}
            </div>
          </div>
        </div>

        <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
      </div>

      <motion.div
        className="mt-6 grid gap-2.5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
        }}
      >
        {items.map((it) => (
          <SkillItem key={it.label} icon={it.icon} label={it.label} />
        ))}
      </motion.div>

      <div className="mt-auto pt-6">
        <div className="flex items-center justify-between gap-4">
          <div className="text-xs font-semibold tracking-wide text-white/55">
           
          </div>
          <div className="flex items-center gap-2 text-xs text-white/45">
            <span className="h-[1px] w-10 bg-white/10" />
            <span></span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function SkillsTechnologies() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050816] py-20 md:py-28"
      aria-label="Skills & Technologies"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-14%] top-[-25%] h-[540px] w-[540px] rounded-full bg-[#8B5CF6]/10 blur-[120px]" />
        <div className="absolute right-[-16%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[#06B6D4]/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-4">
          <SoftScrollReveal>
            <SectionLabel>SKILLS &amp; TECHNOLOGIES</SectionLabel>
          </SoftScrollReveal>
        </div>



        {/* Main layout: 3 cards */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <SkillCard
            index=""
            title="Frontend Development"
            items={[
              {
                icon: <SiReact size={22} style={{ color: '#61DAFB' }} />,
                label: 'React',
                indicator: 'dot',
              },
              {
                icon: <SiTypescript size={22} style={{ color: '#3178C6' }} />,
                label: 'TypeScript',
                indicator: 'dot',
              },
              {
                icon: <SiNextdotjs size={22} style={{ color: 'white' }} />,
                label: 'Next.js',
                indicator: 'line',
              },
              {
                icon: <SiTailwindcss size={22} style={{ color: '#06B6D4' }} />,
                label: 'Tailwind CSS',
                indicator: 'line',
              },
              {
                icon: <SiJavascript size={22} style={{ color: '#F7DF1E' }} />,
                label: 'JavaScript',
                indicator: 'dot',
              },

            ]}
          />

          <SkillCard
            index=""
            title="UI/UX Design"
            items={[
              {
                icon: <span className="inline-flex items-center justify-center" aria-hidden>
                  <SiFigma size={22} style={{ color: 'var(--accent)' }} />
                </span>,
                label: 'Figma',
                indicator: 'line',
              },
              {
                icon: <LayoutGrid size={22} color="#06B6D4" />,
                label: 'Design Systems',
                indicator: 'dot',
              },
              {
                icon: <PenTool size={22} color="#06B6D4" />,
                label: 'Wireframing',
                indicator: 'dot',
              },
              {
                icon: <Component size={22} color="#06B6D4" />,
                label: 'Prototyping',
                indicator: 'line',
              },
              {
                icon: <Search size={22} color="#06B6D4" />,
                label: 'User Research',
                indicator: 'dot',
              },

            ]}
          />

          <SkillCard
            index=""
            title="Tools & Workflow"
            items={[
              {
                icon: <SiGit size={22} style={{ color: '#F05032' }} />,
                label: 'Git',
                indicator: 'dot',
              },
              {
                icon: <SiGithub size={22} style={{ color: 'white' }} />,
                label: 'GitHub',
                indicator: 'dot',
              },
              {
                icon: <SiXcode size={22} style={{ color: '#007ACC' }} />,
                label: 'VS Code',
                indicator: 'line',
              },


              {
                icon: <SiVite size={22} style={{ color: '#646CFF' }} />,
                label: 'Vite',
                indicator: 'line',
              },
              {
                icon: <SiFramer size={22} style={{ color: '#0055FF' }} />,
                label: 'Framer Motion',
                indicator: 'dot',
              },

            ]}
          />
        </motion.div>
      </div>
    </section>
  )
}

