import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks, personalInfo } from '../data/portfolio'
import { useNavbarScroll } from '../hooks/useScrollProgress'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useNavbarScroll()
  const location = useLocation()

  const handleNavClick = () => setMenuOpen(false)

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-500 ${
        scrolled ? 'glass-strong py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <Link to="/" className="group flex items-center gap-2" onClick={handleNavClick}>
          <span className="font-heading text-2xl tracking-wider text-primary transition-colors group-hover:text-accent md:text-3xl">
            EK
          </span>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-secondary sm:block">
            Portfolio
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors ${
                    isActive ? 'text-accent' : 'text-secondary hover:text-primary'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 bg-accent"
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        <a
          href={`mailto:${personalInfo.email}`}
          className="btn-glow hidden rounded-full border border-white/10 px-5 py-2 text-xs font-medium uppercase tracking-widest text-primary lg:inline-flex"
        >
          Hire Me
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-primary lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="glass-strong absolute left-4 right-4 top-full mt-2 overflow-hidden rounded-2xl border border-white/10 lg:hidden"
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col p-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={handleNavClick}
                    className={`block border-b border-white/5 px-4 py-3 text-sm uppercase tracking-widest ${
                      location.pathname === link.path ? 'text-accent' : 'text-secondary'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
