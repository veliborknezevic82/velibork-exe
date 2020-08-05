import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
radi (msg){
  return alert(msg)
}
  constructor() { }
}
