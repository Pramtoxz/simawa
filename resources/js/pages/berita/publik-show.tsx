import AppLayout from '@/layouts/app-layout';
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
    <AppLayout>
      <Head title={berita.judul} />
      <div className="max-w-3xl mx-auto p-6 space-y-6">
        <div className="relative w-full h-48 md:h-64 bg-primary/10 rounded-lg overflow-hidden">
          {berita.gambar ? (
            <img
              src={`/storage/${berita.gambar}`}
              alt={berita.judul}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <span className="text-muted-foreground">Tidak ada gambar</span>
            </div>
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{berita.judul}</h1>
          <div className="text-sm text-muted-foreground mb-4">
            <span>{formatDate(berita.tanggal)}</span>
            <span className="mx-2">•</span>
            <span>{berita.user?.name}</span>
          </div>
          <div className="prose prose-sm md:prose-base prose-headings:text-foreground prose-p:text-foreground dark:prose-invert max-w-none border-t pt-4">
            <div dangerouslySetInnerHTML={{ __html: berita.isi }} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
} 