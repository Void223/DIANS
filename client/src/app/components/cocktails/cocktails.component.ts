import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CocktailsComponent implements OnInit {
  cocktails: any;

  constructor(private http: HttpClient, private cocktailsService: CocktailsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.cocktails = this.cocktailsService.cocktails;
    }, 600)
  }

}
