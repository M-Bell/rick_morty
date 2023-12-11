import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Episode } from '../episode';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css']
})
export class EpisodesListComponent {
  episodes: Episode[]

  constructor(private dataservice: DataService){
    this.episodes = new Array<Episode>
  }

  ngOnInit(): void {
    this.dataservice.getAllEpisodes().subscribe(val => this.episodes = val)
  }
}
