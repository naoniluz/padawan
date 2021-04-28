import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

import {FormComponent} from './form/form.component';
import { HomeComponent} from './home/home.component';




const routes: Routes = [
  {path:'',component: HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'form', component: FormComponent},
  
];



@NgModule({
  exports: [ RouterModule],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
