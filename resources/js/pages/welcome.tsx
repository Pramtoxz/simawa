import React, { useEffect, useRef, useState } from "react"
import Header from "@/components/home/header"
import Hero from "@/components/home/hero"
import Features from "@/components/home/features"
import News from "@/components/home/news"
import UkmShowcase from "@/components/home/ukm-showcase"
import Testimonials from "@/components/home/testimonials"
import Cta from "@/components/home/cta"
import Footer from "@/components/home/footer"
import musik from "@/assets/maju.mp3"

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
  const [showDialog, setShowDialog] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Prevent scroll when dialog open
  useEffect(() => {
    if (showDialog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = '' }
  }, [showDialog])

  const playMusic = () => {
    setShowDialog(false)
    setTimeout(() => {
      audioRef.current?.play()
    }, 200)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-xs w-full text-center animate-fade-in">
            <h2 className="text-2xl font-bold mb-4 text-[#02188B]">Selamat Datang!</h2>
            <p className="mb-4 text-gray-700">Di Ranah Mahasiswa Jayanusa</p>
            <blockquote className="italic text-gray-500 mb-6">“Hidup Mahasiswa! Hidup Pemuda! Hidup Rakyat Indonesia!”</blockquote>
            <button
              onClick={playMusic}
              className="bg-[#02188B] text-white px-6 py-3 rounded-md font-semibold text-lg shadow hover:bg-[#1936b7] transition"
              autoFocus
            >
              Hidup Mahasiswa
            </button>
          </div>
        </div>
      )}
      <audio ref={audioRef} src={musik} preload="auto" />
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
