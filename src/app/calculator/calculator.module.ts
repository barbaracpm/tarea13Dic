import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { CalculateModule } from './calculate/calculate.module';
import { ShowResultModule } from './show-result/show-result.module';



@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    CalculateModule,
    ShowResultModule
  ],

  exports: [
    CalculatorComponent

  ]
})
export class CalculatorModule { }
