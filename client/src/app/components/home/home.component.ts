import { Component, OnInit } from '@angular/core';
import { BarsService } from 'src/app/services/bars.service';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
