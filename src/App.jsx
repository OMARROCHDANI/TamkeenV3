import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Mail } from 'lucide-react'

/* ─── Inline brand icons (lucide-react removed brand icons) ─── */
function LinkedinIcon({ size = 13, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function GithubIcon({ size = 13, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

/* ─── Data ─── */
const skills = [
  'React / Three.js',
  'Python / Django',
  'Web Design',
  'Figma / UI-UX',
  'Full Stack Dev',
  'Branding',
]

const projects = [
  {
    image: '/project-vantage.jpg',
    alt: 'Aston Martin Vantage UI — Figma Concept Study',
    title: 'Vantage UI',
    tag: 'Figma Concept',
  },
  {
    image: '/project-tamkeen.jpg',
    alt: 'Tamkeen Noir — Cinematic Landing Page',
    title: 'Tamkeen Noir',
    tag: 'Web Design',
  },
  {
    image: '/project-bihfih.png',
    alt: 'Bihfih — Appliance Repair Landing Page',
    title: 'Bihfih',
    tag: 'Landing Page',
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
function ProjectCard({ image, alt, title, tag }) {
  const [ref, visible] = useReveal()

  return (
    <section
      ref={ref}
      className={`group transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="bg-white rounded-3xl p-4 md:p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-[1.01]">
        <div className="rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 flex flex-col relative">
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
        </div>
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
      className={`animate-fade-in-up delay-${(index + 1) * 100} border border-gray-100 rounded-xl px-4 py-3 text-xs font-medium text-gray-600 flex items-center justify-center text-center hover:bg-gray-50 hover:border-gray-200 hover:-translate-y-0.5 transition-all duration-300 cursor-default`}
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
    <div className="flex flex-col md:flex-row h-screen bg-[#F7F7F7] font-sans text-gray-900 overflow-hidden">
      {/* ───── LEFT SIDEBAR ───── */}
      <aside className="w-full md:w-[380px] lg:w-[420px] flex-shrink-0 bg-white h-auto md:h-full md:overflow-y-auto flex flex-col justify-between border-r border-gray-100 p-8 lg:p-12">
        <div>
          {/* Header */}
          <div
            className={`flex items-center justify-between mb-16 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm ring-2 ring-white ring-offset-2 ring-offset-gray-50">
                OR
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Omar R.
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-medium text-emerald-700">
                Available
              </span>
            </div>
          </div>

          {/* Intro */}
          <div
            className={`mb-8 transition-all duration-700 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h1 className="text-[1.65rem] font-bold leading-tight mb-4 text-gray-900 tracking-tight">
              Building premium digital experiences that{' '}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                convert.
              </span>
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Full-stack developer & designer. Founder of TAMKEEN agency — I craft
              high-impact websites and digital products that elevate brands and
              drive real business results.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href="mailto:omarrochdani4life@gmail.com"
                id="start-project-btn"
                className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20 hover:-translate-y-0.5 active:translate-y-0"
              >
                Start Project <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/212620042642"
                target="_blank"
                rel="noopener noreferrer"
                id="lets-chat-btn"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                Let's Chat
              </a>
            </div>
          </div>

          {/* Skills */}
          <div
            className={`mb-12 transition-all duration-700 delay-400 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="text-sm font-bold text-gray-900 mb-4">
              What I work with...
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
          className={`flex items-center gap-5 text-xs font-medium text-gray-400 mt-8 pt-8 border-t border-gray-100 transition-all duration-700 delay-600 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a
            href="mailto:omarrochdani4life@gmail.com"
            id="email-link"
            className="hover:text-gray-900 transition-colors flex items-center gap-1.5 group/link"
          >
            <Mail
              size={13}
              className="group-hover/link:text-violet-500 transition-colors"
            />
            Email
          </a>
          <a
            href="https://linkedin.com/in/omarrochdani"
            target="_blank"
            rel="noopener noreferrer"
            id="linkedin-link"
            className="hover:text-gray-900 transition-colors flex items-center gap-1.5 group/link"
          >
            <LinkedinIcon
              size={13}
              className="group-hover/link:text-violet-500 transition-colors"
            />
            LinkedIn
          </a>
          <a
            href="https://github.com/omarrochdani"
            target="_blank"
            rel="noopener noreferrer"
            id="github-link"
            className="hover:text-gray-900 transition-colors flex items-center gap-1.5 group/link"
          >
            <GithubIcon
              size={13}
              className="group-hover/link:text-violet-500 transition-colors"
            />
            GitHub
          </a>
        </div>
      </aside>

      {/* ───── RIGHT MAIN CONTENT ───── */}
      <main className="flex-1 h-full overflow-y-auto p-4 md:p-8 lg:p-12 scroll-smooth custom-scrollbar">
        <div className="max-w-6xl mx-auto space-y-24 pb-24">
          {/* Interleave projects with testimonials */}
          {projects.map((project, i) => (
            <div key={i} className="space-y-24">
              <ProjectCard
                image={project.image}
                alt={project.alt}
                title={project.title}
                tag={project.tag}
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
