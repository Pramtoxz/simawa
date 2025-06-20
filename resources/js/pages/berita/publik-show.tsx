import { Link } from "@inertiajs/react"
import { ArrowLeft } from "lucide-react"
import { Head } from '@inertiajs/react';
import { motion } from "framer-motion"

interface Berita {
  id: number;
  judul: string;
  isi: string;
  gambar: string | null;
  tanggal: string;
  user?: { name: string };
}

interface PageProps {
  berita: Berita;
}

export default function PublikShow({ berita }: PageProps) {
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
      <Head title={berita.judul} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Link href={route('berita.publik')} className="inline-flex items-center gap-2 text-[#02188B] font-medium hover:underline text-sm">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Daftar Berita
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col"
        >
          <div className="h-56 sm:h-72 md:h-80 bg-gray-200 relative overflow-hidden">
            <motion.img
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              src={berita.gambar ? `/storage/${berita.gambar}` : "/assets/hero.png"}
              alt={berita.judul}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02188B]/80 to-transparent"></div>
          </div>
          <div className="p-6 sm:p-8 flex-1 flex flex-col">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-[#02188B] text-white text-xs px-2 py-1 rounded-full">Berita</span>
              <span className="text-xs text-gray-500">{formatDate(berita.tanggal)}</span>
              {berita.user?.name && <span className="text-xs text-gray-400 ml-auto">{berita.user.name}</span>}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">{berita.judul}</h1>
            <div className="prose prose-sm md:prose-base prose-headings:text-foreground prose-p:text-foreground dark:prose-invert max-w-none mb-2">
              <div dangerouslySetInnerHTML={{ __html: berita.isi }} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 