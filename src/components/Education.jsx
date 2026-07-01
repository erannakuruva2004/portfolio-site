import { motion } from 'framer-motion'
import { education } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="relative section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Education" index={5} />

        <motion.div
          className="glass-strong mx-auto max-w-2xl rounded-2xl p-8 text-center md:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -6 }}
        >
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent">
            {education.year}
          </span>
          <h3 className="mt-6 font-heading text-4xl text-primary md:text-5xl">{education.degree}</h3>
          <p className="mt-2 font-body text-lg text-accent">{education.field}</p>
          <p className="mt-4 text-sm text-secondary">{education.institution}</p>
        </motion.div>
      </div>
    </section>
  )
}
