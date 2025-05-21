<?php

namespace App\Http\Controllers;

use App\Models\ModelAnggota;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnggotaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // Filter anggota berdasarkan user yang login (UKM)
        // UKM hanya melihat anggota milik mereka
        $anggota = ModelAnggota::with('user')
            ->where('user_id', $request->user()->id)
            ->get();
        
        return Inertia::render('anggota/index', [
            'anggota' => $anggota
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('anggota/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nim' => 'required|string|max:20|unique:anggotas',
            'nama' => 'required|string|max:255',
            'prodi' => 'required|string|max:100',
            'angkatan' => 'required|string',
            'status' => 'required|string|in:aktif,pasif',
        ]);

        // Tambahkan user_id dari user yang sedang login
        $validated['user_id'] = $request->user()->id;

        if ($request->hasFile('foto')) {
            $validated['foto'] = $request->file('foto')->store('anggota', 'public');
        }

        ModelAnggota::create($validated);

        return redirect()->route('anggota.index')->with('success', 'Data anggota berhasil ditambahkan!');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ModelAnggota $anggotum, Request $request)
    {
        // Pastikan anggota milik user yang sedang login
        if ($anggotum->user_id !== $request->user()->id) {
            abort(403, 'Anda tidak memiliki akses untuk mengedit data ini');
        }
        
        return Inertia::render('anggota/edit', [
            'anggota' => $anggotum
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ModelAnggota $anggotum)
    {
        // Pastikan anggota milik user yang sedang login
        if ($anggotum->user_id !== $request->user()->id) {
            abort(403, 'Anda tidak memiliki akses untuk mengubah data ini');
        }
        
        $validated = $request->validate([
            'nim' => 'required|string|max:20|unique:anggotas,nim,' . $anggotum->id,
            'nama' => 'required|string|max:255',
            'prodi' => 'required|string|max:100',
            'angkatan' => 'required|string',
            'status' => 'required|string|in:aktif,pasif',
        ]);

        // Mempertahankan user_id yang sama
        $validated['user_id'] = $anggotum->user_id;

        if ($request->hasFile('foto')) {
            $validated['foto'] = $request->file('foto')->store('anggota', 'public');
        }

        $anggotum->update($validated);

        return redirect()->route('anggota.index')->with('success', 'Data anggota berhasil diperbarui!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ModelAnggota $anggotum, Request $request)
    {
        // Pastikan anggota milik user yang sedang login
        if ($anggotum->user_id !== $request->user()->id) {
            abort(403, 'Anda tidak memiliki akses untuk menghapus data ini');
        }
        
        $anggotum->delete();

        return redirect()->route('anggota.index')->with('success', 'Data anggota berhasil dihapus!');
    }
} 