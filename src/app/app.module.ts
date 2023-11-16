import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { ResidenceComponent } from './core/residence/residence.component';
import { TestComponent } from './test/test.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './core/login/login.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DetailresidenceComponent } from './core/detailresidence/detailresidence.component';
import { UpdateresidenceComponent } from './core/updateresidence/updateresidence.component';
import { ApartmentsComponent } from './core/apartments/apartments.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ResidenceComponent,
    TestComponent,
    NotfoundComponent,
    LoginComponent,
    NavComponent,
    FooterComponent,
    DetailresidenceComponent,
    UpdateresidenceComponent,
    ApartmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
