import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatSidenavModule,
  MatButtonModule,
  MatRadioModule
} from '@angular/material';
import { AddQuestionRoutingModule } from './add-question-routing.module';
import { AddQuestionComponent } from './add-question.component';
import { AddQuestionService } from './add-question.service';
import { RestService } from '../../../shared/services/rest.service';

@NgModule({
  imports: [
    CommonModule,
    AddQuestionRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule
  ],
  declarations: [AddQuestionComponent],
  providers: [AddQuestionService, RestService]
})
export class AddQuestionModule {}
