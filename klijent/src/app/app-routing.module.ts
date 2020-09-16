import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './komponente/login/login.component';
import { HomeComponent } from './komponente/home/home.component';
import { PageNotFoundComponent } from './komponente/page-not-found/page-not-found.component';
import { SignComponent } from './komponente/sign/sign.component';
import { KategorijeComponent } from './komponente/kategorije/kategorije.component';




const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: 'pocetna'},
  { path:"pocetna", component: HomeComponent},
  { path: "login", component: LoginComponent}, 
  { path: "prijava-registracija", component: SignComponent},
  { path: "kategorije", component: KategorijeComponent},
  { path:"**", component: PageNotFoundComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
