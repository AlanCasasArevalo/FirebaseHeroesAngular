import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {

  hero: Hero = {
    name: '',
    house: '',
    history: ''
  };

  new = false;
  id: string;

  constructor(
    private _heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params
      .subscribe( params => {
        console.log('Parametros recibidos en hero.component');
        console.log(params);
        this.id = params['id'];

        if (this.id !== 'new') {
          this._heroesService.getHeroByID(this.id)
            .subscribe( (response: any) => {
              this.hero = response;

              console.log('Nuestro heroe es:');
              console.log(this.hero);
            });
        }


      });
  }

  ngOnInit() {
  }

  saveHeroIntoFireBase() {

    if (this.id === 'new') {
      // Creando
      this._heroesService.newHeroToFirebase( this.hero )
      .subscribe( (response: any) => {
        console.log('Respuesta en el componente al Crear');
        console.log(response);

        this.router.navigate(['hero', response.name]);
      }, error => console.log(error));
    } else {
      // Actualizando
      this._heroesService.updateHeroToFirebase(this.hero, this.id)
        .subscribe( (response: any) => {
          console.log('Respuesta en el componente al Actualizar');
          console.log(response);
        }, error => console.log(error));
    }

  }

  addNewHero( form: NgForm ) {
    this.router.navigate(['/hero', 'new']);
    form.reset({
      house: 'Marvel'
    });
  }

}
