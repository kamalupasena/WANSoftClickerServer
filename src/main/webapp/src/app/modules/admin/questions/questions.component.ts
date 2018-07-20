import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Question } from '../models/question';
import { MatSlideToggleChange, MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { element } from 'protractor';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  dataSource: Question[];

  public displayedColumns: string[] = [
    'question',
    'answer1',
    'answer2',
    'answer3',
    'answer4',
    'rightAnswer',
    'active',
    'answers'
  ];

  constructor(private service: QuestionsService, public dialog: MatDialog) {}

  ngOnInit() {
    this.service.getAll().subscribe(d => (this.dataSource = d));
  }

  public onActiveChange(event: MatSlideToggleChange, quection: Question) {
    quection.active = event.checked;
    let s = this.service.patch(quection).subscribe(d => {
      s.unsubscribe();
    });
  }

  public openDialog(question: Question): void {
    let s = this.service.getAnswers(question).subscribe(d => {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '50%',
        data: { answers: d._embedded.answers }
      });
      s.unsubscribe();
    });
  } // openDialog
}
