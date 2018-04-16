import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../../models/hero.model';

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

  constructor() { }

  ngOnInit() {
  }

  saveForm() {
    console.log(this.hero);
  }

}
