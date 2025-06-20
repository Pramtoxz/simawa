import { motion } from "framer-motion"

export default function Testimonials() {
  const testimonialsList = [
    {
      name: "Pramudito Metra, S.Kom",
      role: "Ketua UKM SENJA 2021-2022",
      quote:
        "Bergabung dengan organisasi kampus adalah kunci membuka pintu peluang dan pengalaman luar biasa. Di sinilah kamu akan menemukan keluarga baru, membangun kepercayaan diri, dan menyalakan semangat untuk meraih mimpi-mimpimu.",
    },
    {
      name: "Rafi Chandra, S.Kom",
      role: "Kominfo Bem-KM Jayanusa 2023",
      quote:
        "Organisasi kampus bukan sekadar tempat berkumpul, tapi ruang di mana ide-ide besar lahir dan potensi terbaikmu tumbuh. Jadilah bagian dari perubahan, temukan versi terbaik dari dirimu bersama kami.",
    },
    {
      name: "Kisra Widoni, S.Kom",
      role: "Presiden Mahasiswa 2024",
      quote:
        "Jangan ragu melangkah! Organisasi kampus adalah tempat di mana kamu bisa berani bermimpi, beraksi, dan membuktikan bahwa kamu mampu lebih dari yang kamu bayangkan. Ayo, wujudkan perjalanan luar biasamu di sini!",
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