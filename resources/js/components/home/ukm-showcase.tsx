import { motion } from "framer-motion"
import { Link } from "@inertiajs/react"

export default function UkmShowcase() {
  const ukmList = [
    { name: "BEM-KM JAYANUSA", members: 120, events: 15 },
    { name: "UKM ROBOTIKA", members: 85, events: 12 },
    { name: "UKM SENJA", members: 64, events: 8 },
    { name: "UKM FSI", members: 42, events: 10 },
    { name: "UKM KWU", members: 56, events: 6 },
    { name: "UKO JAYANUSA", members: 38, events: 7 },
    { name: "MAPALA", members: 45, events: 9 },
    { name: "INFO KLIK", members: 72, events: 11 },
  ]

  return (
    <section id="ukm-showcase" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unit Kegiatan Mahasiswa</h2>
          <p className="text-lg text-gray-600">Bergabunglah dengan berbagai UKM yang ada di Jayanusa</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ukmList.map((ukm, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 group"
            >
              <div className="h-40 bg-gray-200 relative overflow-hidden">
                <img
                  src={`/placeholder.svg?height=300&width=400&text=UKM+${ukm.name}`}
                  alt={ukm.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02188B]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-xs bg-white text-[#02188B] px-2 py-1 rounded-full font-medium">
                    Gabung Sekarang
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1">{ukm.name}</h3>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{ukm.members} Anggota</span>
                  <span>{ukm.events} Kegiatan</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            href="#"
            className="inline-block bg-[#02188B] text-white px-6 py-3 rounded-md font-medium hover:bg-[#032cb3] transition-colors"
          >
            Lihat Semua UKM
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 