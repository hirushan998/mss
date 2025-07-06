// Utility functions for MSS Solutions website

/**
 * Smooth scroll to element
 * @param {string} selector - CSS selector for target element
 * @param {number} offset - Offset from top in pixels
 */
export function smoothScrollTo(selector, offset = 0) {
  const element = document.querySelector(selector)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @param {boolean} immediate - Execute immediately
 */
export function debounce(func, wait, immediate) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      timeout = null
      if (!immediate) func(...args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func(...args)
  }
}

/**
 * Throttle function to limit function calls
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 */
export function throttle(func, limit) {
  let inThrottle
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Check if element is in viewport
 * @param {Element} element - DOM element to check
 * @param {number} threshold - Threshold percentage (0-1)
 */
export function isInViewport(element, threshold = 0.1) {
  const rect = element.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight
  const windowWidth = window.innerWidth || document.documentElement.clientWidth

  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0

  return vertInView && horInView
}

/**
 * Animate counter from start to end value
 * @param {Element} element - Target element
 * @param {number} start - Start value
 * @param {number} end - End value
 * @param {number} duration - Animation duration in milliseconds
 * @param {Function} callback - Callback function when animation completes
 */
export function animateCounter(element, start, end, duration = 2000, callback) {
  const startTime = performance.now()
  const difference = end - start

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3)
    const current = Math.floor(start + difference * easeOut)

    element.textContent = current

    if (progress < 1) {
      requestAnimationFrame(updateCounter)
    } else {
      element.textContent = end
      if (callback) callback()
    }
  }

  requestAnimationFrame(updateCounter)
}

/**
 * Format number with commas
 * @param {number} num - Number to format
 */
export function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

/**
 * Generate unique ID
 * @param {string} prefix - Prefix for the ID
 */
export function generateId(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement("textarea")
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand("copy")
    document.body.removeChild(textArea)
    return true
  }
}

/**
 * Get device type
 */
export function getDeviceType() {
  const width = window.innerWidth
  if (width < 768) return "mobile"
  if (width < 1024) return "tablet"
  return "desktop"
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

/**
 * Load image with promise
 * @param {string} src - Image source URL
 */
export function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

/**
 * Lazy load images
 * @param {string} selector - CSS selector for images
 */
export function lazyLoadImages(selector = "img[data-src]") {
  const images = document.querySelectorAll(selector)

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

/**
 * Create ripple effect
 * @param {Event} event - Click event
 * @param {Element} element - Target element
 */
export function createRipple(event, element) {
  const circle = document.createElement("span")
  const diameter = Math.max(element.clientWidth, element.clientHeight)
  const radius = diameter / 2

  const rect = element.getBoundingClientRect()
  circle.style.width = circle.style.height = `${diameter}px`
  circle.style.left = `${event.clientX - rect.left - radius}px`
  circle.style.top = `${event.clientY - rect.top - radius}px`
  circle.classList.add("ripple")

  const ripple = element.getElementsByClassName("ripple")[0]
  if (ripple) {
    ripple.remove()
  }

  element.appendChild(circle)

  // Remove ripple after animation
  setTimeout(() => {
    circle.remove()
  }, 600)
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 */
export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

/**
 * Validate phone number format
 * @param {string} phone - Phone number to validate
 */
export function validatePhone(phone) {
  const re = /^[+]?[1-9][\d]{0,15}$/
  return re.test(phone.replace(/\s/g, ""))
}

/**
 * Format phone number
 * @param {string} phone - Phone number to format
 */
export function formatPhone(phone) {
  const cleaned = phone.replace(/\D/g, "")
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3]
  }
  return phone
}

/**
 * Get URL parameters
 * @param {string} param - Parameter name
 */
export function getUrlParameter(param) {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(param)
}

/**
 * Set URL parameter without page reload
 * @param {string} param - Parameter name
 * @param {string} value - Parameter value
 */
export function setUrlParameter(param, value) {
  const url = new URL(window.location)
  url.searchParams.set(param, value)
  window.history.pushState({}, "", url)
}

/**
 * Storage utilities
 */
export const storage = {
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.warn("localStorage not available")
    }
  },

  get(key) {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (e) {
      console.warn("localStorage not available")
      return null
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key)
    } catch (e) {
      console.warn("localStorage not available")
    }
  },

  clear() {
    try {
      localStorage.clear()
    } catch (e) {
      console.warn("localStorage not available")
    }
  },
}

/**
 * Cookie utilities
 */
export const cookies = {
  set(name, value, days = 7) {
    const expires = new Date()
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
  },

  get(name) {
    const nameEQ = name + "="
    const ca = document.cookie.split(";")
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === " ") c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  },

  remove(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  },
}
