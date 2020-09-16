import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import "rxjs/add/operator/map";
import { TestService } from './servisi/test.service';
import { LoginComponent } from './komponente/login/login.component';
import { HomeComponent } from './komponente/home/home.component';
import { PageNotFoundComponent } from './komponente/page-not-found/page-not-found.component';
import { SignComponent } from './komponente/sign/sign.component';
import { KategorijeComponent } from './komponente/kategorije/kategorije.component';
import { HeaderComponent } from './komponente/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    SignComponent,
    KategorijeComponent,
    HeaderComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
    ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
