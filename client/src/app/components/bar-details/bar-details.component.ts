import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarsService } from 'src/app/services/bars.service';

@Component({
  selector: 'app-bar-details',
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.scss']
})
export class BarDetailsComponent implements OnInit {
  selectedBar: any;

  constructor(private router: Router, private barsService: BarsService) { }

  ngOnInit(): void {
    let barParam: string = decodeURI(this.router.url).replace('/cocktail-details/', '');
    this.selectedBar = this.barsService.bars.find((cocktail: any) => cocktail.name === barParam);
    console.log(this.selectedBar)
  }

}
