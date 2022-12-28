import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarsService } from 'src/app/services/bars.service';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-bar-details',
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.scss']
})
export class BarDetailsComponent implements OnInit {
  selectedBar: any;
  cocktails: any = [];

  constructor(private router: Router, private barsService: BarsService, private cocktailsService: CocktailsService) {}

  ngOnInit(): void {
    for (let i = 0; i < 8; i++) {
      this.cocktails.push(this.cocktailsService.cocktails[Math.floor(Math.random() * this.cocktailsService.cocktails.length)]);
    }

    let barParam: string = decodeURI(this.router.url).replace('/bar-details/', '');
    this.selectedBar = this.barsService.bars.find((cocktail: any) => cocktail.name === barParam);
    console.log(this.selectedBar)
  }

  navigate(url: string) {
    window.open(url, '_blank')
  }
}
