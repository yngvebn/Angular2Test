import {Component, bootstrap} from 'angular2/angular2';
import {HeroesComponent} from "./heroesComponent";
import {HeroService} from "./heroService";

@Component({
    selector: 'my-app',
    template: '<my-heroes></my-heroes>',
    directives: [HeroesComponent]
})
class AppComponent {
}
bootstrap(AppComponent, [HeroesComponent, HeroService]);
