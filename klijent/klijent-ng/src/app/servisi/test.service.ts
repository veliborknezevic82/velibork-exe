import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";
import { Kontakt } from '../../../../kontakt';
import { Observable}  from "rxjs/Observable";



@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getContacts(){
     return this.http.get("http://localhost:3300/radnici")
  
}

  postContact(kontakt: Kontakt){
      return this.http.post("http://localhost:3300/radnici", kontakt)
  }
  deleteContact(_id: string){
      return this.http.delete("http://localhost:3300/radnici/" +_id)
  }
}

  
