import { Component, OnInit } from '@angular/core';
import { TestService } from '../../servisi/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [TestService]
})
export class TestComponent implements OnInit {

  public broj =""

  constructor(private _testService: TestService) { }

radiOk (){
  this._testService.radi(this.broj)
  this.broj=""
}
  ngOnInit() {
  }

}
