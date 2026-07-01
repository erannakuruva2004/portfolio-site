import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center md:text-left">
            <p className="font-heading text-2xl text-primary">{personalInfo.name}</p>
            <p className="mt-1 text-sm text-secondary">Software Developer</p>
          </div>

          <p className="text-xs text-secondary">
            Built with React + Tailwind CSS
          </p>

          <p className="text-xs text-secondary/60">
            &copy; {year} {personalInfo.name.split(' ')[0]}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
