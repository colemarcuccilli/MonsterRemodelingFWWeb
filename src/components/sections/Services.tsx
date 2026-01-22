'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { getAssetPath } from '@/lib/utils'
import {
  ChefHat,
  Bath,
  Home,
  PaintBucket,
  Wrench,
  Shield,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: ChefHat,
    title: 'Kitchen Remodels',
    description: 'The heart of your home deserves the best. Custom cabinets, stunning countertops, and layouts that work for your lifestyle.',
    features: ['Custom Cabinetry', 'Countertop Installation', 'Lighting Design', 'Appliance Integration'],
  },
  {
    icon: Bath,
    title: 'Bathroom Renovation',
    description: 'Transform your bathroom into a spa-like retreat with modern fixtures, beautiful tile work, and smart storage solutions.',
    features: ['Tile & Flooring', 'Vanity & Fixtures', 'Heated Floors', 'Walk-in Showers'],
  },
  {
    icon: Home,
    title: 'Whole House Remodel',
    description: 'Complete home transformations that maximize space, improve flow, and bring your entire vision to life.',
    features: ['Room Additions', 'Floor Plan Changes', 'Full Renovations', 'Historic Restoration'],
  },
  {
    icon: PaintBucket,
    title: 'Exterior Facelifts',
    description: 'Boost your curb appeal with stunning exterior upgrades. From siding to stone, we make your home stand out.',
    features: ['Siding Installation', 'Stone & Brick Work', 'Roofing', 'Porch & Deck'],
  },
  {
    icon: Wrench,
    title: 'Repairs & Restoration',
    description: 'Pre-sale updates, inspection repairs, and post-closing fixes. We handle the details so you can focus on moving forward.',
    features: ['Pre-Listing Upgrades', 'Inspection Response', 'Post-Closing Repairs', 'General Repairs'],
  },
  {
    icon: Shield,
    title: 'Insurance Claims',
    description: "Don't let insurance paperwork intimidate you. We're experienced with insurance claim projects and can help navigate the process.",
    features: ['Claim Assistance', 'Storm Damage', 'Water Damage', 'Documentation'],
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
        }
      )

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.service-card')
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
            },
          }
        )

        cards.forEach((card) => {
          const icon = card.querySelector('.service-icon')
          const features = card.querySelectorAll('.feature-item')

          card.addEventListener('mouseenter', () => {
            gsap.to(icon, {
              scale: 1.1,
              rotation: 5,
              duration: 0.3,
              ease: 'back.out(1.7)',
            })
            gsap.to(features, {
              x: 5,
              opacity: 1,
              duration: 0.3,
              stagger: 0.05,
              ease: 'power2.out',
            })
          })

          card.addEventListener('mouseleave', () => {
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: 'power2.out',
            })
            gsap.to(features, {
              x: 0,
              duration: 0.3,
              stagger: 0.03,
              ease: 'power2.out',
            })
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 sm:py-32 bg-white overflow-hidden"
    >
      {/* Low opacity background photo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src={getAssetPath('/assets/work5.webp')}
          alt=""
          fill
          className="object-cover opacity-[0.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90" />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-monster-purple/20 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-monster-light/30 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-monster-soft/20 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-monster-purple/10 rounded-full text-monster-purple text-sm font-semibold mb-4">
            What We Do
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-monster-dark mb-6">
            Services That
            <span className="gradient-text"> Transform Homes</span>
          </h2>
          <p className="text-monster-gray text-lg">
            From small updates to complete renovations, we bring expertise and passion to every project. Whatever you need in Fort Wayne and surrounding areas, we can help!
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="service-card group relative bg-white p-8 rounded-2xl border border-monster-purple/10 hover:border-monster-purple/30 hover:shadow-xl hover:shadow-monster-purple/10 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-monster-pale/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="service-icon w-16 h-16 bg-gradient-to-br from-monster-purple to-monster-deep rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-monster-purple/20">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-monster-dark mb-3 group-hover:text-monster-purple transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-monster-gray mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="feature-item flex items-center gap-2 text-monster-muted text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-monster-purple rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-monster-purple font-semibold group-hover:gap-3 transition-all">
                    <span>Learn more</span>
                    <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-monster-light/20 rounded-full blur-2xl group-hover:bg-monster-purple/10 transition-colors" />
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-monster-gray mb-6">
            Not sure what you need? We offer free consultations to help you plan your project.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-monster-purple to-monster-deep px-8 py-4 rounded-full font-heading font-bold text-white shadow-lg shadow-monster-purple/30 hover:shadow-monster-purple/50 transition-all duration-300"
          >
            Schedule Free Consultation
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
