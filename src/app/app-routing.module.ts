import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { AboutComponent } from './about/about.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: 'episodes', component: EpisodesListComponent },
  { path: 'locations', component: LocationsListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'character/:id', component: CharacterDetailComponent},
  { path: 'location/:id', component: LocationDetailComponent},
  { path: 'episode/:id', component: EpisodeDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
