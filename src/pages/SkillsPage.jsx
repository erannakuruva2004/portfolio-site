import Skills from '../components/Skills'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'

export default function SkillsPage() {
  return (
    <PageTransition>
      <div className="pt-28">
        <Skills />
      </div>
      <Footer />
    </PageTransition>
  )
}
