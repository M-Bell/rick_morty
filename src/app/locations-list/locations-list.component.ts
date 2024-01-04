import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Location } from '../location';
import { FormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent {
  locations: Location[]
  formGroup: UntypedFormGroup
  searchControl: FormControl<string>
  empty_list=false

  constructor(private dataService: DataService){
    this.locations = new Array<Location>
    this.searchControl = new FormControl('', { nonNullable: true })
    this.formGroup = new UntypedFormGroup({
        search: this.searchControl
    })
  }

  ngOnInit(): void {
    this.dataService.getAllLocations().subscribe(val => this.locations = val)
    this.searchControl.valueChanges.subscribe(val => {
      this.locations=[];
      if(val.length>0){
        this.dataService.getAllLocations(val).subscribe(val => this.locations = val)
      } else {
        this.dataService.getAllLocations().subscribe(val => this.locations = val)
      };
    });
  }
}
