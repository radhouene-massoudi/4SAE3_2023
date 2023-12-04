import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  constructor() { }
  
  sayHello(){
    alert('bonjour SAE3')
  }
  sum(a:number,b:number){
    return a+b;
  }
  myObs(){
   return new Observable (
    ()=>{
      console.log('observable 4SA3')
    }
   )
  }
  
}
