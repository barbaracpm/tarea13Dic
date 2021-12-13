import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})


export class CalculateComponent {

values = {
  value1: "",
  value2: ""
}

result: number | string = "";

//creamos objeto de tipo eventEmmitter para enviar info al padre
@Output() changeResult = new EventEmitter<string | number>();

//checkValues() Prepara los valores introducidos por el usuario para realizar las operaciones.
//Si hay valores en ambos campos devuelve un objeto de números. Si no, devuelve undefined.
checkValues(): any {
  if(this.values.value1.trim().length !== 0 && this.values.value2.trim().length !== 0) {
    return {value1: parseInt(this.values.value1), value2:parseInt(this.values.value2)};
  }

  return;

}

//sumar
sum(): void {

  //recuperamos los valores que ya han pasado por la función checkValues
  const values = this.checkValues();

  //si los campos están correctos se realiza la operación
  if (values !== undefined) {

    this.result = values.value1 +  values.value2;
    console.log(this.result);
    //enviamos el resultado al padre
    this.changeResult.emit(this.result);
  }

}

//restar
substract(): void {

  const values = this.checkValues();

  if (values !== undefined) {

    this.result = values.value1 -  values.value2;
    console.log(this.result);
    this.changeResult.emit(this.result);

  }

}

multiply(): void {

  const values = this.checkValues();

  if (values !== undefined) {

    this.result = values.value1 *  values.value2;
    console.log(this.result);
    this.changeResult.emit(this.result);

  }

}


divide(): void {

  const values = this.checkValues();

  if (values !== undefined) {
    this.result = values.value1 /  values.value2;
    console.log(this.result);
    this.changeResult.emit(this.result);

  }

}

reset(): void {

  this.values = {
    value1: "",
    value2: ""
  }

  this.result= "";
  this.changeResult.emit(this.result);


}

    //Es una especie de constructor interno, inicializador de todo el contenido del componente. Se ejecuta una única vez. Sirve como constructor si queremos hacer modificaciones en contenidos del DOM.
    ngOnInit() {
      console.log("ngOnInit. Componente calculate iniciado");

    }
    //Se ejecuta cada vez que detecta cualquier cambio en el componente (aunque no sea de un @Input)
    ngDoCheck() {
      console.log("ngDoCheck. Se ha detectado cualquier cambio en el componente calculate");
    }


}
