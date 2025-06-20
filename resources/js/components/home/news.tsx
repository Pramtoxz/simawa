import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "@inertiajs/react"

interface BeritaItem {
  id: number;
  judul: string;
  isi: string;
  gambar: string | null;
  tanggal: string;
  user?: { name: string };
  kategori?: string;
}

interface NewsProps {
  berita: BeritaItem[];
}

export default function News({ berita }: NewsProps) {
  const newsItems = berita.slice(0, 4)
  const [activeNewsIndex, setActiveNewsIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNewsIndex((prev) => (prev + 1) % newsItems.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [newsItems.length])

  // Format tanggal sederhana
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    return new Date(dateString).toLocaleDateString('id-ID', options)
  }

  return (
    <section id="news" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Berita Acara UKM Terkini</h2>
          <p className="text-lg text-gray-600">
            Informasi terbaru tentang kegiatan dan prestasi UKM di Jayanusa
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNewsIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <img
                    src={newsItems[activeNewsIndex].gambar ? `/storage/${newsItems[activeNewsIndex].gambar}` : "/assets/hero.png"}
                    alt={newsItems[activeNewsIndex].judul}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-[#02188B] text-white text-xs px-2 py-1 rounded-full">
                        {newsItems[activeNewsIndex].kategori || "Berita"}
                      </span>
                      <span className="text-xs text-white/80">{formatDate(newsItems[activeNewsIndex].tanggal)}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{newsItems[activeNewsIndex].judul}</h3>
                    <p className="text-white/90 mb-4 line-clamp-3">{newsItems[activeNewsIndex].isi.replace(/<[^>]+>/g, '').slice(0, 120)}...</p>
                    <Link href={`/berita-publik/${newsItems[activeNewsIndex].id}`} className="bg-white text-[#02188B] px-4 py-2 rounded-md text-sm font-medium flex items-center">
                      Baca Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation dots */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {newsItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveNewsIndex(index)}
                    className={`w-2 h-2 rounded-full ${index === activeNewsIndex ? "bg-white" : "bg-white/50"}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {newsItems.map((item, index) => (
              <motion.div
                key={item.id}
                whileHover={{ x: 5 }}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${
                  index === activeNewsIndex ? "bg-[#02188B] text-white" : "bg-white hover:bg-gray-100 text-gray-800"
                }`}
                onClick={() => setActiveNewsIndex(index)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 ${
                      index === activeNewsIndex ? "border-2 border-white" : ""
                    }`}
                  >
                    <img
                      src={item.gambar ? `/storage/${item.gambar}` : "/assets/hero.png"}
                      alt={item.judul}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className={`text-xs ${index === activeNewsIndex ? "text-blue-200" : "text-gray-500"}`}>
                      {formatDate(item.tanggal)}
                    </span>
                    <h4 className="font-medium line-clamp-2">{item.judul}</h4>
                  </div>
                </div>
              </motion.div>
            ))}

            <Link
              href={route('berita.publik')}
              className="block text-center bg-white border border-gray-200 text-[#02188B] px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Lihat Semua Berita
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 