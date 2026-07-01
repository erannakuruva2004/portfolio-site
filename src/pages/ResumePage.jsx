import { motion } from 'framer-motion'
import { HiDownload } from 'react-icons/hi'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  personalInfo,
  aboutContent,
  experience,
  skills,
  featuredProject,
  education,
} from '../data/portfolio'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'

export default function ResumePage() {
  const handlePrint = () => window.print()

  return (
    <PageTransition>
      <section className="section-padding pt-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="font-heading text-5xl text-primary md:text-6xl">Resume</h1>
              <p className="mt-2 text-secondary">{personalInfo.role}</p>
            </div>
            <button
              type="button"
              onClick={handlePrint}
              className="btn-glow flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest"
            >
              <HiDownload size={16} />
              Download / Print
            </button>
          </div>

          <motion.div
            className="glass-strong space-y-10 rounded-2xl p-8 md:p-12 print:border-0 print:bg-white print:text-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <header className="border-b border-white/10 pb-8 print:border-gray-200">
              <h2 className="font-heading text-4xl text-primary print:text-black">{personalInfo.name}</h2>
              <p className="mt-2 text-accent print:text-orange-600">{personalInfo.role}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-secondary print:text-gray-600">
                <span className="flex items-center gap-2">
                  <FaEnvelope className="text-accent" /> {personalInfo.email}
                </span>
                <span className="flex items-center gap-2">
                  <FaPhone className="text-accent" /> {personalInfo.phone}
                </span>
                <span>{personalInfo.location}</span>
              </div>
            </header>

            <section>
              <h3 className="font-heading text-2xl text-primary print:text-black">About</h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary print:text-gray-700">
                {aboutContent.paragraphs.join(' ')}
              </p>
            </section>

            <section>
              <h3 className="font-heading text-2xl text-primary print:text-black">Experience</h3>
              {experience.map((job) => (
                <div key={job.id} className="mt-4 border-l-2 border-accent/30 pl-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-semibold text-primary print:text-black">{job.role}</h4>
                    <span className="text-xs text-accent print:text-orange-600">{job.period}</span>
                  </div>
                  <p className="text-sm text-secondary print:text-gray-600">{job.company}</p>
                  <ul className="mt-2 space-y-1">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="text-sm text-secondary print:text-gray-700">
                        • {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section>
              <h3 className="font-heading text-2xl text-primary print:text-black">Skills</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {Object.entries(skills).map(([cat, items]) => (
                  <div key={cat}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent print:text-orange-600">
                      {cat}
                    </p>
                    <p className="mt-1 text-sm text-secondary print:text-gray-700">{items.join(', ')}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="font-heading text-2xl text-primary print:text-black">Featured Project</h3>
              <div className="mt-4">
                <h4 className="font-semibold text-primary print:text-black">{featuredProject.title}</h4>
                <p className="text-sm text-accent print:text-orange-600">{featuredProject.role}</p>
                <p className="mt-2 text-sm text-secondary print:text-gray-700">{featuredProject.description}</p>
                <p className="mt-2 text-xs text-secondary print:text-gray-600">
                  Tech: {featuredProject.techStack.join(', ')}
                </p>
              </div>
            </section>

            <section>
              <h3 className="font-heading text-2xl text-primary print:text-black">Education</h3>
              <div className="mt-4">
                <p className="font-semibold text-primary print:text-black">
                  {education.degree} — {education.field}
                </p>
                <p className="text-sm text-secondary print:text-gray-700">{education.institution}</p>
                <p className="text-xs text-accent print:text-orange-600">{education.year}</p>
              </div>
            </section>

            <section className="flex gap-4 print:hidden">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-secondary hover:text-accent"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-secondary hover:text-accent"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </section>
          </motion.div>
        </div>
      </section>
      <Footer />
    </PageTransition>
  )
}
