<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ModelAnggota extends Model
{
    protected $table = 'anggotas';
    protected $fillable = ['nim', 'nama', 'prodi', 'angkatan', 'status', 'foto', 'user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
