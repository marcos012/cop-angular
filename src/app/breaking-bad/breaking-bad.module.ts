import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharactersService } from './services/characters.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { ArrayFormatPipe } from './pipes/array-format.pipe';

@NgModule({
  declarations: [
    CharactersListComponent,
    CharacterDetailComponent,
    UppercasePipe,
    ArrayFormatPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    CharactersService,
  ]
})
export class BreakingBadModule { }
