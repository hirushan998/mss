import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Values } from "@/components/values"
import { About } from "@/components/about"
import { Partners } from "@/components/partners"
import { Products } from "@/components/products"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
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
        <Hero />
        <Services />
        <Process />
        <Values />
        <About />
        <Partners />
        <Products />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}
