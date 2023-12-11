import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceComponent } from './core/residence/residence.component';
import { TestComponent } from './test/test.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './core/login/login.component';
import { DetailresidenceComponent } from './core/detailresidence/detailresidence.component';
import { UpdateresidenceComponent } from './core/updateresidence/updateresidence.component';
import { ApartmentsComponent } from './core/apartments/apartments.component';
import { ReactviveformComponent } from './reactviveform/reactviveform.component';
import { ServiceComponent } from './service/service.component';
import { ListappartementComponent } from './core/listappartement/listappartement.component';
import { RemoveappartementComponent } from './core/removeappartement/removeappartement.component';
import { UpdateAppartementComponent } from './core/update-appartement/update-appartement.component';

const r: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'details/:idt',component:DetailresidenceComponent},
  {path:'login',component:LoginComponent},
  {path:'add',component:ReactviveformComponent},
  {path:'updateapp/:id',component:UpdateAppartementComponent},
  {path:'app/:idresidence',component:ApartmentsComponent},
  {path:'residence',component:ResidenceComponent,children:[
    {path:'update/:id',component:UpdateresidenceComponent}
  ]},
  {path:'test',component:TestComponent},
  {path:'remove/:id',component:RemoveappartementComponent},
  {path:'service',component:ServiceComponent},
  {path:'list',component:ListappartementComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(r)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
