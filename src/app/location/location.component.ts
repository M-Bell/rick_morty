import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  @Input() location: any;
  detailUrl: string|undefined;

  constructor(){
    
  }

  ngOnInit(): void {
    this.detailUrl="/location/"+this.location?.id
  }
}
