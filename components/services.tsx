"use client"

import { Code, Database, Cloud, Shield, Smartphone, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const services = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions built to meet your specific business requirements and objectives.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Database,
      title: "Data Management",
      description:
        "Comprehensive data solutions including storage, processing, and analytics for informed decision-making.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to optimize your business operations.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Shield,
      title: "Security Services",
      description: "Advanced cybersecurity solutions to protect your digital assets and ensure compliance.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Transform your data into actionable insights with our advanced analytics and reporting tools.",
      color: "from-cyan-500 to-cyan-600",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 bg-gray-50 overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        <header
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Technology Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive technology solutions designed to transform your business and drive sustainable growth
            in today's competitive landscape.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
                role="listitem"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
