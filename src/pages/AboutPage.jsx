import About from '../components/About'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-28">
        <About />
      </div>
      <Footer />
    </PageTransition>
  )
}
