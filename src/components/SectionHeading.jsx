import { motion } from 'framer-motion'

export default function SectionHeading({ title, subtitle, align = 'left', index }) {
  return (
    <motion.div
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {index && (
        <span className="mb-2 block font-body text-xs font-medium uppercase tracking-[0.3em] text-accent">
          {String(index).padStart(2, '0')}
        </span>
      )}
      <h2 className="font-heading text-5xl leading-none text-primary md:text-7xl lg:text-8xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-xl font-body text-sm text-secondary md:text-base">{subtitle}</p>
      )}
    </motion.div>
  )
}
