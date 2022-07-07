import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './breaking-bad/components/character-detail/character-detail.component';
import { CharactersListComponent } from './breaking-bad/components/characters-list/characters-list.component';

const routes: Routes = [
  { path: '', component: CharactersListComponent, pathMatch: 'full' },
  { path: 'character/:id', component: CharacterDetailComponent },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }