import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import { staggerContainer, fadeUp } from '../utils/animations'

const categoryIcons = {
  Frontend: '⚡',
  Backend: '🔧',
  Tools: '🛠',
  Concepts: '💡',
}

export default function Skills() {
  return (
    <section id="skills" className="relative section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Skills" subtitle="Technologies and tools I work with" index={3} />

        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              className="glass-strong rounded-2xl p-6 md:p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: catIndex * 0.1, duration: 0.7 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {categoryIcons[category]}
                </span>
                <h3 className="font-heading text-2xl text-primary md:text-3xl">{category}</h3>
              </div>

              <motion.div
                className="flex flex-wrap gap-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={fadeUp}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="cursor-default rounded-xl border border-white/10 bg-card/80 px-4 py-2.5 text-sm text-primary transition-colors hover:border-accent/40 hover:bg-accent/10"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
