# Animation System Documentation

## Overview

The MSS Solutions website uses a comprehensive animation system built with CSS keyframes, JavaScript controllers, and React components to create engaging user experiences.

## Animation Types

### 1. Scroll Animations
- **fadeInUp** - Elements fade in while moving up
- **fadeInLeft** - Elements fade in from the left
- **fadeInRight** - Elements fade in from the right
- **fadeInScale** - Elements fade in with scaling effect
- **fadeInRotate** - Elements fade in with rotation

### 2. Hover Effects
- **hover-lift** - Lifts element on hover with shadow
- **hover-scale** - Scales element on hover
- **hover-rotate** - Rotates element on hover
- **hover-glow** - Adds glow effect on hover

### 3. Loading Animations
- **spin** - Continuous rotation
- **pulse** - Pulsing effect
- **bounce** - Bouncing motion
- **float** - Floating up and down

### 4. 3D Effects
- **flip** - 3D flip animation
- **flipInX** - 3D flip entrance
- **carousel-3d** - 3D carousel rotation

## JavaScript Controllers

### ScrollAnimationController
Handles scroll-triggered animations using Intersection Observer.

\`\`\`javascript
const controller = new ScrollAnimationController({
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

controller.observe('[data-animation]');
\`\`\`

### Carousel3D
Creates 3D carousel effects with perspective and transforms.

\`\`\`javascript
const carousel = new Carousel3D(container, {
  autoRotate: true,
  interval: 5000,
  perspective: 1000
});
\`\`\`

### ParallaxController
Manages parallax scrolling effects.

\`\`\`javascript
const parallax = new ParallaxController();
parallax.addElement(element, 0.5); // 0.5 = speed multiplier
\`\`\`

## React Components

### AnimatedSection
Wrapper component for scroll animations.

\`\`\`jsx
<AnimatedSection animation="fadeInUp" delay={200}>
  <div>Content to animate</div>
</AnimatedSection>
\`\`\`

### WhatsAppWidget
Animated WhatsApp widget with ripple effects.

\`\`\`jsx
<WhatsAppWidget />
\`\`\`

## CSS Classes

### Animation Utilities
\`\`\`css
.animate-fadeInUp { animation: fadeInUp 0.6s ease-out; }
.animate-fadeInLeft { animation: fadeInLeft 0.6s ease-out; }
.animate-bounce { animation: bounce 2s infinite; }
.animate-pulse { animation: pulse 2s infinite; }
\`\`\`

### Delay Classes
\`\`\`css
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-500 { animation-delay: 0.5s; }
\`\`\`

### Duration Classes
\`\`\`css
.duration-300 { animation-duration: 0.3s; }
.duration-500 { animation-duration: 0.5s; }
.duration-1000 { animation-duration: 1s; }
\`\`\`

## Performance Optimization

### GPU Acceleration
- Use `transform` and `opacity` for animations
- Avoid animating layout properties
- Use `will-change` sparingly

### Reduced Motion
\`\`\`css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
\`\`\`

### Intersection Observer
- Efficient scroll detection
- Automatic cleanup
- Threshold-based triggering

## Best Practices

1. **Use CSS for simple animations** - Better performance
2. **JavaScript for complex interactions** - More control
3. **Respect user preferences** - Check `prefers-reduced-motion`
4. **Optimize for mobile** - Lighter animations on touch devices
5. **Test performance** - Monitor frame rates and CPU usage

## Troubleshooting

### Common Issues
- **Animations not triggering**: Check Intersection Observer thresholds
- **Janky animations**: Use GPU-accelerated properties
- **Memory leaks**: Ensure proper cleanup of observers and intervals

### Debug Tools
\`\`\`javascript
// Enable animation debugging
window.MSS_DEBUG_ANIMATIONS = true;

// Log animation events
controller.onAnimate = (element) => {
  console.log('Animating:', element);
};
\`\`\`

## Browser Support

- **Modern browsers**: Full support
- **IE11**: Fallback to basic transitions
- **Mobile**: Optimized for touch devices
- **Reduced motion**: Automatic detection and respect
