"use client"

import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "MSS Solutions transformed our business operations with their innovative technology solutions. Their expertise and dedication to excellence exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CEO, TechCorp Industries",
      rating: 5,
    },
    {
      quote:
        "The team at MSS Solutions delivered a comprehensive solution that streamlined our processes and significantly improved our efficiency. Highly recommended!",
      author: "Michael Chen",
      position: "CTO, Global Dynamics",
      rating: 5,
    },
    {
      quote:
        "Working with MSS Solutions was a game-changer for our company. Their professional approach and technical expertise helped us achieve our digital transformation goals.",
      author: "Emily Rodriguez",
      position: "Operations Director, InnovateCorp",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gray-900" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp">
          <header className="text-center mb-16">
            <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with MSS
              Solutions.
            </p>
          </header>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 200}>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-blue-400 mb-4" aria-hidden="true" />
                    <blockquote className="text-gray-300 leading-relaxed text-lg">"{testimonial.quote}"</blockquote>
                  </div>

                  <div className="flex items-center mb-4" aria-label={`${testimonial.rating} star rating`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" aria-hidden="true" />
                    ))}
                  </div>

                  <div>
                    <p className="text-white font-semibold text-lg">{testimonial.author}</p>
                    <p className="text-gray-400">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
