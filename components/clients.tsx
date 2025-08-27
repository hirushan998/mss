"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function Clients() {
  const clients = [
    { name: "Efficient Solutions", logo: "ES", industry: "Technology", color: "from-blue-500 to-blue-600" },
    { name: "Dicon Industries", logo: "DI", industry: "Manufacturing", color: "from-green-500 to-green-600" },
    { name: "AMAS Corporation", logo: "AC", industry: "Consulting", color: "from-purple-500 to-purple-600" },
    { name: "Innovation Labs", logo: "IL", industry: "Research", color: "from-orange-500 to-orange-600" },
    { name: "Global Dynamics", logo: "GD", industry: "Logistics", color: "from-red-500 to-red-600" },
    { name: "TechForward", logo: "TF", industry: "Software", color: "from-cyan-500 to-cyan-600" },
    { name: "ProSystems", logo: "PS", industry: "Engineering", color: "from-pink-500 to-pink-600" },
    { name: "NextGen Solutions", logo: "NS", industry: "Innovation", color: "from-indigo-500 to-indigo-600" },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            Trusted By
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Clients</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're proud to work with industry leaders and innovative companies across various sectors worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-r ${client.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <span className="text-white font-bold text-lg sm:text-xl">{client.logo}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {client.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">{client.industry}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 max-w-2xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Join Our Success Stories</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-blue-600">500+ Companies</span> trust us to deliver exceptional
                results and drive their business growth through innovative solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
