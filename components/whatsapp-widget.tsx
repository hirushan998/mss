"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppWidget() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple = {
      id: Date.now(),
      x,
      y,
    }

    setRipples((prev) => [...prev, newRipple])

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
    }, 600)

    // Toggle expanded state or open WhatsApp
    if (isExpanded) {
      // Open WhatsApp with pre-filled message
      const message = encodeURIComponent(
        "Hello! I'm interested in learning more about MSS Solutions' technology services. Could you please provide more information?",
      )
      const phoneNumber = "1234567890" // Replace with actual WhatsApp business number
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
    } else {
      setIsExpanded(true)
      // Auto-collapse after 5 seconds
      setTimeout(() => setIsExpanded(false), 5000)
    }
  }

  return (
    <div className="fixed bottom-6 right-0 z-50">
      {/* Expanded Message */}
      <div
        className={`mb-4 transform transition-all duration-300 ${
          isExpanded ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-4 max-w-xs relative">
          {/* Close button */}
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close WhatsApp message"
          >
            <X className="h-4 w-4 text-gray-400" />
          </button>

          {/* Avatar */}
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-3">
                <p className="text-sm text-gray-800 leading-relaxed">
                  👋 Hi there! Need help with technology solutions? I'm here to assist you!
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-1">MSS Solutions Team</p>
            </div>
          </div>

          {/* Typing indicator */}
          <div className="flex items-center space-x-1 mt-3 ml-13">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
            </div>
            <span className="text-xs text-gray-500">Click to chat</span>
          </div>

          {/* Speech bubble tail */}
          <div className="absolute bottom-0 right-8 transform translate-y-full">
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="relative w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 overflow-hidden group"
        aria-label="Contact us on WhatsApp"
      >
        {/* Ripple effects */}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute bg-white/30 rounded-full animate-ping"
            style={{
              left: ripple.x - 10,
              top: ripple.y - 10,
              width: 20,
              height: 20,
              animationDuration: "0.6s",
            }}
          />
        ))}

        {/* Pulse effect */}
        <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-75"></div>

        {/* Icon */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <MessageCircle className="h-7 w-7 text-white" />
        </div>

        {/* Hover effect */}
        <div className="absolute inset-0 bg-white/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
      </button>

      {/* Floating animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
