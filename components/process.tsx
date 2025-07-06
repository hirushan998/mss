"use client"

import { Search, Lightbulb, Code2, Rocket, CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Process() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const steps = [
    {
      icon: Search,
      title: "Discovery & Analysis",
      description:
        "We begin by understanding your business needs, challenges, and objectives through comprehensive analysis and stakeholder interviews.",
      details: ["Requirements gathering", "Stakeholder interviews", "Market research", "Technical assessment"],
      step: "01",
      duration: "1-2 weeks",
    },
    {
      icon: Lightbulb,
      title: "Strategy & Planning",
      description:
        "Our experts develop a tailored strategy and detailed project plan to achieve your goals efficiently and effectively.",
      details: ["Solution architecture", "Project roadmap", "Resource allocation", "Timeline planning"],
      step: "02",
      duration: "1 week",
    },
    {
      icon: Code2,
      title: "Development & Implementation",
      description: "We build and implement your solution using cutting-edge technologies and industry best practices.",
      details: ["Agile development", "Quality assurance", "Regular updates", "Testing & validation"],
      step: "03",
      duration: "4-12 weeks",
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description:
        "We ensure a smooth launch and provide ongoing support to maximize your solution's performance and success.",
      details: ["Deployment planning", "User training", "Performance monitoring", "Ongoing maintenance"],
      step: "04",
      duration: "Ongoing",
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
      id="process"
      className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full -translate-y-48 translate-x-48 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full translate-y-32 -translate-x-32 opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology to ensure successful project delivery and exceptional results for every
            client.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div
              className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-cyan-400 transform md:-translate-x-0.5 transition-all duration-1000 ${
                isVisible ? "scale-y-100" : "scale-y-0"
              }`}
              style={{ transformOrigin: "top" }}
            ></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {steps.map((step, index) => {
                const IconComponent = step.icon
                const isEven = index % 2 === 0

                return (
                  <div
                    key={index}
                    className={`relative transform transition-all duration-1000 ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : isEven
                          ? "-translate-x-20 opacity-0"
                          : "translate-x-20 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
                    }}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full transform -translate-x-2 md:-translate-x-2 z-10"></div>

                    {/* Content Card */}
                    <div className={`ml-20 md:ml-0 md:w-5/12 ${isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100">
                        {/* Step Number Badge */}
                        <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {step.step}
                        </div>

                        {/* Duration Badge */}
                        <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full mb-4">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {step.duration}
                        </div>

                        {/* Icon and Title */}
                        <div className="flex items-center mb-4">
                          <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="h-7 w-7 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {step.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">{step.description}</p>

                        {/* Details List */}
                        <div className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-sm font-medium">{detail}</span>
                            </div>
                          ))}
                        </div>

                        {/* Hover Effect Arrow */}
                        <div
                          className={`absolute top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                            isEven ? "md:-right-4" : "md:-left-4"
                          }`}
                        >
                          <div
                            className={`w-0 h-0 border-t-8 border-b-8 border-transparent ${
                              isEven ? "border-l-8 border-l-white" : "border-r-8 border-r-white"
                            }`}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Timeline Icon */}
                    <div className="absolute left-2 md:hidden w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Timeline End */}
            <div
              className={`relative mt-12 transform transition-all duration-1000 delay-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transform -translate-x-3 md:-translate-x-3 z-10 shadow-lg">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
              </div>
              <div className="ml-20 md:ml-0 md:text-center">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-green-700 font-semibold">Project Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-1200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how our proven process can help bring your vision to life.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector("#contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
