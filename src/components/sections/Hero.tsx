'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import { getAssetPath } from '@/lib/utils'
import { ArrowDown, Hammer, Paintbrush, Home, Wrench, Ruler, HardHat, PaintBucket, Drill } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const titleLine1Ref = useRef<HTMLSpanElement>(null)
  const titleLine2Ref = useRef<HTMLSpanElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const floatingIconsRef = useRef<HTMLDivElement>(null)
  const peekingImageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main timeline
      const tl = gsap.timeline({ delay: 0.5 })

      // Tagline words animation - "Work hard, have fun, do it right"
      if (taglineRef.current) {
        const words = taglineRef.current.querySelectorAll('.tagline-word')
        tl.fromTo(
          words,
          { opacity: 0, y: 40, rotateX: -90 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.7)',
          }
        )
      }

      // Title line 1 animation - letter by letter reveal
      if (titleLine1Ref.current) {
        const chars = titleLine1Ref.current.querySelectorAll('.title-char')
        tl.fromTo(
          chars,
          { opacity: 0, y: 50, rotateY: -90 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.6,
            stagger: 0.03,
            ease: 'back.out(1.7)',
          },
          '-=0.4'
        )
      }

      // Title line 2 animation - gradient text with scale
      if (titleLine2Ref.current) {
        tl.fromTo(
          titleLine2Ref.current,
          { opacity: 0, scale: 0.5, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: 'elastic.out(1, 0.5)',
          },
          '-=0.3'
        )
      }

      // Subtitle animation
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.4'
      )

      // CTA buttons animation
      if (ctaRef.current) {
        const buttons = ctaRef.current.querySelectorAll('a')
        tl.fromTo(
          buttons,
          { opacity: 0, y: 20, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'back.out(1.7)',
          },
          '-=0.4'
        )
      }

      // Floating icons animation with mouse interactivity
      if (floatingIconsRef.current) {
        const icons = floatingIconsRef.current.querySelectorAll('.floating-icon')
        icons.forEach((icon, i) => {
          // Base floating animation
          gsap.to(icon, {
            y: '+=25',
            rotation: i % 2 === 0 ? 15 : -15,
            duration: 2.5 + i * 0.4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.2,
          })

          // Mouse enter - scale up and glow
          icon.addEventListener('mouseenter', () => {
            gsap.to(icon, {
              scale: 1.3,
              opacity: 0.8,
              duration: 0.3,
              ease: 'back.out(1.7)',
            })
          })

          // Mouse leave - return to normal
          icon.addEventListener('mouseleave', () => {
            gsap.to(icon, {
              scale: 1,
              opacity: 1,
              duration: 0.3,
              ease: 'power2.out',
            })
          })
        })
      }

      // Continuous subtle pulse on gradient text
      gsap.to('.gradient-text-animated', {
        backgroundPosition: '200% center',
        duration: 3,
        repeat: -1,
        ease: 'linear',
      })

      // Scroll indicator animation
      gsap.to('.scroll-indicator', {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      // Peeking logo slide-up animation
      if (peekingImageRef.current) {
        gsap.to(peekingImageRef.current, {
          y: '10%',
          duration: 1.2,
          ease: 'power3.out',
          delay: 2,
        })
      }

    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Split text into characters for animation
  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span
        key={i}
        className="title-char inline-block"
        style={{ perspective: '1000px' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-monster-pale to-monster-light/30"
    >
      {/* Very low opacity background photo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src={getAssetPath('/assets/work4.webp')}
          alt=""
          fill
          className="object-cover opacity-[0.18]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80" />
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23663e80%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse-slow" />
      </div>

      {/* Floating Construction Icons - More icons, interactive */}
      <div ref={floatingIconsRef} className="absolute inset-0 pointer-events-auto">
        {/* Top row */}
        <div className="floating-icon absolute top-[15%] left-[8%] text-monster-soft/40 cursor-pointer transition-colors hover:text-monster-purple/60">
          <Hammer size={70} />
        </div>
        <div className="floating-icon absolute top-[20%] left-[25%] text-monster-purple/15 cursor-pointer transition-colors hover:text-monster-purple/50">
          <Ruler size={50} />
        </div>
        <div className="floating-icon absolute top-[12%] right-[20%] text-monster-light/60 cursor-pointer transition-colors hover:text-monster-purple/60">
          <Paintbrush size={55} />
        </div>
        <div className="floating-icon absolute top-[25%] right-[8%] text-monster-soft/30 cursor-pointer transition-colors hover:text-monster-purple/50">
          <HardHat size={65} />
        </div>

        {/* Middle row */}
        <div className="floating-icon absolute top-[45%] left-[5%] text-monster-purple/20 cursor-pointer transition-colors hover:text-monster-purple/60">
          <Home size={90} />
        </div>
        <div className="floating-icon absolute top-[50%] right-[5%] text-monster-soft/35 cursor-pointer transition-colors hover:text-monster-purple/60">
          <PaintBucket size={60} />
        </div>

        {/* Bottom row */}
        <div className="floating-icon absolute bottom-[25%] left-[15%] text-monster-light/50 cursor-pointer transition-colors hover:text-monster-purple/60">
          <Wrench size={75} />
        </div>
        <div className="floating-icon absolute bottom-[20%] left-[35%] text-monster-purple/15 cursor-pointer transition-colors hover:text-monster-purple/50">
          <Drill size={45} />
        </div>
        <div className="floating-icon absolute bottom-[30%] right-[12%] text-monster-soft/40 cursor-pointer transition-colors hover:text-monster-purple/60">
          <Hammer size={60} className="rotate-45" />
        </div>
        <div className="floating-icon absolute bottom-[15%] right-[25%] text-monster-light/45 cursor-pointer transition-colors hover:text-monster-purple/50">
          <Ruler size={55} className="-rotate-45" />
        </div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-monster-light/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-monster-soft/30 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-monster-purple/5 rounded-full blur-[150px]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Tagline */}
        <div ref={taglineRef} className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
          {['Work hard', 'have fun', 'do it right'].map((word, i) => (
            <span
              key={i}
              className="tagline-word inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-monster-purple font-heading text-lg sm:text-xl font-semibold border border-monster-purple/20 shadow-sm"
              style={{ perspective: '1000px' }}
            >
              {word}
              {i < 2 && <span className="text-monster-purple/50 ml-2">,</span>}
            </span>
          ))}
        </div>

        {/* Main Title - Animated */}
        <h1
          ref={titleRef}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span ref={titleLine1Ref} className="text-monster-dark block">
            {splitText('Transform Your')}
          </span>
          <span
            ref={titleLine2Ref}
            className="gradient-text-animated block bg-gradient-to-r from-monster-purple via-monster-deep via-monster-purple to-monster-deep bg-[length:200%_auto] bg-clip-text text-transparent"
          >
            Dream Home
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-xl sm:text-2xl text-monster-gray max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Fort Wayne's trusted family-owned remodeling experts. From kitchens to complete home makeovers, we bring your vision to life with quality craftsmanship and care.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#contact"
            className="group relative overflow-hidden bg-gradient-to-r from-monster-purple to-monster-deep px-8 py-4 rounded-full font-heading font-bold text-lg text-white shadow-xl shadow-monster-purple/30 hover:shadow-monster-purple/50 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Your Free Quote
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-monster-deep to-monster-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link
            href="#services"
            className="group px-8 py-4 rounded-full font-heading font-bold text-lg text-monster-purple border-2 border-monster-purple/50 hover:border-monster-purple hover:bg-monster-purple/5 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Explore Services
              <ArrowDown size={20} className="transform group-hover:translate-y-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 text-monster-gray">
          {[
            { label: 'Licensed', icon: '✓' },
            { label: 'Woman-Owned', icon: '♀' },
            { label: 'Family Business', icon: '♥' },
            { label: 'Fort Wayne Local', icon: '⌂' },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-8 h-8 bg-monster-purple/10 rounded-full flex items-center justify-center text-monster-purple">
                {badge.icon}
              </span>
              <span className="text-sm sm:text-base">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-monster-gray z-20">
        <span className="text-sm">Scroll to explore</span>
        <ArrowDown size={24} className="text-monster-purple" />
      </div>

      {/* Peeking Logo */}
      <div
        ref={peekingImageRef}
        className="absolute bottom-0 left-1/2 md:left-[15%] transform -translate-x-1/2 md:translate-x-0 translate-y-full z-[60] pointer-events-none"
      >
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <Image
            src={getAssetPath('/assets/headerbottomimage.png')}
            alt="Monster Remodeling"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
