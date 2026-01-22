'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Common animation presets
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  duration: 0.8,
  ease: 'power3.out',
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  duration: 0.8,
  ease: 'power3.out',
}

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  duration: 0.8,
  ease: 'power3.out',
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  duration: 0.6,
  ease: 'back.out(1.7)',
}

export const staggerChildren = {
  stagger: 0.15,
  ease: 'power2.out',
}

// Utility function to create scroll-triggered animations
export const createScrollTrigger = (
  element: string | Element,
  animation: gsap.TweenVars,
  triggerOptions?: ScrollTrigger.Vars
) => {
  return gsap.to(element, {
    ...animation,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...triggerOptions,
    },
  })
}

// Text split animation utility
export const animateText = (element: Element, delay = 0) => {
  const text = element.textContent || ''
  element.textContent = ''

  const chars = text.split('').map((char, i) => {
    const span = document.createElement('span')
    span.textContent = char === ' ' ? '\u00A0' : char
    span.style.display = 'inline-block'
    span.style.opacity = '0'
    span.style.transform = 'translateY(20px)'
    element.appendChild(span)
    return span
  })

  gsap.to(chars, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.02,
    ease: 'power2.out',
    delay,
  })
}

export { gsap, ScrollTrigger }
