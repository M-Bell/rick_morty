import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

characters: Array<any>;

constructor(){
  this.characters = new Array<any>;
}

ngOnInit(): void {
  this.characters.push({name: "Rick", img: "rnd"})
  this.characters.push({name: "Morty", img: "rnd"})
}

}
