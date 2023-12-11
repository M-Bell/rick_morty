import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Location } from '../location';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent {
  locations: Location[]

  constructor(private dataService: DataService){
    this.locations = new Array<Location>
  }

  ngOnInit(): void {
    this.dataService.getAllLocations().subscribe(val => this.locations = val)
  }
}
