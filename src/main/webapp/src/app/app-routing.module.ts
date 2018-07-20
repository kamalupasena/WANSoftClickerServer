import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './modules/admin/questions/questions.module#QuestionsModule' },
  {
    path: 'questions/add',
    loadChildren: './modules/admin/add-question/add-question.module#AddQuestionModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
