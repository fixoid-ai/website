import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { CtaSection } from "@/components/cta-section"
import { ProfessionalConnect } from "@/components/ui/get-in-touch"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Testimonials />
        <CtaSection />
        <ProfessionalConnect />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
