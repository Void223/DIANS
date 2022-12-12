import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CocktailsComponent implements OnInit {
  cocktails: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b').subscribe((response: any) => {
      this.cocktails = response;
      console.log(this.cocktails);

    })
  }

}
