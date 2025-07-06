import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Process } from "@/components/process"
import { Values } from "@/components/values"
import { Partners } from "@/components/partners"
import { Products } from "@/components/products"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Process />
      <Values />
      <Partners />
      <Products />
      <Testimonials />
      <Contact />
    </main>
  )
}
