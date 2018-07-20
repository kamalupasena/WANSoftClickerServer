import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export const SERVER: string = 'http://localhost:8080';
export const API: string = SERVER + '/api/';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) {}

  public get<T>(url: string, options?: Object): Observable<T> {
    return this.http.get<T>(API + url, options);
  }

  public post<T>(url: string, object: Object, options?: Object): Observable<T> {
    return this.http.post<T>(API + url, object, options);
  }

  public postEntity<T>(entityEndPoint: string, entity: any): Observable<T> {
    if (entity._links && entity._links.self.href) return this.patchEntity(entity);
    return this.http.post<T>(`${API}${entityEndPoint}`, entity);
  }

  public patchEntity<T>(object: any): Observable<T> {
    return this.http.patch<T>(object._links.self.href, object);
  }

  public getEntity<T>(entityEndPoint: string): Observable<T> {
    return this.http.get<T>(`${API}${entityEndPoint}`);
  }
}
