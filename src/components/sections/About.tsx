'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Heart, Award, Users, Sparkles } from 'lucide-react'

const stats = [
  { icon: Heart, value: 'Family', label: 'Owned Business' },
  { icon: Award, value: 'Licensed', label: 'General Contractor' },
  { icon: Users, value: 'Customer', label: 'Focused Experience' },
  { icon: Sparkles, value: 'Quality', label: 'Craftsmanship' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation first (it's above on this layout)
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
          },
        }
      )

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
          },
        }
      )

      // Stats animation
      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll('.stat-item')
        gsap.fromTo(
          statItems,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
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
      id="about"
      className="relative py-24 sm:py-32 bg-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-monster-purple/20 to-transparent" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-monster-light/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-monster-soft/20 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-monster-purple/10 rounded-full text-monster-purple text-sm font-semibold mb-6">
            Nice to Meet You!
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-monster-dark mb-6">
            Meet Lee, Your
            <span className="gradient-text"> Remodeling Partner</span>
          </h2>
        </div>

        {/* Wide Family Photo */}
        <div ref={imageRef} className="relative mb-16">
          <div className="relative aspect-[16/9] sm:aspect-[2/1] rounded-2xl overflow-hidden border border-monster-purple/20 shadow-xl shadow-monster-purple/10">
            <Image
              src="/assets/FamilyPhotoWide.webp"
              alt="Lee and family - Monster Remodeling"
              fill
              className="object-cover"
              priority
            />
            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-monster-dark/60 via-transparent to-transparent" />

            {/* Location badge */}
            <div className="absolute bottom-4 right-4 bg-monster-purple/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
              <span className="text-white text-sm font-medium">Fort Wayne, IN</span>
            </div>
          </div>

        </div>

        {/* Content */}
        <div ref={contentRef} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6 text-monster-gray leading-relaxed">
              <p>
                Hi! I'm Lee, owner of Monster Remodeling. I live in Fort Wayne with my 4 beautiful children and 3 kitties. We love spending time outside, going to the lake, singing and participating in musical theater around town.
              </p>

              <p>
                I founded Monster Remodeling because I noticed there weren't a lot of good quality licensed general contractors who focus on the <span className="text-monster-purple font-semibold">customer experience</span>. I love houses, and I love helping people, so marrying those two interests makes for a pretty fun career!
              </p>
            </div>

            <div className="space-y-6 text-monster-gray leading-relaxed">
              <p>
                Whether it's a kitchen, bathroom, laundry room remodel, a new room addition, new flooring, paint, or a full exterior facelift and a new roof—it doesn't matter to me. <span className="text-monster-dark font-semibold">I just love helping people fall in love with their homes again!</span>
              </p>

              <p className="text-monster-muted italic">
                We also help real estate agents and clients with pre-listing upgrades, inspection response work, and post-closing repairs. And insurance claims don't scare us off!
              </p>
            </div>
          </div>

          {/* Personal touch quote */}
          <blockquote className="text-center py-8 border-t border-b border-monster-purple/20">
            <p className="text-2xl text-monster-dark font-heading italic mb-4">
              "I look forward to working with you on your dream project!"
            </p>
            <footer className="text-monster-purple font-semibold">— Lee, Owner</footer>
          </blockquote>
        </div>

        {/* Stats Row */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="stat-item text-center p-6 rounded-2xl bg-monster-pale border border-monster-purple/10 hover:border-monster-purple/30 hover:shadow-lg hover:shadow-monster-purple/10 transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-monster-purple to-monster-deep rounded-xl flex items-center justify-center shadow-lg shadow-monster-purple/20">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-2xl font-heading font-bold text-monster-dark mb-1">{stat.value}</p>
                <p className="text-monster-muted text-sm">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
