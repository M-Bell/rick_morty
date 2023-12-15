import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Episode } from '../episode';
import { tap } from 'rxjs';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css']
})
export class EpisodesListComponent {
  episodes: Episode[]
  episodesOriginal:  Episode[];
  constructor(private dataservice: DataService){
    this.episodes = new Array<Episode>
    this.episodesOriginal = new Array<Episode>
  }

  ngOnInit(): void {
    this.dataservice.getAllEpisodes().pipe(
      tap((val) => {
        this.episodes = val;
        this.episodesOriginal = [...val];
      })
    ).subscribe();
  }

seasons: string[] = ["S01","S02","S03","S04","S05"];

filterSeasons(letter: string) {
  this.episodes = this.episodesOriginal.filter(episode => episode.episode.startsWith(letter));
}
resetFilter() {
  this.episodes = this.episodesOriginal;
}
}
