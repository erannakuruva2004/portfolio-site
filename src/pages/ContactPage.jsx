import Contact from '../components/Contact'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="pt-28">
        <Contact />
      </div>
      <Footer />
    </PageTransition>
  )
}
