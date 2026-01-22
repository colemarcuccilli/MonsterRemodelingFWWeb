'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { MessageSquare, Hammer, CheckCircle, ArrowRight } from 'lucide-react'

const phases = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Pre-Construction',
    subtitle: 'Plan & Design',
    description: 'This phase includes constant communication and endless creativity. We keep an eye on budgets to ensure the lowest costs, stay on top of schedules for timely delivery of materials, and work hard to make your dreams come to life.',
    features: [
      'Initial consultation & vision planning',
      'Detailed budget development',
      'Material selection & sourcing',
      'Timeline & schedule creation',
      'Design refinement & approval',
    ],
    color: 'from-blue-500 to-cyan-500',
    image: '/assets/work1.webp',
  },
  {
    number: '02',
    icon: Hammer,
    title: 'Construction',
    subtitle: 'Build & Create',
    description: 'Working with trusted subcontractors, we keep them accountable throughout the entire build. From planning to completion and management throughout, we stay focused on the goal.',
    features: [
      'Professional project management',
      'Trusted subcontractor coordination',
      'Quality control checkpoints',
      'Regular progress updates',
      'On-site organization & cleanliness',
    ],
    color: 'from-monster-light to-monster-purple',
    image: '/assets/work2.webp',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Post-Construction',
    subtitle: 'Complete & Perfect',
    description: 'The last step in any build. This phase includes site cleanup, final inspections, and punch-list items. After completion, we have a final walkthrough to ensure your complete satisfaction.',
    features: [
      'Thorough site cleanup',
      'Final inspections & permits',
      'Punch-list completion',
      'Final walkthrough with you',
      'Satisfaction guarantee',
    ],
    color: 'from-emerald-500 to-green-600',
    image: '/assets/work3.webp',
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

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

      // Timeline line animation
      const progressLine = document.querySelector('.progress-line-fill')
      if (progressLine) {
        gsap.fromTo(
          progressLine,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 60%',
              end: 'bottom 40%',
              scrub: 1,
            },
          }
        )
      }

      // Phase cards animation
      if (timelineRef.current) {
        const phases = timelineRef.current.querySelectorAll('.phase-card')
        phases.forEach((phase, index) => {
          gsap.fromTo(
            phase,
            {
              opacity: 0,
              x: index % 2 === 0 ? -60 : 60,
              scale: 0.95
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: phase,
                start: 'top 75%',
              },
            }
          )

          // Animate the number
          const number = phase.querySelector('.phase-number')
          if (number) {
            gsap.fromTo(
              number,
              { scale: 0, rotation: -180 },
              {
                scale: 1,
                rotation: 0,
                duration: 0.6,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                  trigger: phase,
                  start: 'top 75%',
                },
              }
            )
          }

          // Animate features list
          const features = phase.querySelectorAll('.feature-item')
          gsap.fromTo(
            features,
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.4,
              stagger: 0.08,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: phase,
                start: 'top 65%',
              },
            }
          )

          // Animate the image
          const imageContainer = phase.querySelector('.phase-image')
          if (imageContainer) {
            gsap.fromTo(
              imageContainer,
              { opacity: 0, scale: 0.8, rotateY: index % 2 === 0 ? 15 : -15 },
              {
                opacity: 1,
                scale: 1,
                rotateY: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: phase,
                  start: 'top 70%',
                },
              }
            )
          }
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-24 sm:py-32 bg-monster-pale overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-monster-light/10 via-transparent to-monster-light/10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-monster-purple/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-monster-purple/10 rounded-full text-monster-purple text-sm font-semibold mb-4">
            How We Work
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-monster-dark mb-6">
            Our Proven
            <span className="gradient-text"> Process</span>
          </h2>
          <p className="text-monster-gray text-lg">
            We offer an end-to-end client experience that includes seamless communication, budgeting, staffing, on-site organization, and solid, quality workmanship every time.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-monster-purple/20 transform -translate-x-1/2">
            <div className="progress-line-fill absolute inset-0 bg-gradient-to-b from-monster-purple to-monster-deep origin-top" />
          </div>

          {/* Phase Cards */}
          <div className="space-y-12 lg:space-y-24">
            {phases.map((phase, index) => {
              const Icon = phase.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`phase-card relative lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`${
                      isEven ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:col-start-2'
                    }`}
                  >
                    <div className={`${isEven ? 'lg:ml-auto' : ''} max-w-lg`}>
                      {/* Phase number & icon */}
                      <div className={`flex items-center gap-4 mb-6 ${isEven ? 'lg:justify-end' : ''}`}>
                        <div className="phase-number w-16 h-16 bg-gradient-to-br from-monster-purple to-monster-deep rounded-2xl flex items-center justify-center shadow-lg shadow-monster-purple/30">
                          <span className="text-2xl font-heading font-bold text-white">{phase.number}</span>
                        </div>
                        <div>
                          <h3 className="font-heading text-2xl font-bold text-monster-dark">{phase.title}</h3>
                          <p className="text-monster-purple font-medium">{phase.subtitle}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-monster-gray leading-relaxed mb-6">
                        {phase.description}
                      </p>

                      {/* Features */}
                      <ul className={`space-y-3 ${isEven ? 'lg:ml-auto' : ''}`}>
                        {phase.features.map((feature, i) => (
                          <li
                            key={i}
                            className={`feature-item flex items-center gap-3 text-monster-muted ${
                              isEven ? 'lg:flex-row-reverse lg:text-right' : ''
                            }`}
                          >
                            <span className="w-2 h-2 bg-monster-purple rounded-full flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline node - visible on desktop */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6">
                    <div className="w-full h-full bg-white border-4 border-monster-purple rounded-full" />
                    <div className="absolute inset-0 bg-monster-purple rounded-full animate-ping opacity-20" />
                  </div>

                  {/* Image side - hidden on mobile, shows on desktop for opposite side */}
                  <div className={`hidden lg:block ${isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className={`${isEven ? 'lg:pl-16' : 'lg:pr-16'}`}>
                      <div className="phase-image relative aspect-[4/3] max-w-sm mx-auto" style={{ perspective: '1000px' }}>
                        {/* Glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-20 rounded-2xl blur-xl`} />

                        {/* Image container */}
                        <div className="relative h-full rounded-2xl overflow-hidden border-2 border-monster-purple/20 shadow-xl shadow-monster-purple/10 group">
                          <Image
                            src={phase.image}
                            alt={`${phase.title} - Monster Remodeling`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* Overlay with icon */}
                          <div className="absolute inset-0 bg-gradient-to-t from-monster-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Decorative corner */}
                        <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-monster-purple/10 rounded-full blur-lg" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile image - shows below content on mobile */}
                  <div className="lg:hidden mt-8">
                    <div className="relative aspect-[4/3] max-w-sm mx-auto rounded-xl overflow-hidden border border-monster-purple/20 shadow-lg">
                      <Image
                        src={phase.image}
                        alt={`${phase.title} - Monster Remodeling`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-2 text-monster-muted mb-6">
            <span className="w-12 h-px bg-monster-purple/30" />
            <span>Ready to start?</span>
            <span className="w-12 h-px bg-monster-purple/30" />
          </div>
          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-monster-purple to-monster-deep px-8 py-4 rounded-full font-heading font-bold text-white shadow-lg shadow-monster-purple/30 hover:shadow-monster-purple/50 transition-all duration-300 group"
            >
              Start Your Project
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
