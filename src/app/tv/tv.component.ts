import { Component, ViewChild } from '@angular/core';
import { ShowoneproductComponent } from '../showoneproduct/showoneproduct.component';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
  @ViewChild(ShowoneproductComponent)private prod!:ShowoneproductComponent;
  listProdcut=[
    {id: 1, title: "TV 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "TV 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "TV 3", price: 16, quantity: 8, like: 0}, ]
    afterreciveData(e:any){
      let index=this.listProdcut.indexOf(e)

      if(index!=-1){
        this.listProdcut[index].like++;
      }
    }
    affichierMsg(){
      this.prod.showMsgChild()
    }
  }
