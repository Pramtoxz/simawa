import React from "react"
import Header from "@/components/home/header"
import Hero from "@/components/home/hero"
import Features from "@/components/home/features"
import News from "@/components/home/news"
import UkmShowcase from "@/components/home/ukm-showcase"
import Testimonials from "@/components/home/testimonials"
import Cta from "@/components/home/cta"
import Footer from "@/components/home/footer"

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <News />
        <UkmShowcase />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
