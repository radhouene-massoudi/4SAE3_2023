import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  klass = "4SAE3";
  kolor = 'red';
  search='';
  listResidences = [
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
      "address": "Borj Cedria", "image": "../../assets/images/R3.jpg"
    },
    {
      "id": 4, "name": "El Anber", "address": "Manzah 5",
      "image": "../../assets/images/R4.jpg"
    }
  ];
  showMsg() {
    console.log("bonjour ");
  }
  changeColor(c: any) {
    this.kolor = c
  }
}
