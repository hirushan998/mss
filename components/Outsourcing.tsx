import { ArrowRight, Search, CheckCircle, Package, Truck } from "lucide-react"

export default function Outsourcing() {
  const steps = [
    {
      icon: Search,
      title: "Supplier Sourcing",
      description: "We identify and evaluate potential suppliers based on your specific requirements",
    },
    {
      icon: CheckCircle,
      title: "Selection",
      description: "Rigorous selection process to ensure quality, reliability, and cost-effectiveness",
    },
    {
      icon: Package,
      title: "Production/Loading",
      description: "Oversee production processes and quality control throughout manufacturing",
    },
    {
      icon: Truck,
      title: "Shipment",
      description: "Manage logistics and ensure timely delivery to your specified destination",
    },
  ]

  return (
    <section id="outsourcing" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Outsourcing Explained</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures efficient sourcing and delivery of your requirements
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-blue-600 rounded-full">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 max-w-48">{step.description}</p>
                </div>
                {index < steps.length - 1 && <ArrowRight className="h-6 w-6 text-blue-600 mx-8" />}
              </div>
            ))}
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-600 rounded-full">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-6">
                    <ArrowRight className="h-6 w-6 text-blue-600 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
