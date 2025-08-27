"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Package, Wrench, Gauge, Cpu, Save as Valve, Cog, BarChart, Zap } from "lucide-react"

export function Products() {
  const productCategories = [
    {
      title: "AIR PRODUCTS RANGE",
      description: "Comprehensive air handling and pneumatic solutions for industrial applications.",
      icon: Package,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "PRE TOOLS & WORK PARTS",
      description: "Precision tools and components for manufacturing and assembly processes.",
      icon: Wrench,
      color: "from-green-500 to-green-600",
    },
    {
      title: "MEASUREMENT INSTRUMENTS",
      description: "Advanced measurement and testing instruments for quality control and analysis.",
      icon: Gauge,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "INDUSTRIAL AUTOMATION",
      description: "Complete automation solutions to optimize your manufacturing processes.",
      icon: Cpu,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "INDUSTRIAL VALVES",
      description: "High-quality valves for fluid control in various industrial applications.",
      icon: Valve,
      color: "from-red-500 to-red-600",
    },
    {
      title: "PRECISION COMPONENTS",
      description: "Engineered components designed for precision and reliability in critical applications.",
      icon: Cog,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      title: "PRESSURE MEASUREMENT",
      description: "Accurate pressure measurement solutions for monitoring and control systems.",
      icon: BarChart,
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "HYDRAULIC & PNEUMATIC",
      description: "Complete hydraulic and pneumatic systems for power transmission and control.",
      icon: Zap,
      color: "from-indigo-500 to-indigo-600",
    },
  ]

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            Product Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Products</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of industrial products and solutions designed to meet the diverse needs of
            modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {productCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col">
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {category.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                    {category.description}
                  </p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 max-w-2xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Need Custom Solutions?</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our team can develop custom products and solutions tailored to your specific requirements and industry
                needs.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Contact Our Experts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
