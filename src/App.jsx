import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
  FaDownload,
} from 'react-icons/fa'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
//  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const skillGroups = [
  {
    domain: 'Frontend',
    items: [
      { name: 'Javascript', level: 80 },
      { name: 'React Js', level: 40 }
    ],
  },
  {
    domain: 'Backend',
    items: [
      { name: 'PHP', level: 92 },
      { name: 'Python', level: 60 },
      { name: 'Database : MySql', level: 90 },
      { name: 'Node.js', level: 20 },
    ],
  },
  // {
  //   domain: 'Cloud / DevOps',
  //   items: [
  //     { name: 'AWS', level: 90 },
  //     { name: 'Docker / Kubernetes', level: 84 },
  //     { name: 'Terraform', level: 80 },
  //   ],
  // },
  {
    domain: 'Tools',
    items: [
      { name: 'Git & CI/CD', level: 60 },
      { name: 'Jest / Testing', level: 30 },
    ],
  },
]

const experiences = [
  {
    company: 'LTM',
    role: 'Senior Software Engineering Specialist',
    dates: 'Jun,2021 — Present',
    highlights: [
      'Led a 6-engineer team to launch a global SaaS platform used by 120k+ monthly active users.',
      'Reduced core page load time by 42% through architecture and caching strategy improvements.',
      'Built event-driven workflows that cut infrastructure costs by 28% while preserving throughput.',
    ],
  },
  {
    company: 'GNap Services, Client : Nokia Networks',
    role: 'Software Developer',
    dates: 'June,2018 — May,2021',
    highlights: [
      'Directed cross-functional delivery for cloud-native products across finance and logistics.',
      'Scaled engineering output by implementing design systems and automated release pipelines.',
      'Improved deployment frequency by 3× and reduced incident recovery time by 60%.',
    ],
  },
  {
    company: 'Glocom E-Commerce',
    role: 'Senior Web Developer',
    dates: 'Oct,2015 — May,2018',
    highlights: [
      'Delivered polished web applications for enterprise clients in healthcare and retail.',
      'Transformed legacy workflows into modern APIs that accelerated onboarding by 35%.',
    ],
  },
]

const projects = [];
// [
//   {
//     name: 'Velocity CRM',
//     stack: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
//     description:
//       'A high-performance CRM platform with insights dashboards, workflow automation, and sales orchestration for fast-growing teams.',
//     github: 'https://github.com/',
//     live: '#projects',
//   },
//   {
//     name: 'Atlas Insights',
//     stack: ['Next.js', 'GraphQL', 'MongoDB', 'Vercel'],
//     description:
//       'A data intelligence suite that meshes analytics, observability, and predictive models for enterprise decision-makers.',
//     github: 'https://github.com/',
//     live: '#projects',
//   },
//   {
//     name: 'PulseOps',
//     stack: ['React', 'TypeScript', 'Kubernetes', 'Terraform'],
//     description:
//       'A production-grade developer operations platform with self-service pipelines, monitoring, and secure release gates.',
//     github: 'https://github.com/',
//     live: '#projects',
//   },
// ]

