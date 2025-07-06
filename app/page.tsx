import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Values } from "@/components/values"
import { About } from "@/components/about"
import { Partners } from "@/components/partners"
import { Products } from "@/components/products"
import { ClientsSay } from "@/components/clients-say"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { AnimatedSection } from "@/components/animated-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MSS Solutions - Transform Your Business with Technology",
  description:
    "Leading technology solutions provider with 15+ years experience. Custom software development, cloud services, mobile apps, and digital transformation for 500+ global clients.",
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main role="main">
        <section id="home">
          <AnimatedSection animation="fadeInUp">
            <Hero />
          </AnimatedSection>
        </section>

        <section id="services">
          <AnimatedSection animation="fadeInUp">
            <Services />
          </AnimatedSection>
        </section>

        <section id="process">
          <AnimatedSection animation="fadeInUp">
            <Process />
          </AnimatedSection>
        </section>

        <section id="values">
          <AnimatedSection animation="fadeInUp">
            <Values />
          </AnimatedSection>
        </section>

        <section id="about">
          <AnimatedSection animation="fadeInUp">
            <About />
          </AnimatedSection>
        </section>

        <section id="partners">
          <AnimatedSection animation="fadeInUp">
            <Partners />
          </AnimatedSection>
        </section>

        <section id="products">
          <AnimatedSection animation="fadeInUp">
            <Products />
          </AnimatedSection>
        </section>

        <section id="clients">
          <AnimatedSection animation="fadeInUp">
            <ClientsSay />
          </AnimatedSection>
        </section>

        <section id="contact">
          <AnimatedSection animation="fadeInUp">
            <Contact />
          </AnimatedSection>
        </section>
      </main>
      <WhatsAppWidget />
    </>
  )
}
