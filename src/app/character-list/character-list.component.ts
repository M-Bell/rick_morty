import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Character } from '../character';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

characters: Array<any>;
charactersOriginal: Array<any>;

constructor(private dataservice: DataService){
  this.characters = new Array<Character>
  this.charactersOriginal = new Array<Character>
}
alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
ngOnInit(): void {
  this.dataservice.getAllCharacters().pipe(
    tap((val) => {
      this.characters = val;
      this.charactersOriginal = [...val]; // Assign a copy to charactersOriginal
      console.log('Received characters:', this.characters);
    })
  ).subscribe();
}
filterCharacters(letter: string) {
  this.characters = this.charactersOriginal.filter(char => char.name.startsWith(letter));
}
resetFilter() {
  this.characters = this.charactersOriginal;
}
}
