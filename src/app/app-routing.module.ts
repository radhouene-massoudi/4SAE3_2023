import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceComponent } from './core/residence/residence.component';
import { TestComponent } from './test/test.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './core/login/login.component';
import { DetailresidenceComponent } from './core/detailresidence/detailresidence.component';
import { UpdateresidenceComponent } from './core/updateresidence/updateresidence.component';
import { ApartmentsComponent } from './core/apartments/apartments.component';

const r: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'details/:idt',component:DetailresidenceComponent},
  {path:'login',component:LoginComponent},
  {path:'app/:idresidence',component:ApartmentsComponent},
  {path:'residence',component:ResidenceComponent,children:[
    {path:'update/:id',component:UpdateresidenceComponent}
  ]},
  {path:'test',component:TestComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(r)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
