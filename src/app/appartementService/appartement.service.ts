import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apartment } from '../core/models/Apartment';
import { Observable } from 'rxjs';

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
   getAppartemets():Observable<Apartment[]>{
    return this.http.get<Apartment[]>('http://localhost:3000/appartement/')
   }
   removeApparetmeent(id:any){
return this.http.delete('http://localhost:3000/appartement/'+id)
   }
   findAppartementById(id:any):Observable<any>{
return this.http.get<any>('http://localhost:3000/appartement/'+id)
   }
   updateAppartemrnt(id:any,data:any){
return this.http.put('http://localhost:3000/appartement/'+id,data)
   }
}
