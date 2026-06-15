import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Mail } from 'lucide-react'

/* ─── Inline brand icons ─── */
function WhatsAppIcon({ size = 13, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}

function InstagramIcon({ size = 13, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  )
}

/* ─── Data ─── */
const skills = [
  'Strategic Web Design',
  'Conversion-Focused Websites',
  'Brand Identity & Positioning',
  'UX Architecture & Structure',
  'Custom Web Development',
  'Digital Authority Systems',
]

const projects = [
  {
    image: '/project-vantage.jpg',
    alt: 'Aston Martin Vantage UI — Figma Concept Study',
    title: 'Vantage UI',
    tag: 'Figma Concept',
    link: 'https://www.instagram.com/p/DXr4saTDNd-/',
  },
  {
    image: '/project-tamkeen.jpg',
    alt: 'Tamkeen Noir — Cinematic Landing Page',
    title: 'Tamkeen Noir',
    tag: 'Web Design',
    link: 'https://tamkeennoir.netlify.app',
  },
  {
    image: '/project-bihfih.png',
    alt: 'Bihfih — Appliance Repair Landing Page',
    title: 'Bihfih',
    tag: 'Landing Page',
    link: 'https://bihfih-electromenager.com/',
  },
]

const testimonials = [
  {
    text: 'A cinematic landing experience with premium',
    highlight: 'animation sequencing',
    suffix: 'and high visual impact.',
  },
  {
    text: 'Conversion-focused UX with clear structure,',
    highlight: 'strong CTAs,',
    suffix: 'and WhatsApp-based booking.',
  },
]

/* ─── Scroll Reveal Hook ─── */
function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

/* ─── Project Card ─── */
function ProjectCard({ image, alt, title, tag, link }) {
  const [ref, visible] = useReveal()

  return (
    <section
      ref={ref}
      className={`group transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="bg-white rounded-3xl p-4 md:p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-[1.01]">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 flex flex-col relative block cursor-pointer"
        >
          {/* Browser mockup bar */}
          <div className="h-10 bg-gray-900 flex items-center px-4 gap-2 flex-shrink-0">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
            </div>
            <div className="flex-1 mx-8">
              <div className="bg-gray-800 rounded-md h-5 max-w-xs mx-auto"></div>
            </div>
          </div>
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </a>
        {/* Project label */}
        <div className="flex items-center justify-between mt-5 px-1">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <span className="text-xs font-medium text-gray-400 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full">
            {tag}
          </span>
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonial Block ─── */
function Testimonial({ text, highlight, suffix }) {
  const [ref, visible] = useReveal()

  return (
    <section
      ref={ref}
      className={`text-center px-4 max-w-2xl mx-auto transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <p className="text-2xl md:text-3xl font-medium text-gray-400 leading-tight">
        {text}{' '}
        <span className="text-gray-900 font-semibold">{highlight}</span>{' '}
        {suffix}
      </p>
    </section>
  )
}

/* ─── Skill Badge ─── */
function SkillBadge({ label, index }) {
  return (
    <div
      className={`animate-fade-in-up delay-${(index + 1) * 100} border border-gray-100 rounded-lg px-3 py-2 text-xs font-medium text-gray-600 flex items-center justify-center text-center hover:bg-gray-50 hover:border-gray-200 hover:-translate-y-0.5 transition-all duration-300 cursor-default`}
    >
      {label}
    </div>
  )
}

/* ─── Main App ─── */
export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen bg-[#F7F7F7] font-sans text-gray-900 overflow-y-auto md:overflow-hidden">
      {/* ───── LEFT SIDEBAR ───── */}
      <aside className="w-full md:w-[380px] lg:w-[400px] flex-shrink-0 bg-white h-auto md:h-full md:overflow-y-auto flex flex-col justify-between border-r border-gray-100 p-6 lg:p-8 custom-scrollbar">
        <div>
          {/* Header */}
          <div
            className={`flex items-center justify-between mb-8 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src="/Tamkeen_Log.jpeg"
                alt="Tamkeen Logo"
                className="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-white ring-offset-2 ring-offset-gray-50"
              />
              <span className="font-display font-bold text-lg tracking-tight">
                tamkeen.
              </span>
            </div>
          </div>

          {/* Intro */}
          <div
            className={`mb-6 transition-all duration-700 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h1 className="text-2xl font-bold leading-tight mb-3 text-gray-900 tracking-tight">
              Values-First{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                WEB AGENCY.
              </span>
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              We build strategic digital foundations for Muslim brands that care about halal income, clarity, and long-term authority.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              <a
                href="https://wa.me/212785628859"
                target="_blank"
                rel="noopener noreferrer"
                id="start-project-btn"
                className="flex items-center gap-1.5 bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20 hover:-translate-y-0.5 active:translate-y-0"
              >
                Start Project <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Skills / Tech */}
          <div
            className={`mb-6 transition-all duration-700 delay-400 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Our Capabilities
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <SkillBadge key={skill} label={skill} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-gray-400 mt-6 pt-6 border-t border-gray-100 transition-all duration-700 delay-600 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a
            href="https://wa.me/212785628859"
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-link"
            className="hover:text-gray-900 transition-colors flex items-center gap-1.5 group/link"
          >
            <WhatsAppIcon
              size={13}
              className="group-hover/link:text-emerald-500 transition-colors"
            />
            WhatsApp Inquiry
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors flex items-center gap-1.5 group/link"
          >
            <InstagramIcon
              size={13}
              className="group-hover/link:text-emerald-500 transition-colors"
            />
            Instagram
          </a>
        </div>
      </aside>

      {/* ───── RIGHT MAIN CONTENT ───── */}
      <main className="flex-1 h-auto md:h-full md:overflow-y-auto p-4 md:p-8 lg:p-12 scroll-smooth custom-scrollbar">
        <div className="max-w-6xl mx-auto space-y-24 pb-24">
          {/* Interleave projects with testimonials */}
          {projects.map((project, i) => (
            <div key={i} className="space-y-24">
              <ProjectCard
                image={project.image}
                alt={project.alt}
                title={project.title}
                tag={project.tag}
                link={project.link}
              />
              {testimonials[i] && (
                <Testimonial
                  text={testimonials[i].text}
                  highlight={testimonials[i].highlight}
                  suffix={testimonials[i].suffix}
                />
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
