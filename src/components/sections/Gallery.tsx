'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { getAssetPath } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'

const galleryImages = [
  { src: '/assets/work1.webp', alt: 'Kitchen remodeling project' },
  { src: '/assets/work2.webp', alt: 'Bathroom renovation project' },
  { src: '/assets/work3.webp', alt: 'Home improvement project' },
  { src: '/assets/work4.webp', alt: 'Interior remodeling project' },
  { src: '/assets/work5.webp', alt: 'Exterior facelift project' },
  { src: '/assets/work6.webp', alt: 'Complete renovation project' },
].map(img => ({ ...img, src: getAssetPath(img.src) }))

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
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

      // Gallery items stagger animation
      if (gridRef.current) {
        const items = gridRef.current.querySelectorAll('.gallery-item')
        gsap.fromTo(
          items,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 75%',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative py-24 sm:py-32 bg-monster-pale overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-monster-purple/20 to-transparent" />
      <div className="absolute -top-40 left-1/4 w-80 h-80 bg-monster-light/30 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-monster-soft/20 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-monster-purple/10 rounded-full text-monster-purple text-sm font-semibold mb-4">
            Our Portfolio
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-monster-dark mb-6">
            Recent
            <span className="gradient-text"> Work</span>
          </h2>
          <p className="text-monster-gray text-lg">
            Browse through our recent projects and see the quality craftsmanship we bring to every home in Fort Wayne.
          </p>
        </div>

        {/* Gallery Grid - 3 per row, bigger images */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-monster-purple/10 border border-monster-purple/10"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-monster-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-monster-purple/40 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-monster-gray mb-4">
            Want to see your home transformed like these?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-monster-purple font-semibold hover:text-monster-deep transition-colors"
          >
            Get your free quote today
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
