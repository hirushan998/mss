"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function Brands() {
  const brands = [
    { name: "SHPI", category: "Industrial" },
    { name: "RIH", category: "Technology" },
    { name: "PRIM", category: "Manufacturing" },
    { name: "AIFT", category: "Automation" },
    { name: "CKD", category: "Components" },
    { name: "CHAMBERS", category: "Engineering" },
    { name: "VERTEX", category: "Solutions" },
    { name: "KOCKUMS", category: "Marine" },
    { name: "ORIGIN", category: "Innovation" },
    { name: "IMI", category: "Precision" },
    { name: "ORION", category: "Systems" },
    { name: "KITZ", category: "Valves" },
    { name: "WIKA", category: "Instruments" },
    { name: "ALRA", category: "Controls" },
    { name: "ZWICK", category: "Testing" },
    { name: "TATE", category: "Access" },
    { name: "BESTOBELL", category: "Valves" },
    { name: "MALVERN", category: "Analytics" },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-white border-white/30 bg-white/10">
            Trusted Partners
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Main <span className="text-cyan-300">Brands</span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We partner with industry-leading brands to deliver exceptional solutions and services to our clients
            worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className="group bg-white/95 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0"
            >
              <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center h-24 sm:h-28">
                <span className="font-bold text-gray-800 text-xs sm:text-sm text-center mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {brand.name}
                </span>
                <span className="text-xs text-gray-500 text-center">{brand.category}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 max-w-2xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <p className="text-white text-lg leading-relaxed">
                <span className="font-semibold text-cyan-300">18+ Premium Brands</span> trusted by thousands of
                companies worldwide for their quality, reliability, and innovation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
