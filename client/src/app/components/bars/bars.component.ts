import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BarsService } from 'src/app/services/bars.service';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {
  bars: any;

  constructor(private http: HttpClient, private barsService: BarsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.bars = this.barsService.bars;
    }, 600)
  }

}
