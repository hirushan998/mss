"use client"

import { Users, Award, Globe, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ clients: 0, experience: 0, countries: 0, success: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  const stats = [
    { icon: Users, value: 500, suffix: "+", label: "Happy Clients", key: "clients" },
    { icon: Award, value: 15, suffix: "+", label: "Years Experience", key: "experience" },
    { icon: Globe, value: 25, suffix: "+", label: "Countries Served", key: "countries" },
    { icon: TrendingUp, value: 98, suffix: "%", label: "Success Rate", key: "success" },
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
      stats.forEach((stat) => {
        let start = 0
        const end = stat.value
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCounts((prev) => ({ ...prev, [stat.key]: end }))
            clearInterval(timer)
          } else {
            setCounts((prev) => ({ ...prev, [stat.key]: Math.floor(start) }))
          }
        }, 16)
      })
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white overflow-hidden" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            <header>
              <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About MSS Solutions
              </h2>
            </header>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of experience in the technology industry, MSS Solutions has been at the forefront of
              digital transformation, helping businesses worldwide achieve their goals through innovative technology
              solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of expert developers, consultants, and strategists work collaboratively to deliver solutions that
              not only meet your current needs but also position your business for future success.
            </p>

            <div className="grid grid-cols-2 gap-6" role="list" aria-label="Company statistics">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div
                    key={index}
                    className={`text-center transform transition-all duration-1000 delay-${index * 200} ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                    role="listitem"
                  >
                    <div
                      className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1" aria-live="polite">
                      {counts[stat.key as keyof typeof counts]}
                      {stat.suffix}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="text-white font-bold text-3xl">MSS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Innovation Driven</h3>
                  <p className="text-gray-600">Transforming businesses through technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
