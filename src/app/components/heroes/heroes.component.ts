import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor(
    private _heroesServices: HeroesService
  ) {
    this.getAllHeroes();
  }

  ngOnInit() {
  }

  getAllHeroes() {
    this._heroesServices.getHeroes()
      .subscribe( (response: any) => {
        this.heroes = response;
        console.log('Heroes recibidos en heroes.component.ts');
        console.log(this.heroes);
      });
  }

}
