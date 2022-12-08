<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class form extends Model
{
   protected $table = 'forms';
   protected $fillable =['userName','mode','time'];
}
//,'in1','content','firstName','lebels','signature'
