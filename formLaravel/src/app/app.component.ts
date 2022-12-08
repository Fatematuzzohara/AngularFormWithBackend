import { Component, OnInit,Input } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormGroup, AbstractControl, Validators, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router, Routes,ActivatedRoute, ParamMap } from '@angular/router';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { catchError, first, map } from 'rxjs/operators';
import { throwError, VirtualTimeScheduler } from 'rxjs';
import {NgForm} from '@angular/forms';
import{UsersService} from './users.service';
import { identifierName, isNgTemplate } from '@angular/compiler';



export interface Fruit {
  name: string;
  invalid:boolean;

}

export interface Fruits {
  email: string;

}

export interface com1{

content: string ;
time: string;
signature: string;
firstName: string ;
lebels: string;
UserName: string;
mode: string;
in1: string ;
right1:string;
right2:string;
right3:string;
}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent   implements OnInit{
  [x: string]: any;
  postId:any;

  firstName='';
  content='';
  in1= '';
  name='';
  disable=true;
  event: any;
  UserName='';
  mode='';
  lebels= '';
  signature='';
  time='';
  ntMail='';
  mail='';
  trigMail= '';
  r1: string[] = [];
  r2: string[] = [];
  r3: string[] = [];
  isButtonVisibletable=true;
  isButtonVisibleNew=true;
  public new=false;
  errorMessage: any;
  data: any = [];

  
  public isButtonVisible = true;
  public isButtonVisible1 = false;
  public isButtonVisible2 = false;
  item_id: any;
  commonService: any;


  delete(id:number){
    this.http.delete('http://127.0.0.1:8000/api/delete/'+id)
    .subscribe(); 
    console.log('http://127.0.0.1:8000/api/delete/'+id);
  }



  Show(id:number){
  console.log( "show works "+ id);
  console.log( 'http://127.0.0.1:8000/api/list/'+id);
  return this.onSave(this.item_id=id);
  }



  Showlist(id:number){
  
  console.log( 'http://127.0.0.1:8000/api/list/'+id +" it does work");
  this.http.get('http://127.0.0.1:8000/api/list/'+id).subscribe(data=>{
  this.data=data
  
  this.data.UserName,
  this.data.content,
  this.data.time,
  this.data.signature,
  this.data.firstName,
  this.data.lebels,
  this.data.mode,
  this.data.in1,
  this.data.right1.split(","),
  this.data.right2.split(","),
  this.data.right3.split(",");
  // console.log(this.data.right2);
   
  // console.log(this.UserName);
  
  })

  }


 
  ngOnInit(): void {

    throw new Error('Method not implemented.');
   
  }

  
  it=false;
  theRemovedElement='';
  removable = true;
  addOnBlur = true;
  haveError = false;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

   public fruits: Fruit [] =[];
   public fruits2:Fruit [] =[];
   public fruits3:Fruit [] =[];
   public wrong:  Fruit [] =[];
   public right1: Fruits[] =[];
   public right2: Fruits[] =[];
   public right3: Fruits[] =[];
   public fruitn: com1  [] =[];


   push: any;
   json:any;

obj:any;

  constructor(private user:UsersService,private http: HttpClient, private router: Router,public fb: FormBuilder){

    this.user.getdata().subscribe(data=>{
      // console.warn(data)
     this.data=data
     
    
    
    })
    

}



add(event: MatChipInputEvent): void {
  if (event.value!='' && event.value.length != 0 && event.value!=' ' && event.value!='  '&& event.value!='   '&& event.value!='    '&& event.value!='      '
  && this.fruits.length < 5 ){

  if (this.validateEmail(event.value)){
    const value = (event.value || '').trim();

    // Add our fruit
    if (value && value!='') {
      this.fruits.push({name: value,invalid: false });
      event.chipInput!.clear();
      this.it=false;
      this.r1.push(value);
    // Clear the input value
  }

}
  else{
 this.fruits.push({  name: event.value, invalid: true });
   event.chipInput!.clear();
    this.it=true;
    this.haveError=true;
    this.wrong.push({
      name: event.value,
      invalid: true
    });


         }
}}



///////////
add1(event: MatChipInputEvent): void {
if (event.value!='' && event.value.length != 0 && event.value!=' '&& this.fruits2.length < 5 ){

if (this.validateEmail(event.value)){
  const value2 = (event.value || '').trim();
  // Add our fruit
  if (value2 && value2!='') {
    this.fruits2.push({name: value2,invalid: false });
    event.chipInput!.clear();
    this.it=false;
    this.r2.push(value2);
  // Clear the input value
}
}
else{
this.fruits2.push({  name: event.value, invalid: true });
 event.chipInput!.clear();
  this.it=true;
  this.haveError=true;
  this.wrong.push({
    name: event.value,
    invalid: true
  });}
      }}

////////////
add2(event: MatChipInputEvent): void {
if (event.value!='' && event.value.length != 0 && event.value!=' ' && this.fruits3.length < 5 ){

if (this.validateEmail(event.value)){
  const value3 = (event.value || '').trim();
  // Add our fruit
  if (value3 && value3!='') {
    this.fruits3.push({name: value3,invalid: false });
    event.chipInput!.clear();
    this.it=false;
    this.r3.push(value3);
  // Clear the input value
}

}
else{
this.fruits3.push({  name: event.value, invalid: true });
 event.chipInput!.clear();
  this.it=true;

  this.haveError=true;
  this.wrong.push({
    name: event.value,
    invalid: true
  });
 }

}
}




private validateEmail(email:any) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}



