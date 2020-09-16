import { Component, OnInit, Input } from '@angular/core';
import { TestService} from '../../servisi/test.service';
import { Kontakt} from "../../modeli/registracija";
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-kategorije',
  templateUrl: './kategorije.component.html',
  styleUrls: ['./kategorije.component.css'],
  
})
export class KategorijeComponent implements OnInit {

  ELEMENT_DATA: Kontakt[];
  displayedColumns: string[] = ['ime', 'prezime', 'email', 'pasword'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  
  private kontaktOsoba: Kontakt;
  
  private brojevi;

  

  constructor(private _testService: TestService) { }

  ngOnInit() {
    this.get();
   
  }

  get(){
    this._testService.getContacts().
    subscribe((res: Kontakt[]) => {
    this.dataSource.data=res} )
  }

  delete(_id: string){
    this._testService.deleteContact(_id).
    subscribe(res => this.get());
    }
}
