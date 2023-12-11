import { Component } from '@angular/core';
import { AppartementService } from 'src/app/appartementService/appartement.service';
import { Apartment } from '../models/Apartment';

@Component({
  selector: 'app-listappartement',
  templateUrl: './listappartement.component.html',
  styleUrls: ['./listappartement.component.css']
})
export class ListappartementComponent  {
  app:Apartment []=[];
constructor(private s:AppartementService){

}
ngOnInit(){
this.s.getAppartemets().subscribe(
  (data)=>{
    console.log(data);
    this.app=data;
  }
)
}
}
