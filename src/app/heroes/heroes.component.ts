import { Component } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
//onInit faz parte do ciclo de vida do componente
hero : Hero = {
  id: 1,
  name: 'Wolverine'
};

selectedHero?: Hero;
heroes = HEROES;
onSelect(hero: Hero): void {
  this.selectedHero= hero;
}

}


