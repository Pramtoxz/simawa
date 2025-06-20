import { motion } from "framer-motion"
import { Link } from "@inertiajs/react"
import bem from "@/assets/Organisasi/bem.png"
import ukmRobotik from "@/assets/Organisasi/robotik.jpg"
// import ukmSenja from "@/assets/Organisasi/senja.jpg"
// import ukmFsi from "@/assets/Organisasi/fsi.png"
// import ukmKwu from "@/assets/Organisasi/kwu.jpg"
// import ukmUko from "@/assets/Organisasi/uko.png"
// import mapala from "@/assets/Organisasi/mapala.jpg"
// import infoKlik from "@/assets/Organisasi/bem.png"

export default function UkmShowcase() {
  const ukmList = [
    { foto:{bem},name: "BEM-KM JAYANUSA", members: "Badan Eksekutif Mahasiswa-Keluarga Mahasiswa Jayanusa",link: "https://www.instagram.com/ukm_senja" },
    { foto:{ukmRobotik},name: "UKM ROBOTIK", members: "Unik Kegiatan Mahasiswa Robotik", link: "https://www.instagram.com/ukm_robotik" },
    { name: "UKM SENJA", members: "Unit Kegiatan Mahasiswa Seni Jayanusa", link: "https://www.instagram.com/ukm_senja" },
    { name: "UKM FSI", members: "Forum Studi Islam Jayanusa", link: "https://www.instagram.com/ukm_fsi" },
    { name: "UKM KWU", members: "Unit Kegiatan Mahasiswa Wirausaha Jayanusa", link: "https://www.instagram.com/ukm_kwu" },
    { name: "UKO JAYANUSA", members: "Unit Kegiatan Olahraga Jayanusa", link: "https://www.instagram.com/uko_jayanusa" },
    { name: "MAPALA", members: "Mahasiswa Pecinta Alam Jayanusa", link: "https://www.instagram.com/mapala_jayanusa" },
    { name: "INFO KLIK", members: "Informasi Kegiatan Mahasiswa Jayanusa", link: "https://www.instagram.com/info_klik" },
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Organisasi Mahasiswa</h2>
          <p className="text-lg text-gray-600">Bergabunglah dengan berbagai Organisasi Mahasiswa yang ada di Jayanusa</p>
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
                  src={`/placeholder.svg?height=300&width=400&text=UKM+${ukm.foto}`}
                  alt={ukm.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02188B]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-xs bg-white text-[#02188B] px-2 py-1 rounded-full font-medium">
                    <Link href={ukm.link || "#"} className="flex items-center gap-1">
                      Lihat Detail
                    </Link>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1">{ukm.name}</h3>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{ukm.members} Anggota</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 