import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Link, router } from '@inertiajs/react';
import { PlusCircle, Pencil, Trash2, Eye, FileText } from 'lucide-react';
import { useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';

interface Berita {
  id: number;
  judul: string;
  isi: string;
  gambar: string | null;
  tanggal: string;
  user_id: number;
  user?: {
    id: number;
    name: string;
    email: string;
  };
}

interface PageProps {
  berita: Berita[];
}

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
  {
    title: 'Manajemen Berita',
    href: '/berita',
  },
];

export default function Index({ berita }: PageProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [beritaToDelete, setBeritaToDelete] = useState<Berita | null>(null);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);
  const [selectedBerita, setSelectedBerita] = useState<Berita | null>(null);

  const handleDelete = () => {
    if (beritaToDelete) {
      router.delete(`/berita/${beritaToDelete.id}`, {
        onSuccess: () => {
          setDeleteDialogOpen(false);
        },
      });
    }
  };

  const showBeritaDetails = (berita: Berita) => {
    setSelectedBerita(berita);
    setDetailDialogOpen(true);
  };

  // Format tanggal sederhana tanpa menggunakan date-fns
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Manajemen Berita" />
      
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Manajemen Berita</h1>
          <Button asChild>
            <Link href="/berita/create">
              <PlusCircle className="w-4 h-4 mr-2" />
              Tambah Berita
            </Link>
          </Button>
        </div>

        <div className="bg-card rounded-lg shadow overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Judul</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Penulis</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {berita.length > 0 ? (
                berita.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.judul}</TableCell>
                    <TableCell>{formatDate(item.tanggal)}</TableCell>
                    <TableCell>{item.user?.name}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => showBeritaDetails(item)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/berita/${item.id}/edit`}>
                            <Pencil className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            setBeritaToDelete(item);
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
                  <TableCell colSpan={4} className="text-center py-8">
                    Tidak ada data berita
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Dialog Konfirmasi Hapus */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Konfirmasi Hapus</DialogTitle>
            <DialogDescription>
              Apakah Anda yakin ingin menghapus berita "{beritaToDelete?.judul}"?
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

      {/* Dialog Detail Berita */}
      <Dialog open={detailDialogOpen} onOpenChange={setDetailDialogOpen}>
        <DialogContent className="max-w-4xl p-0">
          {selectedBerita && (
            <div id="berita-detail-container" className="bg-background overflow-auto">
              <div className="relative w-full h-48 md:h-64 bg-primary/10">
                {selectedBerita.gambar ? (
                  <img 
                    src={`/storage/${selectedBerita.gambar}`} 
                    alt={selectedBerita.judul} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full">
                    <FileText className="w-12 h-12 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Tidak ada gambar</p>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{selectedBerita.judul}</h2>
                    <div className="text-sm text-muted-foreground mt-1">
                      <span>{formatDate(selectedBerita.tanggal)}</span>
                      <span className="mx-2">•</span>
                      <span>{selectedBerita.user?.name}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => setDetailDialogOpen(false)}>
                      Tutup
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/berita/${selectedBerita.id}/edit`}>
                        <Pencil className="w-4 h-4 mr-2" />
                        Edit
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className="prose prose-sm md:prose-base prose-headings:text-foreground prose-p:text-foreground dark:prose-invert max-w-none border-t pt-4">
                  <div dangerouslySetInnerHTML={{ __html: selectedBerita.isi }} />
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AppLayout>
  );
} 