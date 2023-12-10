import { Component } from '@angular/core';
import { Location } from '../location';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent {
  location: Location = {
    id: 1,
    name: 'Earth C-137',
    type: 'Planet',
    dimension: 'Dimension C-137',
    residents: [
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
