<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ModelBerita extends Model
{
    protected $table = 'beritas';
    protected $fillable = ['judul', 'isi', 'gambar', 'tanggal', 'user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
