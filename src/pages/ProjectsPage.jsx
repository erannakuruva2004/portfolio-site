import Projects from '../components/Projects'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="pt-28">
        <Projects />
      </div>
      <Footer />
    </PageTransition>
  )
}
