import Image from "next/image"

export default function Work() {
  const workCategories = [
    {
      title: "Air Tools & Blow Guns",
      image: "/work/air-tools-blow-guns.png",
    },
    {
      title: "Air Preparation Units",
      image: "/work/air-preparation-units.png",
    },
    {
      title: "High Efficiency Mechanical Tools",
      image: "/work/mechanical-tools.png",
    },
    {
      title: "Pneumatic Cylinders & Actuators",
      image: "/work/pneumatic-cylinders.png",
    },
    {
      title: "High Efficiency Abrasive Bits",
      image: "/work/abrasive-bits.png",
    },
    {
      title: "Pneumatic Fittings, Tubes & Accessories",
      image: "/work/pneumatic-fittings.png",
    },
    {
      title: "Industrial & Automotive Bearings",
      image: "/work/bearings.png",
    },
    {
      title: "Pneumatic Directional Control Valves",
      image: "/work/control-valves.png",
    },
  ]

  return (
    <section id="work" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of industrial products and solutions. From pneumatic systems to precision
            tools, we provide high-quality equipment that powers industries across Sri Lanka and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {workCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
