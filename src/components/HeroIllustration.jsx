import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useParallax } from '../hooks/useParallax'

export default function HeroIllustration() {
  const containerRef = useRef(null)
  useParallax(containerRef, 0.15)

  return (
    <motion.div
      ref={containerRef}
      className="relative h-full w-full min-h-[320px] md:min-h-[480px]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute -right-4 top-8 z-10 glass-strong rotate-3 overflow-hidden rounded-2xl p-1 shadow-2xl md:-right-8">
        <div className="relative h-48 w-56 overflow-hidden rounded-xl md:h-64 md:w-72">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80&auto=format&fit=crop"
            alt="Developer workspace"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
        </div>
      </div>

      <div className="absolute left-0 top-24 z-20 -rotate-6 glass overflow-hidden rounded-2xl p-4 shadow-xl md:top-32">
        <pre className="font-mono text-[10px] leading-relaxed text-accent md:text-xs">
          <code>{`const dev = {
  name: "Eranna",
  role: "Developer",
  stack: ["React", "Java"],
  passion: true
};`}</code>
        </pre>
      </div>

      <div className="absolute bottom-8 right-12 z-30 rotate-6 glass-strong rounded-2xl p-5 md:bottom-16 md:right-20">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
            <span className="text-lg text-accent">{'</>'}</span>
          </div>
          <div>
            <p className="font-heading text-lg text-primary">CREATIVE</p>
            <p className="text-xs text-secondary">Developer</p>
          </div>
        </div>
      </div>

      <div className="absolute left-1/4 top-1/2 z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[80px]" />
      <div className="absolute bottom-0 right-0 z-0 h-48 w-48 rounded-full bg-accent/5 blur-[60px]" />

      <svg
        className="absolute inset-0 z-[5] h-full w-full opacity-30"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <motion.circle
          cx="200"
          cy="200"
          r="120"
          stroke="rgba(255,106,0,0.3)"
          strokeWidth="1"
          strokeDasharray="8 8"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '200px 200px' }}
        />
        <motion.rect
          x="140"
          y="140"
          width="120"
          height="120"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '200px 200px' }}
        />
      </svg>
    </motion.div>
  )
}
