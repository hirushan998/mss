"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ClientsSay() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const testimonials = [
    {
      quote:
        "MSS Solutions transformed our entire digital infrastructure. Their expertise in cloud migration saved us 40% in operational costs while improving our system performance dramatically.",
      author: "Sarah Johnson",
      position: "CTO",
      company: "TechCorp Industries",
      logo: "TC",
      rating: 5,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      quote:
        "The custom software solution they developed for us has revolutionized our workflow. What used to take hours now takes minutes. Exceptional quality and support.",
      author: "Michael Chen",
      position: "CEO",
      company: "Global Dynamics",
      logo: "GD",
      rating: 5,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      quote:
        "Working with MSS Solutions was a game-changer. Their team's professionalism and technical expertise helped us achieve our digital transformation goals ahead of schedule.",
      author: "Emily Rodriguez",
      position: "Operations Director",
      company: "InnovateCorp",
      logo: "IC",
      rating: 5,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      quote:
        "Their mobile app development exceeded our expectations. The user experience is phenomenal, and our customer engagement has increased by 300% since launch.",
      author: "David Park",
      position: "Product Manager",
      company: "NextGen Solutions",
      logo: "NG",
      rating: 5,
      gradient: "from-orange-500 to-red-500",
    },
    {
      quote:
        "MSS Solutions delivered a robust cybersecurity framework that gives us complete peace of mind. Their proactive approach to security is unmatched in the industry.",
      author: "Lisa Thompson",
      position: "CISO",
      company: "SecureFlow Inc",
      logo: "SF",
      rating: 5,
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isVisible, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    resetInterval()
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    resetInterval()
  }

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    resetInterval()
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden"
      aria-labelledby="clients-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full -translate-y-48 translate-x-48 opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full translate-y-32 -translate-x-32 opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <header
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 id="clients-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with MSS
            Solutions.
          </p>
        </header>

        {/* 3D Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div
            className={`relative h-[500px] transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
            style={{ perspective: "1000px" }}
          >
            {/* Carousel Items */}
            <div className="relative w-full h-full">
              {testimonials.map((testimonial, index) => {
                const offset = index - currentIndex
                const isActive = index === currentIndex
                const isPrev = offset === -1 || (currentIndex === 0 && index === testimonials.length - 1)
                const isNext = offset === 1 || (currentIndex === testimonials.length - 1 && index === 0)

                let transform = ""
                let zIndex = 0
                let opacity = 0

                if (isActive) {
                  transform = "translateX(0) translateZ(0) rotateY(0deg) scale(1)"
                  zIndex = 30
                  opacity = 1
                } else if (isPrev) {
                  transform = "translateX(-80%) translateZ(-200px) rotateY(35deg) scale(0.8)"
                  zIndex = 20
                  opacity = 0.7
                } else if (isNext) {
                  transform = "translateX(80%) translateZ(-200px) rotateY(-35deg) scale(0.8)"
                  zIndex = 20
                  opacity = 0.7
                } else {
                  transform = "translateX(0) translateZ(-400px) rotateY(0deg) scale(0.6)"
                  zIndex = 10
                  opacity = 0.3
                }

                return (
                  <Card
                    key={index}
                    className="absolute inset-0 mx-auto max-w-4xl transition-all duration-700 ease-in-out border-0 shadow-2xl"
                    style={{
                      transform,
                      zIndex,
                      opacity,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <CardContent className="p-0 h-full">
                      <div className="relative h-full bg-white rounded-2xl overflow-hidden">
                        {/* Background gradient */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-5`}
                          aria-hidden="true"
                        ></div>

                        <div className="relative z-10 p-12 h-full flex flex-col justify-between">
                          {/* Company Logo */}
                          <div className="flex justify-center mb-8">
                            <div
                              className={`w-20 h-20 bg-gradient-to-r ${testimonial.gradient} rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300`}
                              aria-hidden="true"
                            >
                              <span className="text-white font-bold text-2xl">{testimonial.logo}</span>
                            </div>
                          </div>

                          {/* Quote */}
                          <div className="text-center mb-8">
                            <Quote className="h-12 w-12 text-gray-300 mx-auto mb-6" aria-hidden="true" />
                            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium italic">
                              "{testimonial.quote}"
                            </blockquote>
                          </div>

                          {/* Rating */}
                          <div className="flex justify-center mb-6" aria-label={`${testimonial.rating} star rating`}>
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" aria-hidden="true" />
                            ))}
                          </div>

                          {/* Author Info */}
                          <div className="text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonial.author}</h3>
                            <p className="text-gray-600 mb-2">{testimonial.position}</p>
                            <p
                              className={`font-semibold bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}
                            >
                              {testimonial.company}
                            </p>
                          </div>
                        </div>

                        {/* Decorative elements */}
                        <div
                          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16`}
                          aria-hidden="true"
                        ></div>
                        <div
                          className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${testimonial.gradient} opacity-10 rounded-full translate-y-12 -translate-x-12`}
                          aria-hidden="true"
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 left-4 transform transition-all duration-1000 delay-500 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div
            className={`absolute top-1/2 -translate-y-1/2 right-4 transform transition-all duration-1000 delay-500 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div
            className={`flex justify-center mt-12 space-x-3 transform transition-all duration-1000 delay-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            role="tablist"
            aria-label="Testimonial navigation"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 scale-125 shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                }`}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div
            className={`mt-8 max-w-md mx-auto transform transition-all duration-1000 delay-900 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-gradient-to-r from-blue-600 to-cyan-500 h-1 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                role="progressbar"
                aria-valuenow={currentIndex + 1}
                aria-valuemin={1}
                aria-valuemax={testimonials.length}
                aria-label={`Testimonial ${currentIndex + 1} of ${testimonials.length}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
