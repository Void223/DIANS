import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  selectedCocktail: any;
  constructor(private router: Router, private cocktailService: CocktailsService) { }

  ngOnInit(): void {
    let cocktailParam: string = decodeURI(this.router.url).replace('/cocktail-details/', '');
    this.selectedCocktail = this.cocktailService.cocktails.find((cocktail: any) => cocktail.name === cocktailParam);
    console.log(this.selectedCocktail);

  }

}
