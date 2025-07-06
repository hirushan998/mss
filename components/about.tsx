import { Users, Award, Globe, TrendingUp } from "lucide-react"

export function About() {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Globe, value: "25+", label: "Countries Served" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About MSS Solutions</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of experience in the technology industry, MSS Solutions has been at the forefront of
              digital transformation, helping businesses worldwide achieve their goals through innovative technology
              solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of expert developers, consultants, and strategists work collaboratively to deliver solutions that
              not only meet your current needs but also position your business for future success.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
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
