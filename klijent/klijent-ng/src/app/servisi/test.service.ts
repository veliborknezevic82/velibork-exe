import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";
import { Kontakt } from '../../../../kontakt.';
import { Observable}  from "rxjs/Observable"


@Injectable({
  providedIn: 'root'
})
export class TestService {

  kontakti: Kontakt[];

  constructor(private http: HttpClient) { }

  getContacts(){
     return this.http.get("http://localhost:3300/radnici")
  
}}
