import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarsService } from 'src/app/services/bars.service';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  selectedCocktail: any;
  bars: any = [];
  ingredients!: string[];
  constructor(private router: Router, private cocktailService: CocktailsService, private barsService: BarsService) { }

  ngOnInit(): void {
    for (let i = 0; i < 8; i++) {
      this.bars.push(this.barsService.bars[Math.floor(Math.random() * this.barsService.bars.length)]);
    }
    let cocktailParam: string = decodeURI(this.router.url).replace('/cocktail-details/', '');
    this.selectedCocktail = this.cocktailService.cocktails.find((cocktail: any) => cocktail.name === cocktailParam);
    this.ingredients = this.selectedCocktail.ingredients.split(',')
  }

}
