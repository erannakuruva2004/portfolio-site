import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useLenis } from './hooks/useLenis'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import MouseGlow from './components/MouseGlow'
import ScrollProgress from './components/ScrollProgress'

const Home = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'))
const SkillsPage = lazy(() => import('./pages/SkillsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const ResumePage = lazy(() => import('./pages/ResumePage'))

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
    </div>
  )
}

function AppRoutes() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  useLenis()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      <div className="vertical-dividers grid-lines relative min-h-screen bg-bg text-primary">
        <Loader isLoading={loading} />
        <CustomCursor />
        <MouseGlow />
        <ScrollProgress />
        <Navbar />
        <main className={loading ? 'overflow-hidden' : ''}>
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  )
}
