import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatProgressBarModule
} from '@angular/material';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { RestService } from '../../../shared/services/rest.service';
import { QuestionsService } from './questions.service';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDialogModule,
    MatProgressBarModule,
    MatTableModule
  ],
  declarations: [QuestionsComponent, DialogComponent],
  providers: [RestService, QuestionsService],
  entryComponents: [DialogComponent]
})
export class QuestionsModule {}
