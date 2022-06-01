//no caso de criação do component fora do angular CLI(prompt de comando) você pode criar toda essa estrutura usando o a-component
import { Location } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../heroes/hero.model';
//@component importa o angular core
@Component({
//é usado o prefixo app para não ter conflito com o HTML, no angular.Json dá para mudar o prefixo padrão.
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
//export cria uma classe pai, a classe precisa do Component no final do nome da classe.
export class HeroDetailComponent implements OnInit {
 hero!: Hero;
  //O @input serve para pegar um valor de fora.
  //@Input() hero?: Hero;
  constructor(
    //Cria o metodo para buscar o hero
    private heroService: HeroService,
    //Cria interação com o historico do browser
    private location: Location,
    //ele segura as informações sobre a rota
    private route: ActivatedRoute){}

    ngOnInit(): void {
      this.getHero();
    }
    getHero(): void{
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
    }
    goBack(): void{
      this.location.back();
    }
}
