import { useMousePosition, useIsDesktop } from '../hooks/useMousePosition'

export default function MouseGlow() {
  const { x, y } = useMousePosition()
  const isDesktop = useIsDesktop()

  if (!isDesktop) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 106, 0, 0.06), transparent 40%)`,
      }}
      aria-hidden="true"
    />
  )
}
