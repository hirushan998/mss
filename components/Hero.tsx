"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToServices = () => {
    const element = document.querySelector("#services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-16 lg:pt-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 lg:pr-12">
            <div className="mb-6 lg:hidden">
              <Image src="/mss-logo.png" alt="MSS Logo" width={200} height={80} className="mx-auto h-16 w-auto" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Millennium Sourcing Solutions
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              We specialize in building solutions that work for your business and help you achieve your goals through
              innovative engineering, global sourcing, and comprehensive consultancy services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToServices}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium"
              >
                Learn More
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-medium bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Logo for desktop */}
          <div className="hidden lg:block flex-shrink-0">
            <Image src="/mss-logo.png" alt="MSS Logo" width={300} height={120} className="h-32 w-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
