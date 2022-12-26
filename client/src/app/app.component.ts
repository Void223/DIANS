import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BarsService } from './services/bars.service';
import { CocktailsService } from './services/cocktails.service';
import { Globals } from './shared/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'explore-and-find';

  constructor(private cocktailsService: CocktailsService, private barsService: BarsService) {
    this.cocktailsService.getAllCocktails();
    this.barsService.getAllBars();
  }
}
