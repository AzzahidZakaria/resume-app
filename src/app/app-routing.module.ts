import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SkillsComponent } from './skills/skills.component';
import { NotesComponent } from './notes/notes.component';
import { CurriculumComponent } from './curriculum/curriculum.component';

const routes: Routes = [

  { path: '', component: MainPageComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'curriculum', component: CurriculumComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
