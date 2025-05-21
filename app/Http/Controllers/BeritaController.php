<?php

namespace App\Http\Controllers;

use App\Models\ModelBerita;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BeritaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // Filter berita berdasarkan user yang login
        // Admin dapat melihat semua berita, UKM hanya melihat berita milik mereka
        if ($request->user()->role === 'admin') {
            $berita = ModelBerita::with('user')->orderBy('tanggal', 'desc')->get();
        } else {
            $berita = ModelBerita::with('user')
                ->where('user_id', $request->user()->id)
                ->orderBy('tanggal', 'desc')
                ->get();
        }
        
        return Inertia::render('berita/index', [
            'berita' => $berita
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('berita/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'isi' => 'required|string',
            'tanggal' => 'required|date',
        ]);

        // Tambahkan user_id dari user yang sedang login
        $validated['user_id'] = $request->user()->id;

        if ($request->hasFile('gambar')) {
            $validated['gambar'] = $request->file('gambar')->store('berita', 'public');
        }

        ModelBerita::create($validated);

        return redirect()->route('berita.index')->with('success', 'Berita berhasil ditambahkan!');
    }

    /**
     * Display the specified resource.
     */
    public function show(ModelBerita $beritum, Request $request)
    {
        // Admin dapat melihat semua berita, UKM hanya melihat berita milik mereka
        if ($request->user()->role !== 'admin' && $beritum->user_id !== $request->user()->id) {
            abort(403, 'Anda tidak memiliki akses untuk melihat berita ini');
        }
        
        return Inertia::render('berita/show', [
            'berita' => $beritum
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ModelBerita $beritum, Request $request)
    {
        // Admin dapat mengedit semua berita, UKM hanya mengedit berita milik mereka
        if ($request->user()->role !== 'admin' && $beritum->user_id !== $request->user()->id) {
            abort(403, 'Anda tidak memiliki akses untuk mengedit berita ini');
        }
        
        return Inertia::render('berita/edit', [
            'berita' => $beritum
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ModelBerita $beritum)
    {
        // Admin dapat mengupdate semua berita, UKM hanya update berita milik mereka
        if ($request->user()->role !== 'admin' && $beritum->user_id !== $request->user()->id) {
            abort(403, 'Anda tidak memiliki akses untuk mengubah berita ini');
        }
        
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'isi' => 'required|string',
            'tanggal' => 'required|date',
        ]);

        // Mempertahankan user_id yang sama
        $validated['user_id'] = $beritum->user_id;

        if ($request->hasFile('gambar')) {
            $validated['gambar'] = $request->file('gambar')->store('berita', 'public');
        }

        $beritum->update($validated);

        return redirect()->route('berita.index')->with('success', 'Berita berhasil diperbarui!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ModelBerita $beritum, Request $request)
    {
        // Admin dapat menghapus semua berita, UKM hanya hapus berita milik mereka
        if ($request->user()->role !== 'admin' && $beritum->user_id !== $request->user()->id) {
            abort(403, 'Anda tidak memiliki akses untuk menghapus berita ini');
        }
        
        $beritum->delete();

        return redirect()->route('berita.index')->with('success', 'Berita berhasil dihapus!');
    }
} 