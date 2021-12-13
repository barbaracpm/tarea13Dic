import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})

export class ShowResultComponent {

  //recibimos resultado del padre
  @Input() resultSon: number | string = "";

  //construye e inicia el componente. Se ejecuta una única vez. En general llevaría dentro las variables de la clase. Primero en ejecutarse.
  constructor() {
    console.log("Componente ShowResult montado con constructor");
  }

  //2º en ejecutarse si hay un valor @Input() en la clase. Y se ejecutará cada vez que este valor cambie y lo recibamos del padre.
  ngOnChanges() {
    console.log("ngOnChanges. Al componente Show-result le han llegado los cambios desde su padre Calculator");
  }

    //Es una especie de constructor interno, inicializador de todo el contenido del componente. Se ejecuta una única vez. Sirve como constructor si queremos hacer modificaciones en contenidos del DOM.
  ngOnInit() {
    console.log("ngOnInit. Componente showResult iniciado");

  }
  //Se ejecuta cada vez que detecta cualquier cambio en el componente (aunque no sea de un @Input)
  ngDoCheck() {
    console.log("ngDoCheck. Se ha detectado cualquier cambio en el componente showResult");
  }

//Se ejecuta al destruir el componente
  ngOnDestroy(){
    console.log("ngOnDestroy. Componente destruido")
  }

  /////ngAfter//////////////////////////////
  //Se inicia cuando el contenido del template HTML se cargue por completo.
  ngAfterContentInit() {
    console.log("ngAfterContentInit. HTML completamente cargado");
  }

  //Se ejecuta cuando hay cualquier cambio en el template HTML
  ngAfterContentChecked() {
    console.log("ngAfterContentInit. Se ha modificado cualquier elemento del contenido (HTML)")
  }

    //Inicializa las view
  ngAfterViewInit() {
    console.log("ngAfterviewInit. Se han cargado las View y ViewChild");
  }

  //Se ejecuta cada vez que un view child se modifica
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked. Un view o view child se ha modificado" )

  }



}


