import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  cocktails: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  setSearchValue(event: any): void {
    let queryParams = new HttpParams().append('ingredients', event.target.value)
    this.http.get('http://localhost:8080/cocktails', { params: queryParams }).subscribe((response: any) => {
      this.cocktails = response;
    })
  }
}
