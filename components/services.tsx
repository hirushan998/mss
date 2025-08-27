"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Database, Globe, Smartphone, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs",
      features: ["Web Applications", "Desktop Software", "API Development", "System Integration"],
      featured: true,
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites that drive results",
      features: ["Responsive Design", "E-commerce", "CMS Development", "SEO Optimization"],
      featured: false,
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"],
      featured: true,
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Comprehensive data management and analytics",
      features: ["Database Design", "Data Migration", "Analytics", "Business Intelligence"],
      featured: false,
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your business with advanced security solutions",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Risk Assessment"],
      featured: false,
    },
    {
      icon: Zap,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration services",
      features: ["Cloud Migration", "DevOps", "Infrastructure", "Monitoring"],
      featured: true,
    },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end technology services that drive innovation and growth for
            your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  service.featured ? "ring-2 ring-blue-500 ring-opacity-50" : ""
                }`}
              >
                {service.featured && <Badge className="absolute top-4 right-4 bg-blue-600 text-white">Popular</Badge>}

                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${
                      service.featured
                        ? "bg-blue-600 text-white"
                        : "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                    }`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 bg-transparent"
                    onClick={() => scrollToSection("#contact")}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            Need a custom solution? We're here to help you build exactly what your business needs.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection("#contact")}
          >
            Get Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
