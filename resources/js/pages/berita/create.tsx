import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useForm } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { Textarea } from '@/components/ui/textarea';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
  {
    title: 'Manajemen Berita',
    href: '/berita',
  },
  {
    title: 'Tambah Berita',
    href: '/berita/create',
  },
];

export default function Create() {
  const today = new Date().toISOString().split('T')[0];
  
  const { data, setData, post, processing, errors } = useForm({
    judul: '',
    isi: '',
    tanggal: today,
    gambar: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/berita', {
      forceFormData: true,
    });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Tambah Berita" />
      
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/berita">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </Link>
          </Button>
        </div>

        <div className="max-w-4xl">
          <h1 className="text-2xl font-bold mb-6">Tambah Berita Baru</h1>

          <div className="bg-card rounded-lg shadow p-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="judul">Judul Berita</Label>
                  <Input
                    id="judul"
                    type="text"
                    value={data.judul}
                    onChange={(e) => setData('judul', e.target.value)}
                  />
                  {errors.judul && <p className="text-destructive text-sm">{errors.judul}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tanggal">Tanggal</Label>
                  <Input
                    id="tanggal"
                    type="date"
                    value={data.tanggal}
                    onChange={(e) => setData('tanggal', e.target.value)}
                  />
                  {errors.tanggal && <p className="text-destructive text-sm">{errors.tanggal}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gambar">Gambar (Opsional)</Label>
                  <Input
                    id="gambar"
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      setData('gambar', file);
                    }}
                  />
                  {errors.gambar && <p className="text-destructive text-sm">{errors.gambar}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="isi">Isi Berita</Label>
                  <Textarea
                    id="isi"
                    value={data.isi}
                    onChange={(e) => setData('isi', e.target.value)}
                    className="min-h-[300px]"
                  />
                  {errors.isi && <p className="text-destructive text-sm mt-2">{errors.isi}</p>}
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button type="submit" disabled={processing}>
                  Simpan
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
} 