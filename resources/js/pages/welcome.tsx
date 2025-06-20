import React from "react"
import Header from "@/components/home/header"
import Hero from "@/components/home/hero"
import Features from "@/components/home/features"
import News from "@/components/home/news"
import UkmShowcase from "@/components/home/ukm-showcase"
import Testimonials from "@/components/home/testimonials"
import Cta from "@/components/home/cta"
import Footer from "@/components/home/footer"

interface BeritaItem {
  id: number;
  judul: string;
  isi: string;
  gambar: string | null;
  tanggal: string;
  user?: { name: string };
  kategori?: string;
}

interface WelcomeProps {
  berita: BeritaItem[];
}

export default function Welcome({ berita }: WelcomeProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <News berita={berita} />
        <UkmShowcase />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
