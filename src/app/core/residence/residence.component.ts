import { Component } from '@angular/core';
import { Residence } from '../models/Residence';
import { Apartment } from '../models/Apartment';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  j=-1;
  Apprs:Apartment[]=[];
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
      "id": 1, "appartNum": 1, "floorNum": 0, "surface": 100, "terrace": "oui", "surfaceTerrace": 20, "category": "S + 1", "description": "AppartementS+ 1", "residence": this.Residences[0]
    },
    {
      "id": 2, "appartNum": 2, "floorNum": 0, "surface": 130, "terrace": "non", "surfaceTerrace": 0, "category": "S + 2", "description": "AppartementS+ 2", "residence": this.Residences[0]
    },
    {
      "id": 3, "appartNum": 3, "floorNum": 0, "surface": 150, "terrace": "oui", "surfaceTerrace": 30, "category": "S + 3", "description": "AppartementS+ 3", "residence": this.Residences[1]
    }];


showApp(Residence:any){
  let indexofresidence=this.Residences.indexOf(Residence);
  this.j=indexofresidence;
 
for(let i=0;i<this.listApartments.length;i++){
  if(this.listApartments[i].residence.id==this.Residences[indexofresidence].id){

    this.Apprs.push(this.listApartments[i]);
  }
  console.log(this.Apprs)
}
}
}
