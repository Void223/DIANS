import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CocktailsComponent } from './components/cocktails/cocktails.component';
import { BarsComponent } from './components/bars/bars.component';
import { TranslationPipe } from './services/translation.pipe';
import { Observable, tap } from 'rxjs';
import { Globals } from './shared/globals';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { CocktailDetailsComponent } from './components/cocktail-details/cocktail-details.component';
import { BarDetailsComponent } from './components/bar-details/bar-details.component';

function initializeAppFactory(httpClient: HttpClient): () => Observable<any> {
  return () => httpClient.get('assets/config/app-settings.json')
    .pipe(
       tap((conf: any) => {
        if (!localStorage['language']) localStorage['language'] = conf.language;
        Globals.selectedLanguage = localStorage['language'];
        httpClient.get('assets/translations/' + Globals.selectedLanguage + '.json').subscribe((translations: any) => {
          Globals.translations = translations
          localStorage['translations'] = JSON.stringify(translations);
        })
       }),
    );
 }

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CocktailsComponent,
    BarsComponent,
    TranslationPipe,
    IngredientsComponent,
    CocktailDetailsComponent,
    BarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeAppFactory,
    deps: [HttpClient],
    multi: true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