onSaveNew(){
  this.fruitn.push({
    UserName:this.UserName,
    content: this.content,
    time: this.time,
    signature: this.signature,
    firstName: this.firstName,
    lebels: this.lebels,
    mode: this.mode,
    in1: this.in1,
    // var str = arr.join(", ");  
    right1:this.r1.join(","),
    right2:this.r2.join(","),
    right3:this.r3.join(",")

  });
  this.http.post<com1>('http://127.0.0.1:8000/api/lastmodel',this.fruitn).subscribe({
  next: data => {
      this.postId = this.fruitn;
   
  },
  error: error => {
      this.errorMessage = error.message;
      console.error('There was an error!', error);
  }
})
}




onSave(item_id: number){
  
  this.fruitn.push({ 
    UserName:this.data.UserName=this.UserName,
    content: this.data.content=this.content,
    time: this.data.time=this.time,
    signature: this.data.signature=this.signature,
    firstName:this.data.firstName= this.firstName,
    lebels: this.data.lebels=this.lebels,
    mode: this.data.mode=this.mode,
    in1: this.data.in1=this.in1,
    // var str = arr.join(", ");
    // right1:this.data.right1=this.r1.join(","),
    right1:this.data.right1=this.r1.join(","),
    right2:this.data.right2=this.r2.join(","),
    right3:this.data.right3=this.r3.join(",")
  
  });
  
  let finalObj = {};
  // loop elements of the array 
  for(let i = 0; i < this.fruitn.length; i++ ) {
  Object.assign(finalObj, this.fruitn[i]);
  }
  
  // console.log("\nAfter converting array of objects to single object");
  // console.log(finalObj);
  this.http.put<any>('http://127.0.0.1:8000/api/update/'+item_id,finalObj).subscribe({
  // this.http.put<any>('http://127.0.0.1:8000/api/update/34',finalObj).subscribe({
    next: data => {
        this.postId = finalObj;
        console.log(this.fruitn);
      
     
    },
    error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
    }
  })
 
}


remove(fruit: Fruit): void {
  const index = this.fruits.indexOf(fruit);
  const index1 = this.fruits2.indexOf(fruit);
  const index2 = this.fruits3.indexOf(fruit);

  if (index >= 0) {
    this.fruits.splice(index, 1);
    this.wrong.splice(index, 0);
  }

  if (index1 >= 0) {
    this.fruits2.splice(index1, 1);
    this.wrong.splice(index1, 1);
  }

  if (index2 >= 0) {
    this.fruits3.splice(index2, 1);
    this.wrong.splice(index2, 1);
  }

if(this.wrong.length<=1){
this.wrong.shift();
}

}

}

function subscribe(arg0: { next: (data: any) => void; error: (error: any) => void; }) {
throw new Error('Function not implemented.');
}

