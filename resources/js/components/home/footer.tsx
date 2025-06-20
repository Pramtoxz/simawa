import { BookOpen } from "lucide-react"

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                <BookOpen className="w-5 h-5 text-[#02188B]" />
              </div>
              <div>
                <h3 className="text-lg font-bold">SIMAK</h3>
                <p className="text-xs text-gray-400">STMIK AMIK Jayanusa</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Sistem Informasi Mahasiswa untuk kegiatan UKM di STMIK AMIK Jayanusa.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#02188B] transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              {["Beranda", "Berita UKM", "Kalender Kegiatan", "Tentang Kami", "Kontak"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">UKM</h3>
            <ul className="space-y-2">
              {["BEM-KM JAYANUSA", "UKM SENJA","UKM ROBOTIK", "UKM FSI", "UKM KWU", "UKM MAPALA", "UKM JCLICK"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    UKM {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Kontak</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gray-800 flex-shrink-0 mt-1"></div>
                <span>Jl. Olo Ladang No.1, Padang, Sumatera Barat</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-gray-800 flex-shrink-0"></div>
                <span>info@jayanusa.ac.id</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-gray-800 flex-shrink-0"></div>
                <span>(0751) 7054506</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} STMIK AMIK Jayanusa. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
} 