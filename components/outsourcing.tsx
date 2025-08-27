"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Zap, Shield } from "lucide-react"

export function Outsourcing() {
  const solutions = [
    {
      title: "Strategic Consulting",
      description:
        "Expert strategic consulting services to help you make informed business decisions and achieve sustainable growth through proven methodologies.",
      icon: Target,
      color: "from-blue-500 to-blue-600",
      features: ["Business Strategy", "Process Optimization", "Performance Analysis"],
    },
    {
      title: "Process Optimization",
      description:
        "Streamline your business processes and improve operational efficiency through our comprehensive optimization services and automation solutions.",
      icon: Zap,
      color: "from-green-500 to-green-600",
      features: ["Workflow Automation", "Efficiency Improvement", "Cost Reduction"],
    },
    {
      title: "Technology Solutions",
      description:
        "Cutting-edge technology solutions designed to modernize your business operations, improve productivity, and drive digital transformation.",
      icon: Shield,
      color: "from-purple-500 to-purple-600",
      features: ["Digital Transformation", "System Integration", "Tech Consulting"],
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            How We Work
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Outsourcing <span className="text-blue-600">Explained</span>
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-6 sm:p-8 mb-12 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Outsourcing provides organizations with access to specialized skills and resources while reducing costs
              and improving efficiency. Our approach combines expertise with innovation to deliver exceptional results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {solution.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6 text-center">{solution.description}</p>

                  <div className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <ArrowRight className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0 shadow-xl max-w-2xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 leading-relaxed">
                Our expert team has extensive experience in these areas and can help you achieve your business
                objectives with proven strategies and innovative solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
