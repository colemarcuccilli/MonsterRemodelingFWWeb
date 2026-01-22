'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { getAssetPath } from '@/lib/utils'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (footerRef.current) {
      const elements = footerRef.current.querySelectorAll('.footer-animate')

      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
          },
        }
      )
    }
  }, [])

  return (
    <footer ref={footerRef} className="bg-white border-t border-monster-purple/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="footer-animate">
            <Link href="#home" className="flex items-center gap-3 mb-6">
              <Image
                src={getAssetPath('/assets/MonsterRemodelingLogo.webp')}
                alt="Monster Remodeling"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div>
                <span className="font-heading text-xl font-bold text-monster-dark">Monster</span>
                <span className="font-heading text-xl font-bold text-monster-purple ml-1">Remodeling</span>
              </div>
            </Link>
            <p className="text-monster-gray mb-6">
              Family-owned, woman-owned licensed general contractor serving Fort Wayne, IN and surrounding areas.
            </p>
            <p className="text-monster-purple font-heading text-lg italic">
              "Work hard, have fun, do it right"
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-animate">
            <h4 className="font-heading text-lg font-bold text-monster-dark mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { href: '#home', label: 'Home' },
                { href: '#services', label: 'Services' },
                { href: '#gallery', label: 'Gallery' },
                { href: '#about', label: 'About Us' },
                { href: '#testimonials', label: 'Testimonials' },
                { href: '#contact', label: 'Free Quote' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-monster-gray hover:text-monster-purple transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="footer-animate">
            <h4 className="font-heading text-lg font-bold text-monster-dark mb-6">Services</h4>
            <ul className="space-y-3 text-monster-gray">
              <li>Kitchen Remodeling</li>
              <li>Bathroom Renovation</li>
              <li>Whole House Remodels</li>
              <li>Exterior Facelifts</li>
              <li>Room Additions</li>
              <li>Insurance Claims</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-animate">
            <h4 className="font-heading text-lg font-bold text-monster-dark mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="tel:2602860601"
                className="flex items-center gap-3 text-monster-gray hover:text-monster-purple transition-colors group"
              >
                <div className="w-10 h-10 bg-monster-pale rounded-lg flex items-center justify-center group-hover:bg-monster-purple/10 transition-colors">
                  <Phone size={18} className="text-monster-purple" />
                </div>
                <span>260.286.0601</span>
              </a>
              <a
                href="mailto:info@monsterremodel.com"
                className="flex items-center gap-3 text-monster-gray hover:text-monster-purple transition-colors group"
              >
                <div className="w-10 h-10 bg-monster-pale rounded-lg flex items-center justify-center group-hover:bg-monster-purple/10 transition-colors">
                  <Mail size={18} className="text-monster-purple" />
                </div>
                <span>info@monsterremodel.com</span>
              </a>
              <div className="flex items-center gap-3 text-monster-gray">
                <div className="w-10 h-10 bg-monster-pale rounded-lg flex items-center justify-center">
                  <MapPin size={18} className="text-monster-purple" />
                </div>
                <span>Fort Wayne, IN</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-monster-pale rounded-lg flex items-center justify-center hover:bg-monster-purple hover:text-white transition-colors group"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-monster-purple group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-monster-pale rounded-lg flex items-center justify-center hover:bg-monster-purple hover:text-white transition-colors group"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-monster-purple group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-animate mt-12 pt-8 border-t border-monster-purple/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-monster-muted text-sm">
            &copy; {new Date().getFullYear()} Monster Remodeling. All rights reserved.
          </p>
          <p className="text-monster-muted text-sm">
            Licensed General Contractor | Fort Wayne, IN
          </p>
        </div>
      </div>
    </footer>
  )
}
