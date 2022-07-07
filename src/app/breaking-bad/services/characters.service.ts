import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, take, tap } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  character: Character | undefined;

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>('https://www.breakingbadapi.com/api/characters');
  }

  getCharacterById(id: number): Observable<Character[]> {
    return this.http.get<Character[]>(`https://www.breakingbadapi.com/api/characters/${id}`);
  }
}
