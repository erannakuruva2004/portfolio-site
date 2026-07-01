import { motion } from 'framer-motion'
import { aboutContent, personalInfo } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import { slideLeft, slideRight } from '../utils/animations'

export default function About() {
  return (
    <section id="about" className="relative section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={aboutContent.title} index={1} />

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <motion.div
            className="relative lg:col-span-5"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="relative">
              <div className="glass-strong -rotate-2 overflow-hidden rounded-2xl p-2">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop"
                  alt={personalInfo.name}
                  className="aspect-[4/5] w-full rounded-xl object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 z-10 glass rotate-3 rounded-xl px-6 py-4 md:-right-8">
                <p className="font-heading text-3xl text-accent">3+</p>
                <p className="text-xs uppercase tracking-widest text-secondary">Years Learning</p>
              </div>
              <div className="absolute -left-4 -top-4 z-0 h-full w-full rounded-2xl border border-accent/20" />
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="space-y-6">
              {aboutContent.paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  className="font-body text-sm leading-relaxed text-secondary md:text-base lg:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { label: 'Location', value: personalInfo.location },
                { label: 'Email', value: personalInfo.email.split('@')[0] + '@...' },
                { label: 'Focus', value: 'Full Stack' },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-4 transition-transform hover:-translate-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-accent">{item.label}</p>
                  <p className="mt-1 text-sm text-primary">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
