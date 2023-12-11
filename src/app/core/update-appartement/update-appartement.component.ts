import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppartementService } from 'src/app/appartementService/appartement.service';
import { Apartment } from '../models/Apartment';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-appartement',
  templateUrl: './update-appartement.component.html',
  styleUrls: ['./update-appartement.component.css']
})
export class UpdateAppartementComponent {


constructor(
  private ac:ActivatedRoute,
  private s:AppartementService,
  private router:Router
  ){

}
fg = new FormGroup({
  numap: new FormControl('', [Validators.required, Validators.minLength(3)]),
  FloorNub: new FormControl(''),
  surface: new FormControl(''),
  terrace: new FormControl(''),
  surfaceterrace: new FormControl(''),
  cat: new FormControl(''),
  desc: new FormControl(''),
  residence: new FormControl(''),

})
app !:Apartment;
ngOnInit(){
 this.s.findAppartementById(
  this.ac.snapshot.params['id']
  ).subscribe(
    (d)=>{
this.app=d;
this.fg.patchValue(d)
//console.log(d)
    }
  ) 
}
updateApp(){
  this.s.updateAppartemrnt(this.ac.snapshot.params['id'],this.fg.value).subscribe(
    ()=>{
      this.router.navigate(['/list'])
    }
  )
}
}
