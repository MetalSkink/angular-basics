import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['spiderman','ironman','batman','hulk','Wasp','ant-man'];
  heroeBorrado:string = "";

  borrarHeroe():void {
    this.heroeBorrado =this.heroes.shift() || '';
  }

}
