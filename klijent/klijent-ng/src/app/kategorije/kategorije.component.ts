import { Component, OnInit, Input } from '@angular/core';
import { TestService} from '../servisi/test.service';
import { Kontakt} from "../../../../kontakt"


@Component({
  selector: 'app-kategorije',
  templateUrl: './kategorije.component.html',
  styleUrls: ['./kategorije.component.css'],
  
})
export class KategorijeComponent implements OnInit {
  private kontakti: Kontakt[]=[];
  private kontaktOsoba: Kontakt;
  
  private brojevi;

  

  constructor(private _testService: TestService) { }

  ngOnInit() {
    this.get();
    for( let i=1; i<10; i++){ this.brojevi.push[i]
    console.log(this.brojevi)}
  }

  get(){
    this._testService.getContacts().
    subscribe((res: Kontakt[]) => {
    this.kontakti=res} )
  }

  delete(_id: string){
    this._testService.deleteContact(_id).
    subscribe(res => this.get());
    }
}
