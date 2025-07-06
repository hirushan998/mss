export function Partners() {
  const partners = [
    { name: "Microsoft", logo: "MS" },
    { name: "Amazon", logo: "AWS" },
    { name: "Google", logo: "GCP" },
    { name: "IBM", logo: "IBM" },
    { name: "Oracle", logo: "ORC" },
    { name: "SAP", logo: "SAP" },
    { name: "Salesforce", logo: "SF" },
    { name: "Adobe", logo: "ADO" },
    { name: "Cisco", logo: "CSC" },
    { name: "VMware", logo: "VM" },
    { name: "Dell", logo: "DL" },
    { name: "HP", logo: "HP" },
  ]

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry-leading technology partners to deliver the best solutions and services to our
            clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 group"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                  <span className="text-white font-bold text-sm">{partner.logo}</span>
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