const App = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const observer = useRef(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
    window.setTimeout(() => setSubmitted(false), 4000)
  }

  useEffect(() => {
    const sectionIds = navLinks.map(link => link.id)
    
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    observer.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    })

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.current.observe(element)
      }
    })

    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [])

  return (
    <div className="bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            UDHAYAVANAN
          </a>
          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className={`transition hover:text-cyan-300 ${
                  activeSection === link.id ? 'text-cyan-400 font-medium' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
          >
            Contact
          </a>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <div className="bg-spot absolute inset-x-0 top-0 h-80 opacity-80"></div>

        <section id="hero" className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl flex-col justify-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <span className="text-sm uppercase tracking-[0.4em] text-cyan-400">
              Senior Software Engineer · 10 Years
            </span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              I architect scalable systems and ship products that matter.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I design and deliver elegant digital experiences for marketplaces, finance, and enterprise teams — leading technical strategy, mentoring engineers, and driving measurable growth.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                style={{display:'none'}} className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-cyan-300"
              >
                View Work
              </a>
              <a
                href="/UdhayavananS.pdf"
                download
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <FaDownload className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-10 shadow-glow">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">About</p>
              <h2 className="mt-6 text-3xl font-semibold text-white">Confident engineering, delivered with clarity.</h2>
              <p className="mt-6 text-slate-300 leading-8">
                I partner with product and leadership teams to transform strategic initiatives into stable, delightful experiences. My work spans SaaS, enterprise automation, and cloud-native infrastructure, with a focus on performance, observability, and developer productivity.
              </p>
              <p className="mt-4 text-slate-300 leading-8">
                As a mentor and technical lead, I help engineering teams move faster by simplifying complex systems, defining strong APIs, and fostering a culture of ownership and craftsmanship.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-10 shadow-glow">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Value</p>
              <ul className="mt-8 space-y-4 text-slate-300">
                <li className="rounded-3xl bg-slate-950/80 p-5 ring-1 ring-slate-700/70">
                  <span className="block text-sm uppercase tracking-[0.35em] text-slate-400">Leadership & Strategy</span>
                  <p className="mt-2 text-base leading-7">
                    Aligning product strategy with technical execution, and guiding teams through architecture, delivery, and adoption.
                  </p>
                </li>
                <li className="rounded-3xl bg-slate-950/80 p-5 ring-1 ring-slate-700/70">
                  <span className="block text-sm uppercase tracking-[0.35em] text-slate-400">Technical Excellence</span>
                  <p className="mt-2 text-base leading-7">
                    Shipping resilient, maintainable systems on modern stacks and ensuring every release raises the bar.
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-10"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Skills</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Expertise grouped by domain.</h2>
              </div>
              <p className="max-w-2xl text-slate-300">
                Modern engineering capabilities for product, infrastructure, and growth — powered by measurable delivery and disciplined execution.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.domain} className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                    {group.domain}
                  </h3>
                  <div className="mt-6 space-y-5">
                    {group.items.map((item) => (
                      <div key={item.name}>
                        <div className="flex items-center justify-between text-sm text-slate-300">
                          <span>{item.name}</span>
                          <span>{item.level}%</span>
                        </div>
                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1.1, ease: 'easeOut' }}
                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-10"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Experience</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Proven impact through leadership and delivery.</h2>
            </div>
            <div className="relative border-l border-slate-800/90 pl-8">
              {experiences.map((experience, index) => (
                <div key={experience.company} className="relative mb-12">
                  <span className="absolute left-[-1.55rem] top-2 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400 bg-slate-950 text-xs text-cyan-400">
                    {index + 1}
                  </span>
                  <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8 shadow-glow">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-lg font-semibold text-white">{experience.role}</p>
                        <p className="mt-1 text-sm text-slate-400">{experience.company}</p>
                      </div>
                      <span className="rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-400">
                        {experience.dates}
                      </span>
                    </div>
                    <ul className="mt-6 space-y-3 text-slate-300">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight} className="list-disc pl-4 leading-7">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20" style={{ display: 'none' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-10"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Projects</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Selected work with measurable outcomes.</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.name} className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-8 shadow-glow">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                    <FaExternalLinkAlt className="text-slate-500" />
                  </div>
                  <p className="text-slate-300 leading-7">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.stack.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-700/80 bg-slate-950/90 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/90 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400/10"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.live}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/90 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400"
                    >
                      Live
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-10 shadow-glow">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Contact</p>
              <h2 className="mt-6 text-3xl font-semibold text-white">Ready to build the next great product?</h2>
              <p className="mt-6 text-slate-300 leading-8">
                I’m available for senior engineering roles, advisory partnerships, and product-focused teams that want to move faster with strong architecture and execution.
              </p>
              <div className="mt-8 space-y-6 text-slate-300">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Email</p>
                  <a href="mailto:udhayavana@gmail.com" className="mt-2 block text-lg text-cyan-300">
                    udhayavana@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Networks</p>
                  <div className="mt-4 flex items-center gap-4 text-slate-300">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">
                      <FaLinkedin className="h-6 w-6" />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">
                      <FaGithub className="h-6 w-6" />
                    </a>
                    <a href="mailto:udhayavana@gmail.com" className="transition hover:text-cyan-300">
                      <FaEnvelope className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-10 shadow-glow">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Say hello</p>
              <h3 className="mt-6 text-2xl font-semibold text-white">Let’s start something meaningful.</h3>
              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm font-medium text-slate-300" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your next project..."
                    required
                  />
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Send Message
                  </button>
                  {submitted && (
                    <span className="text-sm text-cyan-300">Message ready for follow-up.</span>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

export default App
