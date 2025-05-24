import { motion } from "framer-motion"

export default function Testimonials() {
  const testimonialsList = [
    {
      name: "Andi Pratama",
      role: "Ketua UKM Teknologi",
      quote:
        "Sistem informasi ini sangat membantu kami dalam mengelola kegiatan UKM dan menjangkau lebih banyak mahasiswa yang tertarik bergabung.",
    },
    {
      name: "Siti Rahma",
      role: "Anggota UKM Jurnalistik",
      quote:
        "Berkat platform ini, saya bisa dengan mudah mendapatkan informasi tentang kegiatan UKM yang akan datang dan tidak pernah ketinggalan event penting.",
    },
    {
      name: "Budi Santoso",
      role: "Anggota UKM Olahraga",
      quote:
        "Pendaftaran online membuat proses bergabung dengan UKM menjadi sangat mudah. Dokumentasi kegiatan juga tersimpan dengan baik di sistem.",
    },
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apa Kata Mahasiswa</h2>
          <p className="text-lg text-gray-600">Pengalaman mahasiswa yang telah bergabung dengan UKM di kampus</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsList.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#02188B]/10 flex items-center justify-center">
                  <span className="text-[#02188B] font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 