import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Foto from "@/assets/tes.png"

export default function Cta() {
  return (
    <section className="py-16 md:py-24 bg-[#02188B] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bergabunglah dengan UKM dan Kembangkan Potensimu
            </h2>
            <p className="text-blue-100 text-lg mb-6">
              Jangan lewatkan kesempatan untuk mengembangkan bakat, minat, dan jaringan pertemananmu melalui UKM di
              STMIK AMIK Jayanusa.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#02188B] px-6 py-3 rounded-md font-medium flex items-center"
              >
                Daftar Sekarang <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium"
              >
                Pelajari Lebih Lanjut
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={Foto}
                alt="Bergabung dengan UKM"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02188B]/50 to-transparent"></div>
            </div>

            {/* Stats floating elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg text-[#02188B]"
            >
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm">UKM Aktif</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg text-[#02188B]"
            >
              <p className="text-3xl font-bold">50+</p>
              <p className="text-sm">Kegiatan/Tahun</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 