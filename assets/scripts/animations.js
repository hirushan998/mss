// Animation utilities and controllers for MSS Solutions

/**
 * Intersection Observer for scroll animations
 */
export class ScrollAnimationController {
  constructor(options = {}) {
    this.options = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
      ...options,
    }

    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), this.options)

    this.animatedElements = new Set()
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
        this.animateElement(entry.target)
        this.animatedElements.add(entry.target)
      }
    })
  }

  animateElement(element) {
    const animationType = element.dataset.animation || "fadeInUp"
    const delay = Number.parseInt(element.dataset.delay) || 0

    setTimeout(() => {
      element.classList.add("animate-" + animationType)
      element.style.opacity = "1"
      element.style.transform = "none"
    }, delay)
  }

  observe(selector) {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => {
      // Set initial state
      element.style.opacity = "0"
      element.style.transform = "translateY(30px)"
      this.observer.observe(element)
    })
  }

  unobserve(element) {
    this.observer.unobserve(element)
  }

  disconnect() {
    this.observer.disconnect()
  }
}

/**
 * Carousel animation controller
 */
export class CarouselController {
  constructor(container, options = {}) {
    this.container = container
    this.options = {
      autoPlay: true,
      interval: 5000,
      pauseOnHover: true,
      ...options,
    }

    this.currentIndex = 0
    this.items = container.querySelectorAll(".carousel-item")
    this.totalItems = this.items.length
    this.isPlaying = this.options.autoPlay
    this.intervalId = null

    this.init()
  }

  init() {
    this.createNavigation()
    this.bindEvents()
    if (this.isPlaying) {
      this.play()
    }
    this.updateCarousel()
  }

  createNavigation() {
    // Create previous/next buttons
    const prevBtn = document.createElement("button")
    prevBtn.className = "carousel-prev"
    prevBtn.innerHTML = "‹"
    prevBtn.addEventListener("click", () => this.prev())

    const nextBtn = document.createElement("button")
    nextBtn.className = "carousel-next"
    nextBtn.innerHTML = "›"
    nextBtn.addEventListener("click", () => this.next())

    // Create dots
    const dotsContainer = document.createElement("div")
    dotsContainer.className = "carousel-dots"

    for (let i = 0; i < this.totalItems; i++) {
      const dot = document.createElement("button")
      dot.className = "carousel-dot"
      dot.addEventListener("click", () => this.goTo(i))
      dotsContainer.appendChild(dot)
    }

    this.container.appendChild(prevBtn)
    this.container.appendChild(nextBtn)
    this.container.appendChild(dotsContainer)
  }

  bindEvents() {
    if (this.options.pauseOnHover) {
      this.container.addEventListener("mouseenter", () => this.pause())
      this.container.addEventListener("mouseleave", () => this.play())
    }
  }

  updateCarousel() {
    this.items.forEach((item, index) => {
      item.classList.toggle("active", index === this.currentIndex)
    })

    const dots = this.container.querySelectorAll(".carousel-dot")
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentIndex)
    })
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.totalItems
    this.updateCarousel()
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems
    this.updateCarousel()
  }

  goTo(index) {
    this.currentIndex = index
    this.updateCarousel()
  }

  play() {
    if (!this.isPlaying) return
    this.intervalId = setInterval(() => this.next(), this.options.interval)
  }

  pause() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }

  destroy() {
    this.pause()
    // Remove event listeners and DOM elements
  }
}

/**
 * 3D Carousel Controller
 */
export class Carousel3D {
  constructor(container, options = {}) {
    this.container = container
    this.options = {
      autoRotate: true,
      interval: 5000,
      perspective: 1000,
      ...options,
    }

    this.currentIndex = 0
    this.items = container.querySelectorAll(".carousel-3d-item")
    this.totalItems = this.items.length
    this.isRotating = this.options.autoRotate
    this.intervalId = null

    this.init()
  }

  init() {
    this.setupPerspective()
    this.positionItems()
    this.bindEvents()
    if (this.isRotating) {
      this.startAutoRotate()
    }
  }

  setupPerspective() {
    this.container.style.perspective = this.options.perspective + "px"
    this.container.style.transformStyle = "preserve-3d"
  }

  positionItems() {
    const angleStep = 360 / this.totalItems
    const radius = 300 // Distance from center

    this.items.forEach((item, index) => {
      const angle = angleStep * index
      const offset = index - this.currentIndex

      let transform = ""
      let zIndex = 0
      let opacity = 0.7

      if (offset === 0) {
        // Active item
        transform = "translateX(0) translateZ(0) rotateY(0deg) scale(1)"
        zIndex = 30
        opacity = 1
      } else if (offset === -1 || (this.currentIndex === 0 && index === this.totalItems - 1)) {
        // Previous item
        transform = "translateX(-80%) translateZ(-200px) rotateY(35deg) scale(0.8)"
        zIndex = 20
        opacity = 0.7
      } else if (offset === 1 || (this.currentIndex === this.totalItems - 1 && index === 0)) {
        // Next item
        transform = "translateX(80%) translateZ(-200px) rotateY(-35deg) scale(0.8)"
        zIndex = 20
        opacity = 0.7
      } else {
        // Hidden items
        transform = "translateX(0) translateZ(-400px) rotateY(0deg) scale(0.6)"
        zIndex = 10
        opacity = 0.3
      }

      item.style.transform = transform
      item.style.zIndex = zIndex
      item.style.opacity = opacity
      item.style.transition = "all 0.7s ease-in-out"
    })
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.totalItems
    this.positionItems()
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems
    this.positionItems()
  }

