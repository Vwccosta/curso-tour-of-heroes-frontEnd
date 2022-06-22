import { Component, OnInit } from '@angular/core';
import { HeroService } from '../core/services/hero.service';
import { Hero } from '../core/models/hero.model';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit{
displayedColumns: String[] = ['id','name'];
heroes : Hero[] = [];

constructor(private heroService: HeroService,){

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


}


