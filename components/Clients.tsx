"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function Clients() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const clients = [
    {
      name: "Dimo",
      logo: "/clients/dimo.jpg",
      industry: "Automotive & Engineering",
    },
    {
      name: "MAS Holdings",
      logo: "/clients/mas.jpg",
      industry: "Apparel Manufacturing",
    },
    {
      name: "Dankotuwa",
      logo: "/clients/dankotuwa.png",
      industry: "Tableware Manufacturing",
    },
    {
      name: "Elephant House",
      logo: "/clients/elephant-house.jpg",
      industry: "Food & Beverage",
    },
  ]

  const testimonials = [
    {
      text: "Millennium Sourcing Solutions has been instrumental in providing us with high-quality engineering components. Their expertise in sourcing and reliability has made them our preferred partner for industrial solutions.",
      author: "Engineering Manager",
      company: "Elephant House",
      logo: "/clients/elephant-house.jpg",
      rating: 5,
    },
    {
      text: "The quality of products and professional service from MSS has consistently exceeded our expectations. Their global sourcing capabilities have helped us maintain our production standards.",
      author: "Procurement Director",
      company: "Dankotuwa",
      logo: "/clients/dankotuwa.png",
      rating: 5,
    },
    {
      text: "Working with MSS has streamlined our supply chain operations. Their import consultancy services and technical expertise have been invaluable to our manufacturing processes.",
      author: "Operations Manager",
      company: "MAS Holdings",
      logo: "/clients/mas.jpg",
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="clients" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Clients</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by leading companies across various industries in Sri Lanka and beyond
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="text-center">
                <div className="w-full h-16 flex items-center justify-center mb-3">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    width={120}
                    height={64}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{client.name}</h3>
                <p className="text-xs text-gray-500">{client.industry}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg lg:text-xl text-gray-700 text-center mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentTestimonial].logo || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].company}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].author}</div>
                  <div className="text-blue-600 text-sm">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Satisfied Clients</h3>
            <p className="text-blue-100 mb-6">
              Experience the quality and reliability that has made us the preferred choice for engineering solutions
              across industries.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
