import { Injectable } from '@angular/core';
import { RestService } from '../../../shared/services/rest.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private rest: RestService) {}

  public getAll(): Observable<Question[]> {
    return this.rest.getEntity('quections').pipe(
      map((res: any) => {
        return res._embedded.quections;
      })
    );
  } //getAll()

  public patch(question: Question): Observable<Question> {
    return this.rest.patchEntity(question);
  }

  public getAnswers(question: any): Observable<any> {
    return this.rest.get(
      'answers/search/findAllByQuectionId?q=' + this.getId(question._links.self.href)
    );
  }

  /**
   * Get Id from a url with tailing id
   * @param url
   */
  public getId(url: string) {
    return url.substring(url.lastIndexOf('/') + 1);
  } // getId()
}
