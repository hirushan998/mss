"use client"

import { useEffect, useRef, useState } from "react"

export function Partners() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const partners = [
    { name: "Microsoft", logo: "MS", description: "Microsoft technology partner" },
    { name: "Amazon Web Services", logo: "AWS", description: "AWS cloud solutions partner" },
    { name: "Google Cloud Platform", logo: "GCP", description: "Google Cloud certified partner" },
    { name: "IBM", logo: "IBM", description: "IBM enterprise solutions partner" },
    { name: "Oracle", logo: "ORC", description: "Oracle database solutions partner" },
    { name: "SAP", logo: "SAP", description: "SAP enterprise software partner" },
    { name: "Salesforce", logo: "SF", description: "Salesforce CRM solutions partner" },
    { name: "Adobe", logo: "ADO", description: "Adobe creative solutions partner" },
    { name: "Cisco", logo: "CSC", description: "Cisco networking solutions partner" },
    { name: "VMware", logo: "VM", description: "VMware virtualization partner" },
    { name: "Dell Technologies", logo: "DL", description: "Dell hardware solutions partner" },
    { name: "HP Enterprise", logo: "HP", description: "HP enterprise solutions partner" },
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
    <section ref={sectionRef} id="partners" className="py-20 bg-white" aria-labelledby="partners-heading">
      <div className="container mx-auto px-4">
        <header
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 id="partners-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Technology Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry-leading technology partners to deliver the best solutions and services to our
            clients.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6" role="list">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-xl p-6 flex items-center justify-center hover:bg-gray-100 transition-all duration-500 group transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
              }}
              role="listitem"
            >
              <div className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300"
                  aria-label={partner.description}
                >
                  <span className="text-white font-bold text-sm" aria-hidden="true">
                    {partner.logo}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-700">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
