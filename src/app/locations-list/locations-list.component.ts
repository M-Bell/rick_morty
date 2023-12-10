import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Location } from '../location';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent {
  locations: Location[] = [
    {
      id: 1,
      name: 'Earth C-137',
      type: 'Planet',
      dimension: 'Dimension C-137',
      residents: [
        'https://api.example.com/characters/1',
        'https://api.example.com/characters/2',
        'https://api.example.com/characters/3'
      ]
    },
    {
      id: 2,
      name: 'Citadel of Ricks',
      type: 'Space station',
      dimension: 'unknown',
      residents: [
        'https://api.example.com/characters/4',
        'https://api.example.com/characters/5',
        'https://api.example.com/characters/6'
      ]
    },
    // Add more locations as needed
  ];

  constructor(private dataservice: DataService){
    // this.episodes = new Array<Episode>
  }

  ngOnInit(): void {
    //this.dataservice.getAllEpisodes().subscribe(val => this.episodes = val)
  }
}
