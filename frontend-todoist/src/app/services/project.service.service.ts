import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Project } from '../models/project';

HttpClient

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }


  url = 'http://localhost:3000/projects'; // api rest fake
  
  
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  getProject(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url)
    .pipe(
      retry(2))
      
  }
    

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(this.url + '/' + id)
      .pipe(
        retry(2))
  }

  create_project(project: any): Observable<Project> {
    return this.http.post<Project>(
      this.url, JSON.stringify(project), this.httpOptions
      ).pipe(
        catchError(this.handleError)
      )
  }

  updateProject(project: any): Observable<Project> {
    return this.http.put<Project>(this.url + '/' + project.id, JSON.stringify(project), this.httpOptions)
      .pipe(
        retry(1),
      )
      
  }
  handleError(handleError: HttpErrorResponse){
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  delete(id: number): Observable<Project>{
    return this.http.delete<Project>(this.url + '/' + id)
      .pipe(
        retry(2))
  }
}
