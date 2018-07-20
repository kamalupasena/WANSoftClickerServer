import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddQuestionService } from './add-question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  public questionAddFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private service: AddQuestionService) {
    this.questionAddFormGroup = this.fb.group({
      question: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      answer4: ['', Validators.required],
      rightAnswer: ['answer1', Validators.required]
    });
  }

  public onSubmit() {
    let s = this.service.save(this.questionAddFormGroup.value).subscribe(() => {
      s.unsubscribe(  );
    });
  }

  ngOnInit() {}
}
