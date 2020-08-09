import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewModule } from './view-model/view.module';
import { TestService } from './servisi/test.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import "rxjs/add/operator/map";



@NgModule({
  declarations: [
    AppComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ViewModule,
    FormsModule,
    HttpClientModule,
    
    
    

  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
