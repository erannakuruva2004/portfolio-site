import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowDown, HiDownload } from 'react-icons/hi'
import { personalInfo } from '../data/portfolio'
import HeroIllustration from './HeroIllustration'

function TypingText({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    let interval
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        if (i <= text.length) {
          setDisplayed(text.slice(0, i))
          i++
        } else {
          setDone(true)
          clearInterval(interval)
        }
      }, 45)
    }, delay)

    return () => {
      clearTimeout(timeout)
      if (interval) clearInterval(interval)
    }
  }, [text, delay])

  return (
    <span>
      {displayed}
      {!done && (
        <motion.span
          className="inline-block w-[3px] h-[0.9em] bg-accent ml-1 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />
      )}
    </span>
  )
}

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden section-padding pt-32 md:pt-40"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="mb-4 font-body text-xs font-medium uppercase tracking-[0.35em] text-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
          >
            {personalInfo.role.split('|')[0].trim()}
          </motion.p>

          <h1 className="font-heading text-[clamp(3rem,10vw,7rem)] leading-[0.95] text-primary">
            <TypingText text={personalInfo.tagline} delay={2400} />
          </h1>

          <motion.p
            className="mt-6 max-w-lg font-body text-sm leading-relaxed text-secondary md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.8 }}
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
          >
            <button
              type="button"
              onClick={scrollToProjects}
              className="btn-glow rounded-full border border-accent/30 bg-accent/10 px-7 py-3 text-xs font-semibold uppercase tracking-widest text-primary"
            >
              View Projects
            </button>
            <Link
              to="/resume"
              className="btn-glow flex items-center gap-2 rounded-full border border-white/10 px-7 py-3 text-xs font-semibold uppercase tracking-widest text-primary"
            >
              <HiDownload size={16} />
              Download Resume
            </Link>
            <button
              type="button"
              onClick={scrollToContact}
              className="btn-glow rounded-full border border-white/10 px-7 py-3 text-xs font-semibold uppercase tracking-widest text-primary"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div
            className="mt-16 flex items-center gap-3 text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.8 }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <HiArrowDown className="text-accent" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroIllustration />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
