"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Award, Globe } from "lucide-react"

export function History() {
  const stats = [
    { icon: Calendar, label: "Years of Experience", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Award, label: "Projects Completed", value: "1000+" },
    { icon: Globe, label: "Countries Served", value: "25+" },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white relative overflow-hidden">
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
            Our Journey
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
            Our <span className="text-cyan-300">History</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 mb-12">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-cyan-300">Building Excellence Since 2009</h3>
                  <p className="text-lg leading-relaxed mb-6 text-blue-100">
                    MSS was founded with a vision to provide exceptional business solutions and services to companies
                    worldwide. Over the years, we have built a reputation for excellence and innovation in everything we
                    do.
                  </p>
                  <p className="text-lg leading-relaxed text-blue-100">
                    Our team of experienced professionals brings together decades of combined expertise in business
                    consulting, technology solutions, and strategic planning. We are committed to helping our clients
                    achieve their goals and grow their businesses through our comprehensive range of services.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon
                    return (
                      <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 text-center">
                        <CardContent className="p-4 sm:p-6">
                          <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-cyan-300 mx-auto mb-3" />
                          <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{stat.value}</div>
                          <div className="text-xs sm:text-sm text-blue-200">{stat.label}</div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
