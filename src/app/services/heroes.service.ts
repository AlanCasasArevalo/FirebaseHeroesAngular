import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Hero } from '../models/hero.model';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroesService {

  baseFireBaseURL = 'https://fir-heroesangular.firebaseio.com/heroes';

  constructor( private http: Http) { }

  newHeroToFirebase(hero: Hero) {

    const url = `${ this.baseFireBaseURL }.json`;

    const body = JSON.stringify(hero);
    const headers = new Headers({
      'Content-Type' : 'application/json'
    });

    return this.http.post( url, body, { headers })
    .map( (response: any) => {
      console.log('Respuesta en el Servicio Al crear nuevo heroe');
      console.log(response);
      return response.json() ;
    });
  }

  updateHeroToFirebase(hero: Hero, key$: string) {

    // 'https://fir-heroesangular.firebaseio.com/heroes/-LACSxSzJousxqlG9e04.json'
    const url = `${ this.baseFireBaseURL }/${ key$ }.json`;


    const body = JSON.stringify(hero);
    const headers = new Headers({
      'Content-Type' : 'application/json'
    });

    return this.http.put( url, body, {headers})
              .map( (response: any) => {
                console.log('Respuesta en el Servicio Al actualizar nuevo heroe');
                console.log(response);
                return response.json() ;
              });
  }

  getHeroByID( key$: string ) {
    const url = `${ this.baseFireBaseURL }/${ key$ }.json`;

    return this.http.get( url )
              .map( (response: any) => {
                console.log('Respuesta en el Servicio Al obtener heroe por ID');
                console.log(response);
                return response.json() ;
              });
  }

  getHeroes() {
    const url = `${ this.baseFireBaseURL }.json`;

    return this.http.get( url )
              .map( (response: any) => {
                console.log(url);
                console.log('Respuesta en el Servicio Al obtener todos los heroes');
                console.log(response);
                return response.json() ;
              });
  }

}
