import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, map } from 'rxjs';
import { Character } from '../../models/character.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  characters: Character[] = [];
  isLoading = false;

  constructor(private charactersService: CharactersService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.charactersService.getAllCharacters()
      .pipe(
        map(values => values.filter(character => character.category !== 'Better Call Saul')),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(data => {
        this.characters = data
      });
  }

  onNavigateToDatail(character: Character): void {
    this.charactersService.character = character;
    this.router.navigate([`/character`, character.char_id])
  }



}
