import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';



@NgModule({
  declarations: [MenComponent, WomenComponent],
  imports: [
    CommonModule
  ]
})
export class PeopleModule { }
