import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link, useForm } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';

interface Anggota {
  id: number;
  nim: string;
  nama: string;
  prodi: string;
  angkatan: string;
  status: string;
  foto: string | null;
  user_id: number;
}

interface PageProps {
  anggota: Anggota;
}

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
  {
    title: 'Manajemen Anggota',
    href: '/anggota',
  },
  {
    title: 'Edit Anggota',
    href: '#',
  },
];

export default function Edit({ anggota }: PageProps) {
  const { data, setData, post, processing, errors } = useForm({
    nim: anggota.nim,
    nama: anggota.nama,
    prodi: anggota.prodi,
    angkatan: anggota.angkatan,
    status: anggota.status,
    foto: null as File | null,
    _method: 'PUT'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(`/anggota/${anggota.id}`, {
      forceFormData: true,
    });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Edit Anggota" />
      
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/anggota">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </Link>
          </Button>
        </div>

        <div className="max-w-4xl">
          <h1 className="text-2xl font-bold mb-6">Edit Anggota</h1>

          <div className="bg-card rounded-lg shadow p-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nim">NIM</Label>
                  <Input
                    id="nim"
                    type="text"
                    value={data.nim}
                    onChange={(e) => setData('nim', e.target.value)}
                  />
                  {errors.nim && <p className="text-destructive text-sm">{errors.nim}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nama">Nama Lengkap</Label>
                  <Input
                    id="nama"
                    type="text"
                    value={data.nama}
                    onChange={(e) => setData('nama', e.target.value)}
                  />
                  {errors.nama && <p className="text-destructive text-sm">{errors.nama}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prodi">Program Studi</Label>
                  <Select 
                    value={data.prodi} 
                    onValueChange={(value) => setData('prodi', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih program studi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SI">Sistem Informasi</SelectItem>
                      <SelectItem value="MI">Manajemen Informatika</SelectItem>
                      <SelectItem value="SK">Sistem Komputer</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.prodi && <p className="text-destructive text-sm">{errors.prodi}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="angkatan">Angkatan</Label>
                  <Input
                    id="angkatan"
                    type="text"
                    value={data.angkatan}
                    onChange={(e) => setData('angkatan', e.target.value)}
                  />
                  {errors.angkatan && <p className="text-destructive text-sm">{errors.angkatan}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select 
                    value={data.status} 
                    onValueChange={(value) => setData('status', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aktif">Aktif</SelectItem>
                      <SelectItem value="pasif">Pasif</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.status && <p className="text-destructive text-sm">{errors.status}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="foto">Foto (Opsional)</Label>
                  <Input
                    id="foto"
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      setData('foto', file);
                    }}
                  />
                  {errors.foto && <p className="text-destructive text-sm">{errors.foto}</p>}
                  {anggota.foto && (
                    <div className="mt-2">
                      <p className="text-sm text-muted-foreground">Foto saat ini:</p>
                      <img 
                        src={`/storage/${anggota.foto}`} 
                        alt={anggota.nama} 
                        className="mt-1 w-24 h-24 object-cover rounded-md"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button type="submit" disabled={processing}>
                  Simpan Perubahan
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
} 