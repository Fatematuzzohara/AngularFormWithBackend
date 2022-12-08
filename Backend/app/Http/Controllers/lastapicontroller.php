<?php
namespace App\Http\Controllers;
use App\Models\lastmodel;
use Illuminate\Http\Request;
use App\laravelforms;
use Illuminate\Support\Facades\Log;
class lastapicontroller extends Controller
{
    public function create(Request $request){

Log::info('An informational message.' .$request->input('UserName'));
// Log::info('An informational message111.' $request->input('UserName'))
$questions = $request->input();
  $laravelforms = new lastmodel();

foreach($questions as $course) {

$laravelforms  ->  UserName =$course['UserName'];
$laravelforms  ->  time =$course['time'];
$laravelforms  ->  mode =$course['mode'];
$laravelforms  ->  in1 =$course['in1'];
$laravelforms  ->  signature =$course['signature'];
$laravelforms  ->  firstName =$course['firstName'];
$laravelforms  ->  lebels =$course['lebels'];
$laravelforms  ->  content =$course['content'];
$laravelforms  ->  right1 =$course['right1'];
$laravelforms  ->  right2 =$course['right2'];
$laravelforms  ->  right3 =$course['right3'];

$laravelforms ->save();
}

return response()->json($laravelforms);

}
public function update(Request $request){
  $laravelforms =lastmodel::find($request->id) ;
  // foreach($questions as $course) {
// $laravelforms  ->  UserName =$course['UserName'];
// $laravelforms  ->  time =$course['time'];
// $laravelforms  ->  mode =$course['mode'];
// $laravelforms  ->  in1 =$course['in1'];
// $laravelforms  ->  signature =$course['signature'];
// $laravelforms  ->  firstName =$course['firstName'];
// $laravelforms  ->  lebels =$course['lebels'];
// $laravelforms  ->  content =$course['content'];
// $laravelforms  ->  right1 =$course['right1'];
// $laravelforms  ->  right2 =$course['right2'];
// $laravelforms  ->  right3 =$course['right3'];
    $laravelforms  ->  UserName =$request->{'UserName'};
    $laravelforms  ->  time =$request->{'time'};
    $laravelforms  ->  mode =$request->{'mode'};
    $laravelforms  ->  in1 =$request->{'in1'};
    $laravelforms  ->  signature =$request->{'signature'};
    $laravelforms  ->  firstName =$request->{'firstName'};
    $laravelforms  ->  lebels =$request->{'lebels'};
    $laravelforms  ->  content =$request->{'content'};
    $laravelforms  ->  right1 =$request->{'right1'};
    $laravelforms  ->  right2 =$request->{'right2'};
    $laravelforms  ->  right3 =$request->{'right3'};


    $laravelforms ->save();}


  // } return response()->json($laravelforms);



 function list(){
   return lastmodel::all();
 }
 function list1($id){
   return lastmodel::find($id);
 }
 function delete($id){

      $device= lastmodel::find($id);
      $device->delete();
 }


//////////

///////

}
