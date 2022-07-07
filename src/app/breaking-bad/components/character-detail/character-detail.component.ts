import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../models/character.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character: Character | undefined;

  constructor(private charactersService: CharactersService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.character = this.charactersService.character;
    // const id = this.route.snapshot.paramMap.get('id')!;

    // this.charactersService.getCharacterById(+id).subscribe(data => {
    //   this.character = data[0]
    // });
  }
}
