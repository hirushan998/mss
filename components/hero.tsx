"use client"

import { ArrowRight, Play, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-12 transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-8">
              <Image
                src="/mss-logo.png"
                alt="MSS - Millennium Sourcing Solutions"
                width={400}
                height={120}
                className="h-20 sm:h-24 lg:h-32 w-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Tagline */}
          <div className="mb-8">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-light text-white/90 mb-4">
              Your Partner in Business Excellence
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            We specialize in building solutions that work for your business and help you achieve your goals. Let us be
            the bridge between you and your success. We offer a wide range of services to help you grow your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              onClick={() => scrollToSection("#services")}
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm bg-transparent transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection("#about")}
            >
              <Play className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <button
          onClick={() => scrollToSection("#services")}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
