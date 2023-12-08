import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home/all', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'characters', component: WAlcoholComponent },
  // { path: 'episodes', component: WOAlcoholComponent },
  // { path: 'locations', component: NewCocktailComponent },
  // { path: 'about', component: NameFilterComponent },
  // { path: 'character/:id', component: ObservablePageComponent},
  // { path: 'location/:id', component: CocktailDetailComponent},
  // { path: 'episode/:id', component: PasswordComponent},
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
