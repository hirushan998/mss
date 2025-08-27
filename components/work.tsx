"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ArrowRight, CheckCircle } from "lucide-react"

export function Work() {
  const testimonial = {
    company: "TechCorp Industries",
    logo: "T",
    rating: 5,
    title: "Excellent Service Delivery",
    content:
      "MSS has been instrumental in helping us streamline our operations and improve our overall efficiency. Their team of experts provided valuable insights and solutions that have significantly impacted our business growth. The level of professionalism and dedication they showed throughout the project was exceptional.",
    author: "Sarah Johnson",
    position: "Operations Director",
    results: [
      { metric: "Efficiency Increase", value: "45%" },
      { metric: "Cost Reduction", value: "30%" },
      { metric: "Project Timeline", value: "On Time" },
    ],
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-white border-white/30 bg-white/10">
            Success Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-cyan-300">Work</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See how we've helped businesses transform their operations and achieve remarkable results through our
            innovative solutions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl sm:text-2xl">{testimonial.logo}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{testimonial.company}</h3>
                        <Badge className="bg-green-500 text-white">Verified Client</Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex text-yellow-400">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                        <span className="text-gray-300 text-sm">({testimonial.rating}.0)</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-cyan-300 opacity-50" />
                    <h4 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-4 pl-6">{testimonial.title}</h4>
                    <p className="text-gray-300 leading-relaxed text-lg pl-6">{testimonial.content}</p>
                  </div>

                  <div className="flex items-center space-x-4 pl-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-gray-400 text-sm">{testimonial.position}</div>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-white mb-4">Project Results</h4>
                  {testimonial.results.map((result, index) => (
                    <Card key={index} className="bg-white/5 backdrop-blur-sm border border-white/10">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-gray-400">{result.metric}</div>
                            <div className="text-2xl font-bold text-white">{result.value}</div>
                          </div>
                          <CheckCircle className="h-8 w-8 text-green-400" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
