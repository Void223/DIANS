import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Globals } from './shared/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'explore-and-find';

  constructor(private http: HttpClient) {

  }
}
