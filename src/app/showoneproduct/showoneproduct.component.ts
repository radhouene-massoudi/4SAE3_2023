import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-showoneproduct',
  templateUrl: './showoneproduct.component.html',
  styleUrls: ['./showoneproduct.component.css']
})
export class ShowoneproductComponent {
@Input()product:any;
@Output()sendNotif=new EventEmitter();
sendMsg(produit:any){
  this.sendNotif.emit(produit);
}
showMsgChild(){
  alert('bonjour child')
}
}
