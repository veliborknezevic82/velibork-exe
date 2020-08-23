import { Component, OnInit} from '@angular/core';
import { TestService } from './servisi/test.service';
import { Kontakt } from "../../../kontakt";
import { NgForm, FormGroup } from '@angular/forms';
import { format } from 'url';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService]
  
})
export class AppComponent implements OnInit{

  
  private kontakti: Kontakt[]=[];
  private kontaktOsoba: Kontakt;
  
  clear(forma: NgForm){
    return forma.reset();
  }
  constructor(private _testService: TestService){ }

  ngOnInit() {
    this.get();
  }
  
    get(){
      this._testService.getContacts().
      subscribe((res: Kontakt[]) => {
      this.kontakti=res} )
    }

    postCon(forma: NgForm){
      this._testService.postContact(forma.value).
      subscribe( (data: Kontakt) => 
      this.kontakti.push(data))
      this.formaReset(forma);
      
      
    }

    delete(_id: string){
      this._testService.deleteContact(_id).
      subscribe(res => this.get()
      );
      }
    
    formaReset(forma: NgForm){
      forma.resetForm()
    }
  }


  

