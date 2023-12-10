import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit{
  @Input() character: Character | undefined;
  detailUrl: string | undefined;

  constructor(){
    
  }
  ngOnInit(): void {
    this.detailUrl="/character/"+this.character?.id
  }
  
}
