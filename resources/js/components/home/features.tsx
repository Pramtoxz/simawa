import { motion } from "framer-motion"
import { Bell, Calendar, Users, BookOpen, ExternalLink, ChevronRight } from "lucide-react"

export default function Features() {
  const featuresList = [
    {
      icon: <Bell className="h-6 w-6 text-white" />,
      title: "Notifikasi Kegiatan",
      description: "Dapatkan pemberitahuan langsung untuk setiap kegiatan UKM yang akan datang",
    },
    {
      icon: <Calendar className="h-6 w-6 text-white" />,
      title: "Kalender Terintegrasi",
      description: "Lihat jadwal kegiatan UKM dalam kalender yang dapat disesuaikan",
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Manajemen Keanggotaan",
      description: "Kelola keanggotaan UKM dengan mudah dan transparan",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-white" />,
      title: "Arsip Dokumentasi",
      description: "Akses dokumentasi dan laporan kegiatan UKM terdahulu",
    },
    {
      icon: <ExternalLink className="h-6 w-6 text-white" />,
      title: "Integrasi Media Sosial",
      description: "Bagikan kegiatan UKM langsung ke platform media sosial",
    },
    {
      icon: <ChevronRight className="h-6 w-6 text-white" />,
      title: "Pendaftaran Online",
      description: "Pendaftaran Secara Periode UKM secara online dengan proses yang cepat dan mudah",
    },
  ]
  
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fitur Sistem Informasi Mahasiswa</h2>
          <p className="text-lg text-gray-600">
            Platform terpadu untuk memudahkan mahasiswa mengakses informasi UKM dan kegiatan kampus
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 rounded-lg bg-[#02188B] flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 