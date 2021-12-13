import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent {

  mostrar:boolean = false;


  //recibimos resultado del hijo
  @Input() resultFather: number | string = "";

}
