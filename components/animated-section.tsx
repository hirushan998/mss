"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeInScale" | "fadeInRotate"
  delay?: number
  threshold?: number
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold])

  const getAnimationClasses = () => {
    const baseClasses = "transform transition-all duration-1000 ease-out"

    switch (animation) {
      case "fadeInUp":
        return `${baseClasses} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`
      case "fadeInLeft":
        return `${baseClasses} ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`
      case "fadeInRight":
        return `${baseClasses} ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`
      case "fadeInScale":
        return `${baseClasses} ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`
      case "fadeInRotate":
        return `${baseClasses} ${isVisible ? "rotate-0 opacity-100" : "rotate-3 opacity-0"}`
      default:
        return `${baseClasses} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`
    }
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}
