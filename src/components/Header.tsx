'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import { getAssetPath } from '@/lib/utils'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Free Quote' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initial animation
    const tl = gsap.timeline({ delay: 0.2 })

    tl.fromTo(
      logoRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
    )

    if (navRef.current) {
      const links = navRef.current.querySelectorAll('a')
      tl.fromTo(
        links,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
        '-=0.4'
      )
    }

    // Scroll listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.to(mobileMenuRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        })
        const links = mobileMenuRef.current.querySelectorAll('a')
        gsap.fromTo(
          links,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, ease: 'power2.out', delay: 0.1 }
        )
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
        })
      }
    }
  }, [isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-monster-purple/5'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      {/* Super low opacity background image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src={getAssetPath('/assets/work1.webp')}
          alt=""
          fill
          className="object-cover opacity-[0.03]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div ref={logoRef} className="flex-shrink-0">
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src={getAssetPath('/assets/MonsterRemodelingLogo.webp')}
                  alt="Monster Remodeling"
                  width={72}
                  height={72}
                  className="rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -inset-1 bg-monster-purple/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <span className="font-heading text-xl font-bold text-monster-dark">Monster</span>
                <span className="font-heading text-xl font-bold text-monster-purple ml-1">Remodeling</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-monster-gray hover:text-monster-purple font-medium transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-monster-purple transform -translate-x-1/2 transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
          </nav>

          {/* CTA Button & Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:2602860601"
              className="flex items-center gap-2 text-monster-purple hover:text-monster-deep transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">260.286.0601</span>
            </a>
            <Link
              href="#contact"
              className="relative overflow-hidden bg-gradient-to-r from-monster-purple to-monster-deep px-6 py-2.5 rounded-full font-semibold text-white shadow-lg shadow-monster-purple/30 hover:shadow-monster-purple/50 transition-all duration-300 group"
            >
              <span className="relative z-10">Get Free Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-monster-deep to-monster-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-monster-dark hover:text-monster-purple transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={mobileMenuRef}
          className="lg:hidden overflow-hidden h-0 opacity-0 bg-white"
        >
          <nav className="py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 text-monster-gray hover:text-monster-purple hover:bg-monster-pale rounded-lg transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 px-4 space-y-3">
              <a
                href="tel:2602860601"
                className="flex items-center gap-2 text-monster-purple"
              >
                <Phone size={18} />
                <span className="font-medium">260.286.0601</span>
              </a>
              <Link
                href="#contact"
                onClick={handleLinkClick}
                className="block text-center bg-gradient-to-r from-monster-purple to-monster-deep px-6 py-3 rounded-full font-semibold text-white"
              >
                Get Free Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
