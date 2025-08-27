import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Millennium Sourcing Solutions</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner for global sourcing, engineering solutions, and comprehensive consultancy services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#history" className="text-gray-300 hover:text-white transition-colors">
                  History
                </a>
              </li>
              <li>
                <a href="#values" className="text-gray-300 hover:text-white transition-colors">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="#brands" className="text-gray-300 hover:text-white transition-colors">
                  Our Brands
                </a>
              </li>
              <li>
                <a href="#work" className="text-gray-300 hover:text-white transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#clients" className="text-gray-300 hover:text-white transition-colors">
                  Clients
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-gray-300 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  113, Level 3, Ward City Commercial Complex,
                  <br />
                  Queens Mary Road, Gampaha, Sri Lanka.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-300 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+94 11 700 7017</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-300 flex-shrink-0" />
                <p className="text-gray-300 text-sm">contact@millenniumsourcing.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Millennium Sourcing Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
