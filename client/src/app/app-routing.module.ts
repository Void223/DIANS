import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarDetailsComponent } from './components/bar-details/bar-details.component';
import { BarsComponent } from './components/bars/bars.component';
import { CocktailDetailsComponent } from './components/cocktail-details/cocktail-details.component';
import { CocktailsComponent } from './components/cocktails/cocktails.component';
import { HomeComponent } from './components/home/home.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cocktails', component: CocktailsComponent },
  { path: 'bars', component: BarsComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'cocktail-details/:id', component: CocktailDetailsComponent },
  { path: 'bar-details/:id', component: BarDetailsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
