"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Target, Heart, Lightbulb } from "lucide-react"

export function Values() {
  const values = [
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the leading provider of innovative business solutions that empower companies to achieve sustainable growth and success in today's competitive marketplace.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To deliver exceptional value to our clients through innovative solutions, expert consulting, and unwavering commitment to excellence in everything we do.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Integrity, innovation, and client success drive everything we do. We believe in building lasting partnerships based on trust, transparency, and mutual respect.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Lightbulb,
      title: "Our Approach",
      description:
        "We combine strategic thinking with practical execution, leveraging cutting-edge technology and industry best practices to deliver measurable results.",
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* City skyline background effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-200/50 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            What Drives Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Values</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Guided by our core values, we deliver excellence in every project and build lasting partnerships with our
            clients worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <div className="flex items-start space-x-4 sm:space-x-6">
                    <div
                      className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
