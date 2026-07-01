import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding bg-bg-alt/50">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Experience" subtitle="My professional journey" index={2} />

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent md:left-1/2 md:-translate-x-px" />

          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              className={`relative mb-12 flex flex-col md:mb-16 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="hidden w-1/2 md:block" />

              <div
                className={`w-full pl-12 md:w-1/2 md:pl-0 ${
                  i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                }`}
              >
                <div className="glass-strong group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 md:p-8">
                  <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-accent">
                    {job.period}
                  </span>
                  <h3 className="mt-4 font-heading text-3xl text-primary md:text-4xl">{job.role}</h3>
                  <p className="mt-1 font-body text-sm font-medium text-accent">{job.company}</p>

                  <ul className={`mt-6 space-y-3 ${i % 2 === 0 ? 'md:text-left' : ''}`}>
                    {job.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-secondary"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute left-4 top-8 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                <div className="h-3 w-3 rounded-full bg-accent ring-4 ring-accent/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
