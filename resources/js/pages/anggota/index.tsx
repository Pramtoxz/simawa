import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Link, router } from '@inertiajs/react';
import { PlusCircle, Pencil, Trash2, Eye, User } from 'lucide-react';
import { useState } from 'react';
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
  user?: {
    id: number;
    name: string;
    email: string;
  };
}

interface PageProps {
  anggota: Anggota[];
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
];

export default function Index({ anggota }: PageProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [anggotaToDelete, setAnggotaToDelete] = useState<Anggota | null>(null);
  const [idCardDialogOpen, setIdCardDialogOpen] = useState(false);
  const [selectedAnggota, setSelectedAnggota] = useState<Anggota | null>(null);

  const handleDelete = () => {
    if (anggotaToDelete) {
      router.delete(`/anggota/${anggotaToDelete.id}`, {
        onSuccess: () => {
          setDeleteDialogOpen(false);
        },
      });
    }
  };


  const showAnggotaDetails = (anggota: Anggota) => {
    setSelectedAnggota(anggota);
    setIdCardDialogOpen(true);
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Manajemen Anggota" />
      
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Manajemen Anggota</h1>
          <Button asChild>
            <Link href="/anggota/create">
              <PlusCircle className="w-4 h-4 mr-2" />
              Tambah Anggota
            </Link>
          </Button>
        </div>

        <div className="bg-card rounded-lg shadow overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>NIM</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Program Studi</TableHead>
                <TableHead>Angkatan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {anggota.length > 0 ? (
                anggota.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.nim}</TableCell>
                    <TableCell>{item.nama}</TableCell>
                    <TableCell>{item.prodi}</TableCell>
                    <TableCell>{item.angkatan}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${item.status === 'aktif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {item.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => showAnggotaDetails(item)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/anggota/${item.id}/edit`}>
                            <Pencil className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            setAnggotaToDelete(item);
                            setDeleteDialogOpen(true);
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    Tidak ada data anggota
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Konfirmasi Hapus</DialogTitle>
            <DialogDescription>
              Apakah Anda yakin ingin menghapus anggota {anggotaToDelete?.nama}?
              Tindakan ini tidak dapat dibatalkan.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Batal
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Hapus
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={idCardDialogOpen} onOpenChange={setIdCardDialogOpen}>
        <DialogContent className="p-0 overflow-hidden max-w-md">
          {selectedAnggota && (
            <div id="id-card-container" className="bg-background rounded-lg overflow-hidden shadow-md print:shadow-none">
              <div className="bg-primary p-4 text-center">
                <h2 className="text-primary-foreground text-3xl font-bold">{selectedAnggota.user?.name || 'ID Card'}</h2>
              </div>
              
              <div className="flex justify-center p-4 bg-muted">
                {selectedAnggota.foto ? (
                  <img 
                    src={`/storage/${selectedAnggota.foto}`} 
                    alt={selectedAnggota.nama} 
                    className="w-40 h-40 object-cover rounded-md"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg w-40 h-40">
                    <User className="w-16 h-16 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Tidak ada foto</p>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="text-2xl font-bold text-center mb-4 text-foreground">Informasi Anggota</h3>
                
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2 border-b pb-2">
                    <div className="font-bold text-lg text-foreground">NIM</div>
                    <div className="text-lg text-foreground">{selectedAnggota.nim}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b pb-2">
                    <div className="font-bold text-lg text-foreground">Nama Lengkap</div>
                    <div className="text-lg text-foreground">{selectedAnggota.nama}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b pb-2">
                    <div className="font-bold text-lg text-foreground">Program Studi</div>
                    <div className="text-lg text-foreground">{selectedAnggota.prodi}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b pb-2">
                    <div className="font-bold text-lg text-foreground">Angkatan</div>
                    <div className="text-lg text-foreground">{selectedAnggota.angkatan}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b pb-2">
                    <div className="font-bold text-lg text-foreground">Status</div>
                    <div className="text-lg text-foreground">{selectedAnggota.status}</div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-muted flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIdCardDialogOpen(false)}>
                  Tutup
                </Button>
                <Button asChild>
                  <Link href={`/anggota/${selectedAnggota.id}/edit`}>
                    Edit Data
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body * {
            visibility: hidden;
          }
          #id-card-container, #id-card-container * {
            visibility: visible;
          }
          #id-card-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            box-shadow: none !important;
          }
        }
      `}} />
    </AppLayout>
  );
} 