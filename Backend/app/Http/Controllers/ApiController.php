<?php
namespace App\Http\Controllers;
use App\Models\newform;
use Illuminate\Http\Request;
use App\forms1;
use Illuminate\Support\Facades\Log;
class ApiController extends Controller
{
    public function create(Request $request){

Log::info('An informational message.' .$request->input('UserName'));
// Log::info('An informational message111.' $request->input('UserName'))
$questions = $request->input();
  $forms1 = new newform();
// return $questions

        // $forms1  -> UserName = $request->input('UserName');
foreach($questions as $course) {
  
$forms1  ->  UserName =$course['UserName'];
$forms1  ->  time =$course['time'];
$forms1  ->  mode =$course['mode'];
$forms1  ->  in1 =$course['in1'];
$forms1  ->  signature =$course['signature'];
$forms1  ->  firstName =$course['firstName'];
$forms1  ->  lebels =$course['lebels'];
$forms1  ->  content =$course['content'];


$forms1 ->save();
}

return response()->json($forms1);

}}
