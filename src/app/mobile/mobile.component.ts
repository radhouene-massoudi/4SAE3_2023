import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  listProdcut=[
    {id: 1, title: "Mobile 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "Mobile 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "Mobile 3", price: 16, quantity: 8, like: 0}, ]
    afterreviceData(e:any){
let index=this.listProdcut.indexOf(e)
if(index!=-1){
  this.listProdcut[index].like++;
}
    }
  }
