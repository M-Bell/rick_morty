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
  location: any

  constructor(private dataService: DataService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    let id = 0
    this.route.params.subscribe(params => {
      id = params['id'];
    });

    this.dataService.getLocationById(id).subscribe(val => this.location = val);
    this.dataService.getLocationCharactersByLocationId(id).subscribe(val => this.location.residents = val)
  }
}
