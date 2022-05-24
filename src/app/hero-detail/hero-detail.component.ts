//no caso de criação do component fora do angular CLI(prompt de comando) você pode criar toda essa estrutura usando o a-component
import { Component, Input, } from '@angular/core';
import { Hero } from '../heroes/hero.model';
//@component importa o angular core
@Component({
//é usado o prefixo app para não ter conflito com o HTML, no angular.Json dá para mudar o prefixo padrão.
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
//export cria uma classe pai, a classe precisa do Component no final do nome da classe.
export class HeroDetailComponent {
 //O @input serve para pegar um valor de fora.
  @Input() hero?: Hero;

}
