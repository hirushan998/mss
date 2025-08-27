"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Award, Globe, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"

export function About() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+", color: "text-blue-600" },
    { icon: Award, label: "Projects Completed", value: "1000+", color: "text-green-600" },
    { icon: Globe, label: "Countries Served", value: "25+", color: "text-purple-600" },
    { icon: TrendingUp, label: "Years Experience", value: "15+", color: "text-orange-600" },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
    },
    {
      title: "Quality",
      description: "Every project meets the highest standards of excellence and reliability.",
    },
    {
      title: "Partnership",
      description: "We work closely with clients as trusted partners in their success.",
    },
    {
      title: "Results",
      description: "Our focus is on delivering measurable business outcomes and ROI.",
    },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
            About MSS
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Millennium Sourcing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 15 years, we've been helping businesses transform through technology. Our expertise spans across
            industries, delivering solutions that drive growth and innovation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2008, Millennium Sourcing Solutions began with a simple mission: to bridge the gap between
                business needs and technology solutions. What started as a small team of passionate developers has grown
                into a comprehensive technology partner serving clients worldwide.
              </p>
              <p>
                Today, we combine deep technical expertise with industry knowledge to deliver solutions that not only
                meet current needs but anticipate future challenges. Our team of experts works across multiple domains,
                ensuring we can handle projects of any scale and complexity.
              </p>
              <p>
                We believe in building long-term partnerships with our clients, understanding their unique challenges,
                and delivering solutions that drive real business value.
              </p>
            </div>

            <div className="mt-8">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection("#contact")}
              >
                Work With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Column - Values */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Our Values</h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive
            advantage in an ever-evolving digital landscape.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent"
            onClick={() => scrollToSection("#services")}
          >
            Explore Our Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
