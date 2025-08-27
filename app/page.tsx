import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Outsourcing from "@/components/Outsourcing"
import History from "@/components/History"
import Values from "@/components/Values"
import Brands from "@/components/Brands"
import Work from "@/components/Work"
import Clients from "@/components/Clients"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Outsourcing />
      <History />
      <Values />
      <Brands />
      <Work />
      <Clients />
      <Contact />
      <Footer />
    </main>
  )
}
