import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './hero/hero';
import {HeroService} from "./heroService";

@Component({
  selector: 'my-heroes',
  styleUrls: ['app/heroes.css'],
  templateUrl: 'app/heroes.tpl.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class HeroesComponent {
    heroes: Hero[];	
    hero: Hero;
    constructor(heroService: HeroService) {
        console.log('loading heroes-component');
        this.heroes = heroService.getHeroes();
        console.log(this.heroes);
    }

    getSelectedClass(hero: Hero) {
        return { 'selected': this.hero === hero };
    }

    onSelect(hero: Hero) {
        this.hero = hero;
    }
}