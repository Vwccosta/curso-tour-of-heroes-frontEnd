import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './heroes/hero.model';
import { MessageService } from './message.service';
import {HEROES  } from './mock-heroes'
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService){}
  //no Observable temos retorno do valor assicrono e sicrono
  getHeroes():Observable<Hero[]> {
    // O of retorna a lista do Hero[], ele vai virar um observable
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
