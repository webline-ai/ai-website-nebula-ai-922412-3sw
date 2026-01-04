import Hero from '@/components/sections/home/Hero'
import Features from '@/components/sections/home/Features'
import Cta from '@/components/sections/home/Cta'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="cta">
        <Cta />
      </section>
    </>
  )
}