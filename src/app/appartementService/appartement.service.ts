import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppartementService {

  constructor(private http:HttpClient) { }
  //post/get/put/delete
  addAppartement(data:any){
   return this.http.post('http://localhost:3000/appartement/',data);
  }
  addResidence(data:any){
    return this.http.post('http://localhost:3000/residence/',data);
   }
   add(data:any,ENtity:string){
    return this.http.post('http://localhost:3000/'+ENtity,data);
   }
}
