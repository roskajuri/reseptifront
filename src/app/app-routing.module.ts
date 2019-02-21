import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReseptiComponent } from './resepti/resepti.component';
import { ReseptimuokkausComponent } from './reseptimuokkaus/reseptimuokkaus.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'resepti', component: ReseptiComponent},
  { path: 'resepti/:id', component: ReseptimuokkausComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
