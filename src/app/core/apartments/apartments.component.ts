import { Component } from '@angular/core';
import { Apartment } from '../models/Apartment';
import { Residence } from '../models/Residence';
import { ActivatedRoute } from '@angular/router';
import { AppartementService } from 'src/app/appartementService/appartement.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  id:any;
  app:Apartment []=[];
  constructor(private ac:ActivatedRoute, private s:AppartementService){

  }
  ngOnInit(){
    /*
    this.id = this.ac.snapshot.params['idresidence'];
    for(let i=0;i<this.listApartments.length;i++){
if(this.listApartments[i].residence.id==this.id){
  this.app.push(this.listApartments[i]);
}
    }*/
    this.s.getAppartemets().subscribe(
      (data)=>{
        this.app=data;
      }
    );
  }
/*
  Residences: Residence[] = [
    {
      "id": 1, "name": "El fel", "address": "Borj Cedria",
      "image": "../../assets/images/R1.jpeg"
    },
    {
      "id": 2, "name": "El yasmine",
      "address": "Ezzahra", "image": "../../assets/images/R2.jpg"
    },
    {
      "id": 3, "name": "El Arij",
      "address": "Rades", "image": "../../assets/images/R3.jpg"
    },
    {
      "id": 4, "name": "El Anber", "address": "Manzah 5",
      "image": "../../assets/images/R4.jpg"
    }
  ];
  listApartments: Apartment[] = [
    {
      "id": 1, "numap": 1, "FloorNub": 0, "surface": 100, "terrace": "oui", "surfaceTerrace": 20, "cat": "S + 1", "desc": "AppartementS+ 1", "residence": this.Residences[0]
    },
    {
      "id": 2, "numap": 2, "FloorNub": 0, "surface": 130, "terrace": "non", "surfaceTerrace": 0, "cat": "S + 2", "desc": "AppartementS+ 2", "residence": this.Residences[3]
    },
    {
      "id": 3, "numap": 3, "FloorNub": 0, "surface": 150, "terrace": "oui", "surfaceTerrace": 30, "cat": "S + 3", "desc": "AppartementS+ 3", "residence": this.Residences[1]
    }];
*/
}
