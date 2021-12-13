import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['DBZ','Naruto','Digimon','Shaman King'];
  animeBorrado: string = '';
  
  borrarAnime(): void{
    console.log("Borrando...");
    this.animeBorrado= this.heroes.shift() || '';
    
  }
}
