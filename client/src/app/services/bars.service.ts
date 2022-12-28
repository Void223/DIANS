import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarsService {
  bars: any;
  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllBars() {
    this.http.get('http://localhost:8080/kafebars').subscribe((response: any) => {
      this.bars = response;
    })
  }
}
