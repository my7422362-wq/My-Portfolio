import { useEffect, useMemo, useState } from 'react'

import { Menu, X } from 'lucide-react'

type SectionId = 'about' | 'projects' | 'skills' | 'contact'

type NavItem = {
  id: SectionId
  label: string
}

const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const TOP_PX = 24
const LOGO_PX = 52
const CAPSULE_HEIGHT_PX = 60
const LEFT_RIGHT_PADDING_PX = 24
const LINK_GAP_PX = 40

// Offset chosen to keep the section title/content visible under the fixed navbar.
const SCROLL_OFFSET_PX = TOP_PX + CAPSULE_HEIGHT_PX + 12

function scrollToSection(id: SectionId) {
  const el = document.getElementById(id)
  if (!el) return

  const y = window.scrollY + el.getBoundingClientRect().top - SCROLL_OFFSET_PX
  window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
}

function useActiveSection(sectionIds: SectionId[]) {
  const [activeId, setActiveId] = useState<SectionId | null>(null)

  // Ensure: no nav item is active on initial load until scroll spy updates.
  // (We only ever set this state from the IntersectionObserver.)

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting section.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        if (visible[0]?.target?.id) {
          const next = visible[0].target.id as SectionId
          setActiveId(next)
        }
      },
      {
        root: null,
        // Keep it subtle: activate when the section is around the top third.
        rootMargin: '-20% 0px -65% 0px',
        threshold: [0.05, 0.1, 0.2, 0.35, 0.5, 0.75],
      },
    )

    for (const el of elements) observer.observe(el)

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}

function DesktopNav({ activeId, onSelect }: { activeId: SectionId | null; onSelect: (id: SectionId) => void }): React.JSX.Element {
  return (
    <div
      className="relative hidden md:flex items-center"

      style={{ height: CAPSULE_HEIGHT_PX }}
      aria-label="Primary navigation"
    >
      <div
        className="flex h-[60px] items-center justify-between gap-0 rounded-full border"
        style={{
          background: 'rgba(15,23,42,.65)',
          borderColor: 'rgba(255,255,255,.08)',
          paddingLeft: LEFT_RIGHT_PADDING_PX,
          paddingRight: LEFT_RIGHT_PADDING_PX,
          height: CAPSULE_HEIGHT_PX,
        }}
      >
        <ul className="flex items-center" style={{ gap: LINK_GAP_PX }} role="list">
          {NAV_ITEMS.map((item) => {
            const isActive = item.id === activeId
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => onSelect(item.id)}
                  className="relative inline-flex items-center justify-center rounded-full px-2 text-sm font-semibold"
                  style={{ color: '#FFFFFF' }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {/* Hover/active rounded background behind the text */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 transition-opacity duration-200"
                    style={{
                      background: 'rgba(139,92,246,.17)',
                      boxShadow: '0 0 18px rgba(139,92,246,0.18)',
                    }}
                  />

                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -z-10 rounded-full transition-opacity duration-200"
                      style={{
                        background: 'rgba(139,92,246,.20)',
                        opacity: isActive ? 1 : 0,
                      }}
                    />

                  <span className="relative z-10">
                    {item.label}
                  </span>

                  {/* White hover background (requested) */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 transition-opacity duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                    }}
                  />

                  {/* Set hover opacity via CSS below */}
                </button>
              </li>
            )
          })}
        </ul>

        {/* spacer to keep proportions similar; capsule is already flex */}
        <div aria-hidden className="w-0" />
      </div>

      {/* Hover state: use CSS to turn on the first background span on hover */}
      <style>
        {`
          /* Only affect buttons inside the capsule */
          .relative.hidden.items-center ul li button:hover > span[aria-hidden]:nth-child(1) {
            opacity: 1;
          }
          .relative.hidden.items-center ul li button:hover > span[aria-hidden]:nth-child(2) {
            opacity: 1;
          }
        `}
      </style>
    </div>
  )
}

