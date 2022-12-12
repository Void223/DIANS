import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {
  bars: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/mock-data/bars.json').subscribe((response: any) => {
      this.bars = response;
    })
  }

}
