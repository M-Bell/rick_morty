import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character: any;

  constructor(private dataService: DataService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    let id = 0
    this.route.params.subscribe(params => {
      // Get the 'paramName' query parameter value
      id = params['id'];
    });

    //-----Change to getCharacterById-----
    this.character = this.dataService.getAllCharacters().subscribe(val => {
      this.character = val.at(id-1)
    });
  }
}
