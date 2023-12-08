import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterListComponent,
    EpisodesListComponent,
    LocationsListComponent,
    LocationDetailComponent,
    EpisodeDetailComponent,
    CharacterDetailComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
