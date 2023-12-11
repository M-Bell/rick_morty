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
  episode: any

  constructor(private dataService: DataService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    let id = 0
    this.route.params.subscribe(params => {
      id = params['id'];
    });

    this.dataService.getEpisodeById(id).subscribe(val => this.episode = val);
    this.dataService.getEpisodeCharactersByEpisodeId(id).subscribe(val => this.episode.characters = val);
  }
}
