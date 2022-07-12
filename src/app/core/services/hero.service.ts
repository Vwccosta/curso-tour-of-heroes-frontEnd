import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../models/hero.model';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes'
@Injectable({
  providedIn: 'root'
})
export class HeroService {
    private heroesUrl = 'api/heroes';


  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) {}
  //no Observable temos retorno do valor assicrono e sicrono
  // GET /heroes
  getHeroes(): Observable<Hero[]> {
   return this.http.get<Hero[]>(this.heroesUrl);
    /* O of retorna a lista do Hero[], ele vai virar um observable
    const heroes = of(HEROES);
    this.log('HeroService: fetched heroes');
    return heroes; */
  }
  //GET /heroes
  getHero(id: number): Observable<Hero> {
   return this.http.get<Hero>(`${this.heroesUrl}/{id}`)
    /* const hero = HEROES.find(hero => hero.id == id)!;
    this.log('HeroService: fetched hero id=${id}');
    return of(hero); */
  }
  private log(message: string): void{
    this.messageService.add(`HeroService: ${message}`)
  }
}
