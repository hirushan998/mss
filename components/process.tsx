import { Search, Lightbulb, Code2, Rocket } from "lucide-react"

export function Process() {
  const steps = [
    {
      icon: Search,
      title: "Discovery & Analysis",
      description:
        "We begin by understanding your business needs, challenges, and objectives through comprehensive analysis.",
      step: "01",
    },
    {
      icon: Lightbulb,
      title: "Strategy & Planning",
      description:
        "Our experts develop a tailored strategy and detailed project plan to achieve your goals efficiently.",
      step: "02",
    },
    {
      icon: Code2,
      title: "Development & Implementation",
      description: "We build and implement your solution using cutting-edge technologies and best practices.",
      step: "03",
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "We ensure a smooth launch and provide ongoing support to maximize your solution's performance.",
      step: "04",
    },
  ]

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology to ensure successful project delivery and exceptional results for every
            client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-cyan-300"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
