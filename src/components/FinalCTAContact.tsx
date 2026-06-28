import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'

const SectionLabel = ({ children }: { children: ReactNode }) => {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-[1px] w-10 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] opacity-80" />
      <span className="text-xs font-semibold tracking-[0.26em] text-white/70">{children}</span>
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

const ContactRow = ({
  href,
  icon,
  label,
  value,
}: {
  href: string
  icon: ReactNode
  label: string
  value: string
}) => {
  const isHttp = href.startsWith('http') || href.startsWith('mailto:')

  return (
    <motion.a
      href={href}
      target={isHttp ? '_blank' : undefined}
      rel={isHttp ? 'noreferrer' : undefined}
      className="group relative flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 transition"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
    >
      {/* border highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          border: '1px solid rgba(139,92,246,0.0)',
          boxShadow:
            '0 0 0 1px rgba(139,92,246,0.35), 0 0 40px rgba(139,92,246,.12)',
        }}
      />

      <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:border-white/20">
        {icon}
      </span>

      <span className="relative z-10 min-w-0 flex-1">
        <span className="block text-[12px] font-semibold tracking-[0.18em] text-white/60">{label}</span>
        <span className="block truncate pt-1 text-sm font-semibold text-white/90">{value}</span>
      </span>

      <motion.span
        aria-hidden
        className="relative z-10 ml-2 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition"
      >
        <motion.span
          className="text-white/70"
          initial={{ x: 0 }}
          whileHover={{ x: 6 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <ArrowRight className="h-4 w-4" />
        </motion.span>
      </motion.span>

      {/* accent border via overlay; keeps existing premium look while meeting hover requirement */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          border: '1px solid rgba(139,92,246,0.0)',
          boxShadow: '0 0 0 1px rgba(139,92,246,0.0)',
        }}
      />
    </motion.a>
  )
}

export default function FinalCTAContact() {




  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B1020] py-16 sm:py-20 md:py-28"
      aria-label="Final call to action and contact information"
    >
      {/* subtle gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[12%] top-[-20%] h-[520px] w-[520px] rounded-full bg-[#8B5CF6]/15 blur-[120px]" />
        <div className="absolute -right-[10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[#06B6D4]/12 blur-[110px]" />
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div className="flex flex-col gap-6 min-w-0">
            <SoftScrollReveal>
              <SectionLabel>CONTACT</SectionLabel>
            </SoftScrollReveal>

            <SoftScrollReveal delay={0.05}>
              <h2 className="text-[44px] leading-[1.04] font-bold tracking-[-1px] text-white md:text-[56px]">
               Let's Build Together
              </h2>
            </SoftScrollReveal>

            <SoftScrollReveal delay={0.1}>
              <p className="max-w-[560px] text-base leading-relaxed text-white/70 md:text-lg">
                
I build modern, responsive and
high-performance web experiences.
                <br />
                <br />
                Available for freelance projects, internships and long-term opportunities.
              </p>
            </SoftScrollReveal>

           

            <SoftScrollReveal delay={0.18}>
              <div className="flex flex-wrap gap-3">
              

                <motion.a
                  href={
                    'https://wa.me/201013556821?text=' +
                    encodeURIComponent('Hi! Let’s talk about a project. I found your portfolio and want to collaborate.')
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#0B1020]/10 px-6 py-3 text-sm font-semibold text-white/90 transition"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      border: '1px solid rgba(255,255,255,0.08)',
                      boxShadow: '0 0 40px rgba(139,92,246,.10)',
                    }}
                  />
                  Let's Talk
                  <ArrowRight className="h-4 w-4 text-[#8B5CF6] transition group-hover:translate-x-0.5" />
                </motion.a>
              </div>
            </SoftScrollReveal>
          </div>

          {/* Right: premium information panel */}
          <motion.div
            className="relative rounded-[24px] border border-white/10 bg-[#0B1020]/30 p-5 md:p-6 min-w-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 pointer-events-none rounded-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold tracking-[0.26em] text-white/60">CONTACT DETAILS</div>
                
              </div>
              <div className="hidden sm:block rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2">
                <div className="text-xs text-white/60">Fast response</div>
                <div className="mt-1 text-sm font-semibold text-white/90">Usually within 24h</div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 w-full">
              <ContactRow
                href="mailto:moyoussef2192004@gmail.com"
                icon={<Mail className="h-4 w-4 text-[#06B6D4]" />}
                label="EMAIL"
                value="moyoussef2192004@gmail.com"
              />

              <ContactRow
                href="https://www.linkedin.com/in/muhammed-youssef?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                icon={<FaLinkedin className="h-4 w-4 text-[#8B5CF6]" />}
                label="LINKEDIN"
                value="Muhammed Youssef"
              />

              <ContactRow
                href="https://github.com/my7422362-wq"
                icon={<FaGithub className="h-4 w-4 text-white/80" />}
                label="GITHUB"
                value="github.com/my7422362-wq"
              />

              <ContactRow
                href="https://wa.me/201013556821"
                icon={<FaWhatsapp className="h-4 w-4 text-[#06B6D4]" />}
                label="WHATSAPP"
                value="+20 1013556821"
              />
            </div>

            <motion.div
              className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
            >
              <span className="text-sm font-semibold text-white/90">Let's make it real.</span>
              <span className="text-xs font-semibold tracking-[0.18em] text-white/50">READY WHEN YOU ARE</span>
            </motion.div>
          </motion.div>
        </div>

        {/* closing statement */}
        <SoftScrollReveal delay={0.22}>
          <div className="mt-12 flex flex-col items-center gap-3">
            <div className="h-[1px] w-full max-w-3xl bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
            <p className="text-center text-base leading-relaxed text-white/60 md:text-lg">
              Great products begin with great conversations.
            </p>
            
          </div>
        </SoftScrollReveal>
      </div>
    </section>
  )
}

