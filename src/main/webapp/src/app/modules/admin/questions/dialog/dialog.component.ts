import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  private answerProgress = [0, 0, 0, 0];

  private totalAnswers = 0;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.totalAnswers = data['answers'].length;
    data['answers'].forEach(replay => {
      switch (replay.answer) {
        case 'answer1':
          this.answerProgress[0] = this.answerProgress[0] + 1;
          break;
        case 'answer2':
          this.answerProgress[1] = this.answerProgress[1] + 1;
          break;
        case 'answer3':
          this.answerProgress[2] = this.answerProgress[2] + 1;
          break;
        case 'answer4':
          this.answerProgress[3] = this.answerProgress[3] + 1;
          break;
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
