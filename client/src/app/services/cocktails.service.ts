import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  cocktails: any;
  constructor(private http: HttpClient) { }

  getAllCocktails() {
    this.http.get('http://localhost:8080/cocktails').subscribe((response: any) => {
      this.cocktails = response;
    })
  }
}
