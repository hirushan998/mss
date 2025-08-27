import { Eye, Target } from "lucide-react"

export default function Values() {
  return (
    <section id="values" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Vision & Mission</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Vision */}
          <div className="text-center lg:text-left">
            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="p-4 bg-blue-100 rounded-full">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To be the leading global sourcing partner, connecting businesses with innovative solutions and reliable
              suppliers while fostering sustainable growth and long-term partnerships.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center lg:text-left">
            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="p-4 bg-blue-100 rounded-full">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To provide exceptional sourcing solutions, engineering expertise, and consultancy services that empower
              our clients to achieve operational excellence and competitive advantage in their markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
