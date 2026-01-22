'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: "Our new bathroom is everything we dreamed it would be! The spa shower, sleek glass door and new vanity really elevate the space. The heated floor is divine, especially on cold mornings, and the tile work is absolutely stunning! We loved your attention to detail and our needs. Thank you!",
    author: "Happy Homeowner",
    project: "Bathroom Rejuvenation",
    rating: 5,
  },
  {
    id: 2,
    quote: "We sold the house in 36 hours on the market. More than 60 people walked through and we had 11 bids to select from. We chose an all cash offer $30k over the asking price. The house spent 2 days on the market. Thank you again!",
    author: "Satisfied Seller",
    project: "Pre-Sale Facelift",
    rating: 5,
  },
  {
    id: 3,
    quote: "The Monster Team was amazing throughout the process. I can't wait to continue our relationship with future projects!",
    author: "Local Investor",
    project: "Investor Projects",
    rating: 5,
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

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

      // Initial slider animation
      gsap.fromTo(
        sliderRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sliderRef.current,
            start: 'top 75%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Animate testimonial change
  useEffect(() => {
    const cards = document.querySelectorAll('.testimonial-card')
    cards.forEach((card, index) => {
      if (index === activeIndex) {
        gsap.to(card, {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.5,
          ease: 'power2.out',
        })
      } else {
        gsap.to(card, {
          opacity: 0,
          scale: 0.9,
          x: index < activeIndex ? -50 : 50,
          duration: 0.5,
          ease: 'power2.out',
        })
      }
    })
  }, [activeIndex])

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-24 sm:py-32 bg-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-monster-purple/20 to-transparent" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-monster-light/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-monster-soft/20 rounded-full blur-3xl" />

      {/* Large quote decoration */}
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <Quote size={300} className="text-monster-purple" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-monster-purple/10 rounded-full text-monster-purple text-sm font-semibold mb-4">
            What Our Clients Say
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-monster-dark mb-6">
            Real Stories,
            <span className="gradient-text"> Real Results</span>
          </h2>
          <p className="text-monster-gray text-lg">
            Don't just take our word for it. Here's what Fort Wayne homeowners have to say about working with Monster Remodeling.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div ref={sliderRef} className="relative">
          {/* Main Card Container */}
          <div className="relative h-[400px] sm:h-[350px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card absolute inset-0 ${
                  index === activeIndex ? 'z-10' : 'z-0 pointer-events-none'
                }`}
                style={{ opacity: index === activeIndex ? 1 : 0 }}
              >
                <div className="h-full bg-monster-pale rounded-3xl border border-monster-purple/20 p-8 sm:p-12 flex flex-col justify-center shadow-lg shadow-monster-purple/5">
                  {/* Quote icon */}
                  <Quote className="w-12 h-12 text-monster-purple/20 mb-6" />

                  {/* Quote text */}
                  <blockquote className="text-xl sm:text-2xl text-monster-dark leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author info */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-monster-dark font-heading font-bold text-lg">
                        {testimonial.author}
                      </p>
                      <p className="text-monster-purple">{testimonial.project}</p>
                    </div>

                    {/* Star rating */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Prev button */}
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-monster-pale border border-monster-purple/20 flex items-center justify-center text-monster-purple hover:bg-monster-purple hover:text-white hover:border-monster-purple transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-monster-purple w-8'
                      : 'bg-monster-purple/30 hover:bg-monster-purple/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-monster-pale border border-monster-purple/20 flex items-center justify-center text-monster-purple hover:bg-monster-purple hover:text-white hover:border-monster-purple transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-monster-muted">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-monster-purple to-monster-deep border-2 border-white flex items-center justify-center text-white text-sm font-bold"
                >
                  {['J', 'M', 'K', 'R'][i]}
                </div>
              ))}
            </div>
            <span className="ml-2">Join our happy customers in Fort Wayne</span>
          </div>
        </div>
      </div>
    </section>
  )
}
