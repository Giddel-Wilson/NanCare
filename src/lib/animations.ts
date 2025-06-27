// Animation utilities for NanCare website
let scrollObserver: IntersectionObserver | null = null;

export function initScrollAnimations() {
  // Clean up existing observer
  if (scrollObserver) {
    scrollObserver.disconnect();
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Wait a bit for DOM to be ready, then observe elements
  setTimeout(() => {
    const animatedElements = document.querySelectorAll('.fade-in-on-scroll');
    animatedElements.forEach(el => {
      // Remove any existing visible class and re-observe
      el.classList.remove('visible');
      if (scrollObserver) {
        scrollObserver.observe(el);
      }
    });
  }, 100);
}

export function reinitializeAnimations() {
  // Force re-initialization of animations
  initScrollAnimations();
}

export function addStaggeredAnimation(elements: NodeListOf<Element> | Element[], baseDelay = 100) {
  elements.forEach((element, index) => {
    if (element instanceof HTMLElement) {
      element.style.animationDelay = `${index * baseDelay}ms`;
    }
  });
}

export function createTypewriterEffect(element: Element, text: string, speed = 50) {
  let i = 0;
  element.textContent = '';
  
  function typeWriter() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  
  typeWriter();
}

export function animateCountUp(element: Element, target: number, duration = 2000) {
  const start = 0;
  const startTime = Date.now();
  
  function updateCount() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth animation
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(easeOut * target);
    
    element.textContent = current.toLocaleString();
    
    if (progress < 1) {
      requestAnimationFrame(updateCount);
    }
  }
  
  updateCount();
}

// Initialize on page load
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
}
