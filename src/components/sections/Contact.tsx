'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'

const projectTypes = [
  'Kitchen Remodel',
  'Bathroom Renovation',
  'Whole House Remodel',
  'Exterior Facelift',
  'Room Addition',
  'Repairs & Maintenance',
  'Insurance Claim',
  'Other',
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Info section animation
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 75%',
          },
        }
      )

      // Form animation
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 75%',
          },
        }
      )

      // Animate form fields on scroll
      if (formRef.current) {
        const fields = formRef.current.querySelectorAll('.form-field')
        gsap.fromTo(
          fields,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: formRef.current,
              start: 'top 65%',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false)
      if (formRef.current) {
        formRef.current.reset()
      }
    }, 5000)
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 sm:py-32 bg-monster-pale overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-monster-purple/20 to-transparent" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-monster-light/30 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-monster-soft/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-monster-purple/10 rounded-full text-monster-purple text-sm font-semibold mb-4">
            Get Started Today
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-monster-dark mb-6">
            Request Your
            <span className="gradient-text"> Free Quote</span>
          </h2>
          <p className="text-monster-gray text-lg">
            Ready to transform your home? Contact us for a free consultation and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div ref={infoRef} className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold text-monster-dark mb-6">
                Let's Talk About Your Project
              </h3>
              <p className="text-monster-gray leading-relaxed">
                Whether you have a clear vision or just an idea, we're here to help. Reach out and let's discuss how we can make your dream home a reality.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-6">
              <a
                href="tel:2602860601"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-monster-purple/10 hover:border-monster-purple/30 hover:shadow-lg hover:shadow-monster-purple/10 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-monster-purple to-monster-deep rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-monster-purple/20">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-monster-muted text-sm">Call Us</p>
                  <p className="text-monster-dark font-heading font-bold text-xl">260.286.0601</p>
                </div>
              </a>

              <a
                href="mailto:info@monsterremodel.com"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-monster-purple/10 hover:border-monster-purple/30 hover:shadow-lg hover:shadow-monster-purple/10 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-monster-purple to-monster-deep rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-monster-purple/20">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-monster-muted text-sm">Email Us</p>
                  <p className="text-monster-dark font-heading font-bold">info@monsterremodel.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-monster-purple/10">
                <div className="w-14 h-14 bg-gradient-to-br from-monster-purple to-monster-deep rounded-xl flex items-center justify-center shadow-lg shadow-monster-purple/20">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-monster-muted text-sm">Service Area</p>
                  <p className="text-monster-dark font-heading font-bold">Fort Wayne, IN & Surrounding Areas</p>
                </div>
              </div>
            </div>

            {/* Quick facts */}
            <div className="p-6 bg-white rounded-2xl border border-monster-purple/10 shadow-lg shadow-monster-purple/5">
              <h4 className="font-heading text-lg font-bold text-monster-dark mb-4">Why Choose Monster?</h4>
              <ul className="space-y-3">
                {[
                  'Licensed General Contractor',
                  'Woman & Family Owned',
                  'Free Consultations',
                  'Insurance Claim Experts',
                  'End-to-End Project Management',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-monster-gray">
                    <CheckCircle size={18} className="text-monster-purple flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl border border-monster-purple/10 p-8 sm:p-10 shadow-xl shadow-monster-purple/5"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-monster-purple to-monster-deep rounded-full flex items-center justify-center shadow-lg shadow-monster-purple/30">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-monster-dark mb-4">
                    Thank You!
                  </h3>
                  <p className="text-monster-gray">
                    We've received your request and will be in touch soon to discuss your project.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="form-field">
                      <label htmlFor="name" className="block text-monster-dark font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-monster-pale border border-monster-purple/20 rounded-xl text-monster-dark placeholder-monster-muted focus:border-monster-purple focus:outline-none focus:ring-2 focus:ring-monster-purple/20 transition-all"
                        placeholder="John Smith"
                      />
                    </div>

                    {/* Phone */}
                    <div className="form-field">
                      <label htmlFor="phone" className="block text-monster-dark font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 bg-monster-pale border border-monster-purple/20 rounded-xl text-monster-dark placeholder-monster-muted focus:border-monster-purple focus:outline-none focus:ring-2 focus:ring-monster-purple/20 transition-all"
                        placeholder="(260) 555-0123"
                      />
                    </div>

                    {/* Email */}
                    <div className="form-field">
                      <label htmlFor="email" className="block text-monster-dark font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-monster-pale border border-monster-purple/20 rounded-xl text-monster-dark placeholder-monster-muted focus:border-monster-purple focus:outline-none focus:ring-2 focus:ring-monster-purple/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Project Type */}
                    <div className="form-field">
                      <label htmlFor="project" className="block text-monster-dark font-medium mb-2">
                        Project Type *
                      </label>
                      <select
                        id="project"
                        name="project"
                        required
                        className="w-full px-4 py-3 bg-monster-pale border border-monster-purple/20 rounded-xl text-monster-dark focus:border-monster-purple focus:outline-none focus:ring-2 focus:ring-monster-purple/20 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Address */}
                    <div className="form-field sm:col-span-2">
                      <label htmlFor="address" className="block text-monster-dark font-medium mb-2">
                        Project Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="w-full px-4 py-3 bg-monster-pale border border-monster-purple/20 rounded-xl text-monster-dark placeholder-monster-muted focus:border-monster-purple focus:outline-none focus:ring-2 focus:ring-monster-purple/20 transition-all"
                        placeholder="123 Main St, Fort Wayne, IN"
                      />
                    </div>

                    {/* Message */}
                    <div className="form-field sm:col-span-2">
                      <label htmlFor="message" className="block text-monster-dark font-medium mb-2">
                        Tell Us About Your Project *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-monster-pale border border-monster-purple/20 rounded-xl text-monster-dark placeholder-monster-muted focus:border-monster-purple focus:outline-none focus:ring-2 focus:ring-monster-purple/20 transition-all resize-none"
                        placeholder="Describe your project, goals, and any specific requirements..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-monster-purple to-monster-deep px-8 py-4 rounded-xl font-heading font-bold text-lg text-white shadow-lg shadow-monster-purple/30 hover:shadow-monster-purple/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Request Free Quote
                          <Send size={20} />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-center text-monster-muted text-sm">
                    By submitting this form, you agree to be contacted about your project.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
