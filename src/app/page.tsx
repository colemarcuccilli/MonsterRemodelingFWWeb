import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Gallery from '@/components/sections/Gallery'
import About from '@/components/sections/About'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Process />
      <Testimonials />
      <Contact />
    </>
  )
}
