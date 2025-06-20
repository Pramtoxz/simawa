import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "@inertiajs/react"
import { ArrowRight } from "lucide-react"
import { Head } from '@inertiajs/react';

interface Berita {
  id: number;
  judul: string;
  isi: string;
  gambar: string | null;
  tanggal: string;
  user?: { name: string };
}

interface PageProps {
  berita: Berita[];
}

export default function PublikIndex({ berita }: PageProps) {
  const [hovered, setHovered] = useState<number | null>(null)

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Head title="Daftar Berita UKM" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Daftar Berita UKM</h2>
          <p className="text-lg text-gray-600">
            Kumpulan berita dan informasi terbaru seputar kegiatan UKM di Jayanusa
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {berita.length > 0 ? berita.map((item, idx) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.08)" }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col group transition-all duration-300"
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img
                  src={item.gambar ? `/storage/${item.gambar}` : "/assets/hero.png"}
                  alt={item.judul}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02188B]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#02188B] text-white text-xs px-2 py-1 rounded-full">Berita</span>
                  <span className="text-xs text-gray-500">{formatDate(item.tanggal)}</span>
                  {item.user?.name && <span className="text-xs text-gray-400 ml-auto">{item.user.name}</span>}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{item.judul}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.isi.replace(/<[^>]+>/g, '').slice(0, 120)}...</p>
                <div className="mt-auto">
                  <Link
                    href={route('berita.publik.detail', { id: item.id })}
                    className="inline-flex items-center gap-1 text-[#02188B] font-medium hover:underline text-sm"
                  >
                    Baca Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )) : (
            <div className="col-span-full text-center text-gray-500 py-16">Tidak ada data berita</div>
          )}
        </div>
      </div>
    </div>
  )
} 