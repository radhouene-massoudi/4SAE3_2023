import { Component } from '@angular/core';
import { FirstserviceService } from '../firstservice.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  somme:number=0;
constructor(private service:FirstserviceService){

}
ngOnInit(){
  //this.service.sayHello()
this.somme=this.service.sum(1,7);
console.log(this.somme);
this.service.myObs().subscribe();
}

}
