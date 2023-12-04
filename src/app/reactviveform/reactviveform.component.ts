import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppartementService } from '../appartementService/appartement.service';

@Component({
  selector: 'app-reactviveform',
  templateUrl: './reactviveform.component.html',
  styleUrls: ['./reactviveform.component.css']
})
export class ReactviveformComponent {
login=new FormControl('',[Validators.required,Validators.minLength(3)]);
password=new FormControl('',Validators.required);

fg=new FormGroup(
  {
      cin:new FormControl('',[Validators.pattern("[0-9]*")]),
    n:new FormControl('',[Validators.required,Validators.minLength(3)]),
    surname:new FormControl('yyyy',Validators.required),
    email:new FormControl('',Validators.email)
  }
);
show(){
  console.log(this.login)
}

showForm(f:any){
  console.log(f)
}

constructor(private fb: FormBuilder,private service:AppartementService) { }
formb = this.fb.group({
  cin1: ['', [Validators.pattern("[0-9]*")]],
  name1: ['',[Validators.required]],
})

get champsname(){
  return this.formb.get('name1');
}


saveAppartement(){
  this.service.addAppartement(this.fg.value).subscribe(
    ()=>{
      alert('added')
    }
  )
}
}


