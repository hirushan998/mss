import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Globe, FileText, Users } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Engineering Solutions",
      description:
        "Comprehensive engineering services tailored to meet your technical requirements and industry standards.",
    },
    {
      icon: Globe,
      title: "Global Solutions",
      description: "Worldwide sourcing and supply chain management to connect you with the best suppliers globally.",
    },
    {
      icon: FileText,
      title: "Import Consultancy",
      description:
        "Expert guidance on import regulations, documentation, and compliance to streamline your operations.",
    },
    {
      icon: Users,
      title: "Outsourcing",
      description: "Strategic outsourcing solutions to optimize your business processes and reduce operational costs.",
    },
  ]

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions to help your business thrive in today's competitive market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
