import { motion } from 'framer-motion'
import { useMousePosition, useIsDesktop } from '../hooks/useMousePosition'

export default function CustomCursor() {
  const { x, y } = useMousePosition()
  const isDesktop = useIsDesktop()

  if (!isDesktop) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent mix-blend-difference"
        animate={{ x, y }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9997] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40"
        animate={{ x, y }}
        transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.8 }}
      />
    </>
  )
}
