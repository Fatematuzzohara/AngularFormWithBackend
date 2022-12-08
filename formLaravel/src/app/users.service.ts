import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getdata(){
    let url= "http://127.0.0.1:8000/api/list";
    return this.http.get(url);
  }
  //  getdata1(id){
  //   let url= "http://127.0.0.1:8000/api/list/id";
  //   return this.http.get(url);
  // }
  
}
