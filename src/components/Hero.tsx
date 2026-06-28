import { motion } from 'framer-motion'
import { Mail, Zap } from 'lucide-react'

import type { ReactNode } from 'react'

const GradientText = ({ children }: { children: ReactNode }) => {
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]">
      {children}
    </span>
  )
}



const GlowButton = ({
  variant,
  icon,
  children,
  onClick,
}: {
  variant: 'primary' | 'secondary'
  icon?: ReactNode
  children: ReactNode
  onClick?: () => void
}) => {
  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition'

  const styles =
    variant === 'primary'
      ? 'bg-[#8B5CF6]/15 text-white ring-1 ring-white/10 hover:bg-[#8B5CF6]/20'
      : 'bg-white/5 text-white/90 ring-1 ring-white/10 hover:bg-white/10'

  const glow =
    variant === 'primary'
      ? 'before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-[#8B5CF6] before:via-[#06B6D4] before:to-[#8B5CF6] before:opacity-0 before:blur-md before:transition group-hover:before:opacity-30'
      : 'before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-[#06B6D4]/40 before:to-[#8B5CF6]/40 before:opacity-0 before:blur-md before:transition group-hover:before:opacity-20'

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`${base} ${styles} ${glow}`}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
    >
      <span className="relative z-10">{icon ? <span className="-ml-1">{icon}</span> : null}</span>
      <span className="relative z-10">{children}</span>
      <span className="sr-only">{typeof children === 'string' ? children : 'Action'}</span>
    </motion.button>
  )
}

const Pill = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/85 backdrop-blur"
      whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(139,92,246,.25)' }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
    >
      {children}
    </motion.div>
  )
}

const FloatCard = ({
  title,
  subtitle,
  className,
  delay,
}: {
  title: string
  subtitle?: string
  className?: string
  delay: number
}) => {
  return (
    <motion.div
      className={
        'absolute rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur shadow-[0_0_60px_rgba(0,0,0,.2)] ' +
        (className ?? '')
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
          <Zap className="h-4 w-4 text-[#06B6D4]" />
        </span>
        <div>
          <div className="text-sm font-semibold text-white/95">{title}</div>
          {subtitle ? <div className="mt-0.5 text-xs text-white/70">{subtitle}</div> : null}
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const handleViewProjects = () => {
    // placeholder: users can wire this to router later
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }


  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#050816] pt-[108px]">

      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-[#8B5CF6]/25 blur-[120px]" />
        <div className="absolute right-[-15%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[#06B6D4]/20 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-1 flex-col items-center justify-center px-6 pt-0 pb-0">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-[120px]">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="flex flex-col gap-5">
               

                <h1 className="text-[50px] leading-[0.9] font-bold tracking-[-1.3px] text-white md:text-[54px]">
                  <span className="block whitespace-nowrap">Frontend Developer</span>
                  <br />
                  <span className="whitespace-nowrap -mt-[0.16em]">
                     <GradientText>UI/UX Designer</GradientText>
                  </span>
                </h1>


                <p className="max-w-[520px] text-base leading-relaxed text-white/75">
                 Building modern web experiences with clean code, intuitive UI/UX, and performance-driven frontend development.

                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <GlowButton
                    variant="primary"
                    onClick={handleViewProjects}
                    icon={<Zap className="h-4 w-4" />}
                  >
                    View Projects
                  </GlowButton>
                  <GlowButton variant="secondary" onClick={handleContact} icon={<Mail className="h-4 w-4" />}>
                    Contact Me
                  </GlowButton>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <Pill>React.js</Pill>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
                    <Pill>TypeScript</Pill>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    <Pill>Tailwind CSS</Pill>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
                    <Pill>Framer Motion</Pill>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                    <Pill>Figma</Pill>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              {/* Animated gradient border container */}
              <motion.div
                className="relative rounded-[32px] border border-white/10 bg-white/5 p-[1px] backdrop-blur"
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              >
                <div className="absolute inset-0 rounded-[32px] opacity-70">
                  <div className="absolute inset-0 rounded-[32px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(139,92,246,0.55),rgba(6,182,212,0.45),rgba(139,92,246,0.55))]" />
                </div>

                <div className="relative overflow-hidden rounded-[32px] bg-[#0B1020]/50 p-8 md:p-10">
                  {/* Decorative grid/glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.9),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.9),transparent_50%),linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:100%_100%,100%_100%,42px_42px,42px_42px]" />

                    <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center"> 
                      {/* Static premium profile image (fade-in only) */}
                    <motion.div
                      className="h-[390px] w-[390px] rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
                    >
                    <img
                    src="/me.jpeg"
                    alt="Mohamed Youssif"
                    className="h-[390px] w-[390px] rounded-full object-cover"
/>
                    </motion.div>


                    {/* Blurred glows behind image */}
                    <div className="pointer-events-none absolute -left-6 top-[-20px] h-[220px] w-[220px] rounded-full bg-[#8B5CF6]/25 blur-[70px]" />
                    <div className="pointer-events-none absolute -right-6 -bottom-6 h-[240px] w-[240px] rounded-full bg-[#06B6D4]/20 blur-[75px]" />

                    {/* Floating cards removed to prevent overlap */}
                    {/* (Intentionally left blank) */}

                    {/* Glow particles (static) */}

                   
                    <FloatCard
                      title="2+ Years Experience"
                      delay={0.65}
                      className="left-[10px] bottom-[-10px] w-[240px]"
                    />

                    {/* Glow particles (static) */}
                    <div className="pointer-events-none absolute inset-0">
                      {Array.from({ length: 14 }).map((_, i) => (
                        <span
                          key={`${i}-${String(i % 5)}`}
                          className="absolute h-2.5 w-2.5 rounded-full bg-white/70"
                          style={{
                            left: `${10 + i * 6}%`,
                            top: `${10 + (i % 5) * 16}%`,
                            opacity: 0.15,
                          }}
                        />
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

