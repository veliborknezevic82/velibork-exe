import { Component} from '@angular/core';
import { TestService } from './servisi/test.service';
import { Kontakt } from "../../../kontakt.";
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService]
})
export class AppComponent{

oki = [{"ime": "kali"}, {"ime":"marko"}]
  private kontakti: Kontakt[]=[];

  constructor(private _testService: TestService){ 
    
      this._testService.getContacts().
      subscribe((res: Kontakt[]) => {
      this.kontakti=res} )
    
    
  }

  


}

  

