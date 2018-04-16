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
  isLoading = true;

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
        // console.log('Heroes recibidos en heroes.component.ts');
        // console.log(this.heroes);

        this.heroes = response;
        this.isLoading = false;

        // Just to test isLoading.
        // setTimeout(() => {
        //   this.isLoading = false;
        //   this.heroes = response;
        // }, 3000);

      });
  }

  deleteHeroFromFirebase(key$: string) {

    this._heroesServices.deleteHeroFromFirebase( key$ )
        .subscribe( (response: any) => {

          if ( response ) {
            // Algo no funciono
            // tslint:disable-next-line:max-line-length
            console.log('Respuesta en heroes.component.ts al eliminar (null) es bueno😜  significa eliminacion ok asi que algo no funciono aqui');
            console.log(response);
          } else {
            // Todo funciono OK
            delete this.heroes[key$];
          }

        });

  }

}
