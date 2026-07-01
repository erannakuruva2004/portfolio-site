import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { featuredProject } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="relative section-padding bg-bg-alt/50">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Featured Project" subtitle="Showcasing my best work" index={4} />

        <div className="grid items-center gap-12 lg:grid-cols-12">
          <motion.div
            className="relative lg:col-span-7"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="group relative">
              <div className="absolute -left-4 -top-4 z-0 h-full w-full rounded-2xl border border-accent/20" />
              <motion.div
                className="relative z-10 rotate-1 overflow-hidden rounded-2xl glass-strong p-2 transition-transform duration-500 group-hover:rotate-0"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="aspect-video w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-4 z-20 -rotate-3 glass overflow-hidden rounded-xl p-1 md:-right-8">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80&auto=format&fit=crop"
                  alt="Project detail"
                  className="h-24 w-32 rounded-lg object-cover md:h-32 md:w-44"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              {featuredProject.role}
            </span>
            <h3 className="mt-3 font-heading text-3xl leading-tight text-primary md:text-4xl lg:text-5xl">
              {featuredProject.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-secondary md:text-base">
              {featuredProject.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {featuredProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-card px-3 py-1 text-xs text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-2">
              {featuredProject.responsibilities.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-secondary">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-primary"
              >
                <FaGithub size={16} />
                GitHub
              </a>
              <a
                href={featuredProject.liveDemo}
                className="btn-glow flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-primary"
              >
                <FaExternalLinkAlt size={14} />
                Live Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
