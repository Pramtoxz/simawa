import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Foto from "@/assets/hero.png"

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-[#02188B] to-[#0139A9] text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              Sistem Informasi Mahasiswa
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Informasi UKM Terkini di Kampus
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Dapatkan informasi terbaru tentang kegiatan dan berita acara UKM di Jayanusa.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#02188B] px-6 py-3 rounded-md font-medium flex items-center"
              >
                Lihat Berita <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium"
              >
                Kalender Kegiatan
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={Foto}
                alt="Kegiatan Mahasiswa"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
