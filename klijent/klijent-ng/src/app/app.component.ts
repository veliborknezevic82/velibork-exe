import { Component } from '@angular/core';
import { TestService } from './servisi/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService]
})
export class AppComponent {

   public broj1 = ""
   public broj2 = ""
  constructor(private _testService: TestService){}

  radiOki(){
    this._testService.radi(this.broj1)
  }
}
