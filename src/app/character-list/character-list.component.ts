import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Character } from '../character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

characters: Array<any>;

constructor(private dataservice: DataService){
  this.characters = new Array<Character>
}

ngOnInit(): void {
  this.dataservice.getAllCharacters().subscribe(val => this.characters = val)
  console.log(this.characters.length)
}

}
