import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Episode } from '../episode';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css']
})
export class EpisodeDetailComponent {
  episode: Episode = {
    id: 1,
    name: 'Episode 1',
    air_date: 'January 1, 2023',
    episode: 'S01E01',
    characters: [
      'https://api.example.com/characters/1',
      'https://api.example.com/characters/2',
      'https://api.example.com/characters/3'
    ]
  };

  constructor(private dataService: DataService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    let id = 0
    this.route.params.subscribe(params => {
      id = params['id'];
    });

    //-----Change to getEpisodesById-----
    // this.episode = this.dataService.getAllCharacters().subscribe(val => {
    //   this.episode = val.at(id-1)
    // });
  }
}
