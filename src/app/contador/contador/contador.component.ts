import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template:`
  <h1>{{titulo}}</h1>
  <h2>Base: <strong>{{base}}</strong></h2>

  <button (click)="acumular(base)">+{{base}}</button>

  <span>{{numero}}</span>

  <button (click)="acumular(-base)">-{{base}}</button>

  `
})
export class ContadorComponent{
  titulo: string = 'Contador app';
  numero: number = 30;
  base: number = 5;

  acumular(valor:number){
    this.numero += valor;
  }

}
