<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateForms1Table extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('forms1', function (Blueprint $table) {
          $table->increments('id');
          $table->string('UserName');
          $table->string('mode');
          $table->string('time');
          $table->string('in1');
          $table->string('content');
          $table->string('signature');
          $table->string('lebels');
          $table->string('firstName');
          // $table->string('right1');
          // $table->string('right2');
          // $table->string('right3');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('forms1');
    }
}
