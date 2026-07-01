import Experience from '../components/Experience'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="pt-28">
        <Experience />
      </div>
      <Footer />
    </PageTransition>
  )
}
