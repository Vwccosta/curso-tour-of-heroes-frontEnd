import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Hero } from './hero.model';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit{

heroes : Hero[] = [];
selectedHero?: Hero;

constructor(private heroService: HeroService, private messageService: MessageService){

}
ngOnInit(): void {
  this.getHeroes();
}
getHeroes(): void{
  //O subscribe notifica que ocorreu alguma mudança, no caso do Observable precisamos usar o subscribe para ele executar
 this.heroService.getHeroes().subscribe(
   (heroes)  => (this.heroes = heroes)
   );
}

onSelect(hero: Hero): void {
  this.selectedHero = hero;
  //this.messageService.add('HeroesComponent: Selected hero id'+ hero.id); ou
  this.messageService.add('HeroesComponent: Selected hero id=${hero.id}');
  }
}


