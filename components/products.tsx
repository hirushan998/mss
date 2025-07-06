import { Wrench, Users, FileText, Calculator, Truck, BarChart, Shield, Smartphone } from "lucide-react"

export function Products() {
  const products = [
    {
      icon: Wrench,
      title: "Maintenance Solutions",
      description: "Comprehensive maintenance management systems for optimal operations.",
    },
    {
      icon: Users,
      title: "HR Management",
      description: "Complete human resource management and employee engagement platforms.",
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Secure document storage, processing, and workflow automation systems.",
    },
    {
      icon: Calculator,
      title: "Financial Solutions",
      description: "Advanced accounting, budgeting, and financial reporting tools.",
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "End-to-end supply chain management and logistics optimization.",
    },
    {
      icon: BarChart,
      title: "Analytics Platform",
      description: "Business intelligence and data analytics for informed decision-making.",
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Comprehensive cybersecurity and compliance management systems.",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Custom mobile apps for enhanced customer engagement and productivity.",
    },
  ]

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of products designed to streamline your business operations and drive
            growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
