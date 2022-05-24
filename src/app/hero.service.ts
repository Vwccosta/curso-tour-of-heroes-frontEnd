import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './heroes/hero.model';
import {HEROES  } from './mock-heroes'
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes():Observable<Hero[]> {
    // O of retorna a lista do Hero[], ele vai virar um observable
    const heroes =of(HEROES);

    return heroes;
  }
}
