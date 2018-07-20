import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../../../shared/services/rest.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {
  constructor(private rest: RestService) {}

  public save(question: Question): Observable<Question> {
    return this.rest.postEntity('quections', question);
  }
}
