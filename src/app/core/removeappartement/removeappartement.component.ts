import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppartementService } from 'src/app/appartementService/appartement.service';

@Component({
  selector: 'app-removeappartement',
  templateUrl: './removeappartement.component.html',
  styleUrls: ['./removeappartement.component.css']
})
export class RemoveappartementComponent {
  id:any;
constructor(
  private ac:ActivatedRoute,
  private s:AppartementService,
  private router:Router
  ){

}
ngOnInit(){
  this.id=this.ac.snapshot.params['id'];
  this.s.findAppartementById(this.id).subscribe(
    ()=>{
      this.s.removeApparetmeent(this.id).subscribe(
        ()=>{
    this.router.navigate(['list'])
        }
      );
    },
    (err)=>{
      alert("id doesn't exist")
    }
  )
  
}
}
