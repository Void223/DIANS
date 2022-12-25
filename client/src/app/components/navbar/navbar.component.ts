import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selectedLanguage = localStorage['language'];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  changeLanguage(event: any): void {
    const selectedLanguage = event.target.value
    this.http.get('assets/translations/' + selectedLanguage + '.json').subscribe((translations: any) => {
      localStorage['language'] = event.target.value;
      localStorage['translations'] = JSON.stringify(translations)
      location.reload();
    })

  }
}
