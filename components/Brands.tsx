import Image from "next/image"

export default function Brands() {
  const brands = [
    { name: "SHPI", logo: "/brands/shpi.png", category: "Industrial Solutions" },
    { name: "GuardAir", logo: "/brands/guardair.png", category: "Pneumatic Tools" },
    { name: "AFT Instrument", logo: "/brands/aft.png", category: "Instrumentation" },
    { name: "CKD", logo: "/brands/ckd.png", category: "Automation Components" },
    { name: "Fiam", logo: "/brands/fiam.png", category: "People & Solutions" },
    { name: "WIKA", logo: "/brands/wika.jpg", category: "Measurement Technology" },
    { name: "Rotolok", logo: "/brands/rotolok.jpg", category: "Control Systems" },
    { name: "Rotex", logo: "/brands/rotex.jpg", category: "Engineering Solutions" },
    { name: "AK-Tool", logo: "/brands/saitama.png", category: "Precision Tools" },
    { name: "RIH Right Pneumatic", logo: "/brands/rih.png", category: "Pneumatic Systems" },
    { name: "Metal Work", logo: "/brands/metalwork.jpg", category: "Pneumatic Components" },
    { name: "Airmax", logo: "/brands/airmax.gif", category: "Pneumatic Products" },
    { name: "KITZ", logo: "/brands/kitz.jpg", category: "Valve Technology" },
    { name: "OMRON", logo: "/brands/omron.png", category: "Industrial Automation" },
    { name: "IMI", logo: "/brands/imi.jpg", category: "Precision Engineering" },
    { name: "URYU", logo: "/brands/uryu.png", category: "Power Tools" },
    { name: "YASKAWA", logo: "/brands/yaskawa.jpg", category: "Motion Control" },
    { name: "PISCO", logo: "/brands/pisco.jpg", category: "Pneumatic Fittings" },
    { name: "KOGANEI", logo: "/brands/koganei.jpg", category: "Pneumatic Equipment" },
    { name: "AIRA", logo: "/brands/aira.jpg", category: "Valve Automation" },
    { name: "BSK Fluid Technology", logo: "/brands/bsk.png", category: "Fluid Technology" },
    { name: "ANEST IWATA", logo: "/brands/anest.png", category: "Compressor Technology" },
    { name: "Tech Source", logo: "/brands/tech-source.png", category: "Technical Solutions" },
    { name: "Mitsubishi Electric", logo: "/brands/mitsubishi.jpg", category: "Industrial Electronics" },
    { name: "Mitutoyo", logo: "/brands/mitutoyo.png", category: "Precision Measurement" },
  ]


  return (
    <section id="brands" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Main Brands</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We partner with world-leading manufacturers to bring you the highest quality industrial solutions. Our
            extensive brand portfolio ensures we can meet any industrial requirement with proven, reliable products.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group bg-gray-50 hover:bg-white rounded-lg p-6 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-200"
            >
              <div className="relative h-16 mb-4 flex items-center justify-center">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain filter transition-all duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                  {brand.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Looking for a Specific Brand?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Don't see the brand you're looking for? We work with many additional manufacturers and can source
              specialized products to meet your exact requirements.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
