import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignComponent } from './sign/sign.component';
import { KategorijeComponent } from './kategorije/kategorije.component';



const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: 'home'},
  { path:"home", component: HomeComponent},
  { path: "login", component: LoginComponent}, 
  { path: "sign", component: SignComponent},
  { path: "kategorije", component: KategorijeComponent},
  { path:"**", component: PageNotFoundComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