function MobileMenu({
  // activeId is controlled by scroll spy; it should be able to be null initially.
  // Mobile menu does not rely on an active value for visibility—only for the subtle highlight.

  activeId,
  mobileOpen,
  onToggle,
  onSelect,
}: {
  activeId: SectionId | null
  mobileOpen: boolean
  onToggle: () => void
  onSelect: (id: SectionId) => void
}) {
  return (
    <div className="relative md:hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
        className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-full border"
        style={{
          background: 'rgba(15,23,42,.65)',
          borderColor: 'rgba(255,255,255,.08)',
          color: '#FFFFFF',
        }}
      >
        {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      {mobileOpen ? (
        <div
          className="absolute right-0 mt-3 w-[min(300px,86vw)] overflow-hidden rounded-3xl border backdrop-blur"
          style={{
            background: 'rgba(15,23,42,.75)',
            borderColor: 'rgba(255,255,255,.08)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.55)',
            transformOrigin: 'top right',
            animation: 'mobileMenuSlideIn 280ms easeOut',
          }}
          role="dialog"
          aria-label="Mobile navigation"
        >
          <style>{`
            @keyframes mobileMenuSlideIn {
              from { opacity: 0; transform: translateY(-6px) scale(0.98); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}</style>
          <ul className="flex flex-col gap-[18px] px-6 pb-6 pt-6">

            {NAV_ITEMS.map((item) => {
              const isActive = item.id === activeId
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onSelect(item.id)}
                    className="relative flex w-full items-center justify-start gap-0 rounded-[14px] border border-white/0 px-4 py-[18px] text-[18px] font-[600]"
                    style={{
                      color: '#FFFFFF',
                      letterSpacing: 'normal',
                      transition: '200ms ease',
                    }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-[14px] opacity-0 transition-opacity duration-200"
                      style={{
                        background: 'rgba(139,92,246,0.16)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxSizing: 'border-box',
                        transition: 'opacity 200ms ease',
                      }}
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-200"
                      style={{
                        background: 'rgba(139,92,246,.20)',
                        opacity: isActive ? 1 : 0,
                      }}
                    />
                    <span className="relative z-10">{item.label}</span>
                    <style>{`
                      button:hover > span[aria-hidden] { opacity: 1; }
                    `}</style>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default function Navbar() {
  const navItems = useMemo(() => NAV_ITEMS, [])
  const activeId = useActiveSection(navItems.map((n) => n.id))
  const [mobileOpen, setMobileOpen] = useState(false)

  // Visibility behavior:
  // - visible on initial load
  // - hides immediately once user scrolls down a bit
  // - stays hidden while scrolling (even upward)
  // - shows again only when returning to the very top
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    let rafId: number | null = null

    const onScroll = () => {
      if (rafId != null) return

      rafId = window.requestAnimationFrame(() => {
        rafId = null
        const y = window.scrollY || 0

        // "Very top" threshold: within first few pixels.
        if (y <= TOP_PX) {
          setIsHidden(false)
          return
        }

        // Scrolled down: hide (once hidden, we never show again until the top condition above).
        setIsHidden(true)
      })
    }

    // Run once in case the page loads scrolled.
    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      if (rafId != null) window.cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  const onSelect = (id: SectionId) => {
    setMobileOpen(false)
    scrollToSection(id)
  }

  return (
    <header
      className="fixed left-1/2 top-[24px] z-50 -translate-x-1/2"
      style={{
        width: 'min(1150px, 90vw)',
        opacity: isHidden ? 0 : 1,
        transform: `translateY(${isHidden ? '-12px' : '0px'})`,
        transition: 'opacity 240ms ease, transform 240ms ease',
        pointerEvents: isHidden ? 'none' : 'auto',
      }}
    >
      <div className="flex items-center justify-between">

        {/* Left: 52x52 rounded-square logo */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            onSelect('about')
          }}
          aria-label="Go to About"
          className="relative inline-flex items-center justify-center rounded-xl"
          style={{
            width: LOGO_PX,
            height: LOGO_PX,
            border: '1px solid rgba(255,255,255,.08)',
            background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.45)',
          }}
        >
          <span className="text-[18px] font-bold tracking-[-0.4px]" style={{ color: '#FFFFFF' }}>
            M
          </span>
        </a>

        {/* Right: 60px capsule navigation (desktop) */}
        <DesktopNav activeId={activeId} onSelect={onSelect} />

        {/* Mobile hamburger */}
        <MobileMenu
          activeId={activeId}
          mobileOpen={mobileOpen}
          onToggle={() => setMobileOpen((v) => !v)}
          onSelect={onSelect}
        />
      </div>
    </header>
  )
}

