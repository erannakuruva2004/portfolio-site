import { motion } from 'framer-motion'
import { useScrollProgress } from '../hooks/useScrollProgress'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9990] h-[2px] origin-left bg-accent"
      style={{ width: `${progress * 100}%` }}
      aria-hidden="true"
    />
  )
}
