import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import "rxjs/add/operator/map";
import { TestService } from './servisi/test.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignComponent } from './sign/sign.component';
import { HeaderComponent } from './header/header.component';
import { KategorijeComponent } from './kategorije/kategorije.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    SignComponent,
    HeaderComponent,
    KategorijeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule
    ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
