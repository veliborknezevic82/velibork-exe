import { Component} from '@angular/core';
import { TestService } from './servisi/test.service';
import { Kontakt } from "../../../kontakt";
import { NgForm, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService]
  
})
export class AppComponent{

  
  private kontakti: Kontakt[]=[];
  private kontaktOsoba: Kontakt;

  constructor(private _testService: TestService){ 

      this._testService.getContacts().
      subscribe((res: Kontakt[]) => {
      this.kontakti=res} )

   
    }
    postCon(kon){
      this._testService.postContact(kon).
      subscribe( (data: Kontakt) => this.kontakti.push(data))
   
    }
      
      
     }


  