  goTo(index) {
    this.currentIndex = index
    this.positionItems()
  }

  startAutoRotate() {
    this.intervalId = setInterval(() => this.next(), this.options.interval)
  }

  stopAutoRotate() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }

  bindEvents() {
    // Add touch/swipe support
    let startX = 0
    let startY = 0

    this.container.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    })

    this.container.addEventListener("touchend", (e) => {
      const endX = e.changedTouches[0].clientX
      const endY = e.changedTouches[0].clientY
      const diffX = startX - endX
      const diffY = startY - endY

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          this.next()
        } else {
          this.prev()
        }
      }
    })

    // Pause on hover
    this.container.addEventListener("mouseenter", () => this.stopAutoRotate())
    this.container.addEventListener("mouseleave", () => {
      if (this.isRotating) this.startAutoRotate()
    })
  }
}

/**
 * Parallax scroll effect
 */
export class ParallaxController {
  constructor() {
    this.elements = []
    this.isScrolling = false
    this.bindEvents()
  }

  addElement(element, speed = 0.5) {
    this.elements.push({ element, speed })
  }

  bindEvents() {
    window.addEventListener("scroll", () => {
      if (!this.isScrolling) {
        requestAnimationFrame(() => this.updateParallax())
        this.isScrolling = true
      }
    })
  }

  updateParallax() {
    const scrollTop = window.pageYOffset

    this.elements.forEach(({ element, speed }) => {
      const yPos = -(scrollTop * speed)
      element.style.transform = `translateY(${yPos}px)`
    })

    this.isScrolling = false
  }
}

/**
 * Typing animation effect
 */
export class TypingAnimation {
  constructor(element, options = {}) {
    this.element = element
    this.options = {
      speed: 50,
      deleteSpeed: 30,
      pauseTime: 1000,
      loop: true,
      ...options,
    }

    this.texts = this.options.texts || [element.textContent]
    this.currentTextIndex = 0
    this.currentCharIndex = 0
    this.isDeleting = false
    this.isPaused = false

    this.element.textContent = ""
    this.start()
  }

  start() {
    this.type()
  }

  type() {
    const currentText = this.texts[this.currentTextIndex]

    if (this.isDeleting) {
      this.element.textContent = currentText.substring(0, this.currentCharIndex - 1)
      this.currentCharIndex--
    } else {
      this.element.textContent = currentText.substring(0, this.currentCharIndex + 1)
      this.currentCharIndex++
    }

    let typeSpeed = this.isDeleting ? this.options.deleteSpeed : this.options.speed

    if (!this.isDeleting && this.currentCharIndex === currentText.length) {
      typeSpeed = this.options.pauseTime
      this.isDeleting = true
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false
      this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length
      typeSpeed = 500
    }

    setTimeout(() => this.type(), typeSpeed)
  }
}

/**
 * Stagger animation utility
 */
export function staggerAnimation(elements, animationClass, delay = 100) {
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add(animationClass)
    }, index * delay)
  })
}

/**
 * Morphing shapes animation
 */
export class MorphingShapes {
  constructor(svg, paths) {
    this.svg = svg
    this.paths = paths
    this.currentIndex = 0
    this.path = svg.querySelector("path")
  }

  morphTo(index, duration = 1000) {
    if (index >= this.paths.length) return

    const targetPath = this.paths[index]
    this.animatePath(targetPath, duration)
    this.currentIndex = index
  }

  animatePath(targetPath, duration) {
    const startPath = this.path.getAttribute("d")
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Simple interpolation (in real implementation, use proper SVG path interpolation)
      if (progress === 1) {
        this.path.setAttribute("d", targetPath)
      } else {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  startLoop(interval = 3000) {
    setInterval(() => {
      const nextIndex = (this.currentIndex + 1) % this.paths.length
      this.morphTo(nextIndex)
    }, interval)
  }
}

// Initialize animations when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize scroll animations
  const scrollController = new ScrollAnimationController()
  scrollController.observe("[data-animation]")

  // Initialize 3D carousels
  const carousel3DElements = document.querySelectorAll(".carousel-3d")
  carousel3DElements.forEach((element) => {
    new Carousel3D(element)
  })

  // Initialize parallax elements
  const parallaxController = new ParallaxController()
  document.querySelectorAll("[data-parallax]").forEach((element) => {
    const speed = Number.parseFloat(element.dataset.parallax) || 0.5
    parallaxController.addElement(element, speed)
  })
})
