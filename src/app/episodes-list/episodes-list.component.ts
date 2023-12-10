import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Episode } from '../episode';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css']
})
export class EpisodesListComponent {
  episodes: Episode[] = [
    {
      id: 1,
      name: 'Episode 1',
      air_date: 'January 1, 2023',
      episode: 'S01E01',
      characters: [
        'https://api.example.com/characters/1',
        'https://api.example.com/characters/2',
        'https://api.example.com/characters/3'
      ]
    },
    {
      id: 2,
      name: 'Episode 2',
      air_date: 'January 8, 2023',
      episode: 'S01E02',
      characters: [
        'https://api.example.com/characters/4',
        'https://api.example.com/characters/5',
        'https://api.example.com/characters/6'
      ]
    },
    // Add more episodes as needed
  ];;

  constructor(private dataservice: DataService){
    // this.episodes = new Array<Episode>
  }

  ngOnInit(): void {
    //this.dataservice.getAllEpisodes().subscribe(val => this.episodes = val)
  }
}
