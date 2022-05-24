import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from './hero.model';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit{

heroes : Hero[] = [];
selectedHero?: Hero;

constructor(private heroService: HeroService){

}
ngOnInit(): void {
  this.getHeroes();
}
getHeroes(): void{
  //O subscribe notifica que ocorreu alguma mudança
 this.heroService.getHeroes().subscribe(heroes =>
  this.heroes= heroes);
}

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

}


