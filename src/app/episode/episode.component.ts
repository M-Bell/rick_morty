import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent {
  @Input() episode: any;
  detailUrl: string|undefined;

  constructor(){
    
  }

  ngOnInit(): void {
    this.detailUrl="/episode/"+this.episode?.id
  }

}
