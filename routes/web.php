<?php

use App\Http\Controllers\Berita;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\AnggotaController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    
    
    // Route untuk manajemen anggota (hanya untuk UKM)
    Route::group(['prefix' => 'anggota'], function () {
        Route::get('/', function (\Illuminate\Http\Request $request) {
            if ($request->user()->role !== 'ukm') {
                abort(403, 'Hanya UKM yang dapat mengakses halaman ini');
            }
            return app(AnggotaController::class)->index($request);
        })->name('anggota.index');
        
        Route::get('/create', function (\Illuminate\Http\Request $request) {
            if ($request->user()->role !== 'ukm') {
                abort(403, 'Hanya UKM yang dapat mengakses halaman ini');
            }
            return app(AnggotaController::class)->create();
        })->name('anggota.create');
        
        Route::post('/', function (\Illuminate\Http\Request $request) {
            if ($request->user()->role !== 'ukm') {
                abort(403, 'Hanya UKM yang dapat mengakses halaman ini');
            }
            return app(AnggotaController::class)->store($request);
        })->name('anggota.store');
        
        Route::get('/{anggotum}/edit', function (\Illuminate\Http\Request $request, $anggotum) {
            if ($request->user()->role !== 'ukm') {
                abort(403, 'Hanya UKM yang dapat mengakses halaman ini');
            }
            return app(AnggotaController::class)->edit(
                \App\Models\ModelAnggota::findOrFail($anggotum),
                $request
            );
        })->name('anggota.edit');
        
        Route::put('/{anggotum}', function (\Illuminate\Http\Request $request, $anggotum) {
            if ($request->user()->role !== 'ukm') {
                abort(403, 'Hanya UKM yang dapat mengakses halaman ini');
            }
            return app(AnggotaController::class)->update(
                $request,
                \App\Models\ModelAnggota::findOrFail($anggotum)
            );
        })->name('anggota.update');
        
        Route::delete('/{anggotum}', function (\Illuminate\Http\Request $request, $anggotum) {
            if ($request->user()->role !== 'ukm') {
                abort(403, 'Hanya UKM yang dapat mengakses halaman ini');
            }
            return app(AnggotaController::class)->destroy(
                \App\Models\ModelAnggota::findOrFail($anggotum),
                $request
            );
        })->name('anggota.destroy');
    });
    
    // Route untuk manajemen berita (untuk Admin dan UKM)
    Route::group(['prefix' => 'berita'], function () {
        Route::get('/', function (\Illuminate\Http\Request $request) {
            if (!in_array($request->user()->role, ['admin', 'ukm'])) {
                abort(403, 'Anda tidak memiliki akses ke halaman ini');
            }
            return app(BeritaController::class)->index($request);
        })->name('berita.index');
        
        Route::get('/create', function (\Illuminate\Http\Request $request) {
            if (!in_array($request->user()->role, ['admin', 'ukm'])) {
                abort(403, 'Anda tidak memiliki akses ke halaman ini');
            }
            return app(BeritaController::class)->create();
        })->name('berita.create');
        
        Route::post('/', function (\Illuminate\Http\Request $request) {
            if (!in_array($request->user()->role, ['admin', 'ukm'])) {
                abort(403, 'Anda tidak memiliki akses ke halaman ini');
            }
            return app(BeritaController::class)->store($request);
        })->name('berita.store');
        
        Route::get('/{beritum}', function (\Illuminate\Http\Request $request, $beritum) {
            if (!in_array($request->user()->role, ['admin', 'ukm'])) {
                abort(403, 'Anda tidak memiliki akses ke halaman ini');
            }
            return app(BeritaController::class)->show(
                \App\Models\ModelBerita::findOrFail($beritum),
                $request
            );
        })->name('berita.show');
        
        Route::get('/{beritum}/edit', function (\Illuminate\Http\Request $request, $beritum) {
            if (!in_array($request->user()->role, ['admin', 'ukm'])) {
                abort(403, 'Anda tidak memiliki akses ke halaman ini');
            }
            return app(BeritaController::class)->edit(
                \App\Models\ModelBerita::findOrFail($beritum),
                $request
            );
        })->name('berita.edit');
        
        Route::put('/{beritum}', function (\Illuminate\Http\Request $request, $beritum) {
            if (!in_array($request->user()->role, ['admin', 'ukm'])) {
                abort(403, 'Anda tidak memiliki akses ke halaman ini');
            }
            return app(BeritaController::class)->update(
                $request,
                \App\Models\ModelBerita::findOrFail($beritum)
            );
        })->name('berita.update');
        
        Route::delete('/{beritum}', function (\Illuminate\Http\Request $request, $beritum) {
            if (!in_array($request->user()->role, ['admin', 'ukm'])) {
                abort(403, 'Anda tidak memiliki akses ke halaman ini');
            }
            return app(BeritaController::class)->destroy(
                \App\Models\ModelBerita::findOrFail($beritum),
                $request
            );
        })->name('berita.destroy');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
