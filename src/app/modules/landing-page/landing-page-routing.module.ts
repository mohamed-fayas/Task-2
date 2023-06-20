import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { AddQuestionComponent } from '../add-question/add-question.component';

const routes: Routes = [{ path: '', component: LandingPageComponent },
{ path: 'add_question', component: AddQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
