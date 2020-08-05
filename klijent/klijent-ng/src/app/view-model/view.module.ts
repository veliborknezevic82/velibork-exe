import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { TestService } from '../servisi/test.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ TestComponent
    ]
})
export class ViewModule { }
