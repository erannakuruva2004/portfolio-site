import gsap from 'gsap'

export const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

export const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
}

export function revealOnScroll(ref, options = {}) {
  if (!ref.current) return

  gsap.fromTo(
    ref.current,
    { opacity: 0, y: options.y ?? 50 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration ?? 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: options.start ?? 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}
