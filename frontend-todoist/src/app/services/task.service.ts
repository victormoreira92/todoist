import { Task } from './../models/task';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  
  url = 'http://localhost:3000/tasks'; // api rest fake
  urlTaskByProject = 'http://localhost:3000/tasks/getByProject';

  private handleError(handleError: HttpErrorResponse) {
    console.log(handleError.message)
    if (handleError.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', handleError.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${handleError.status}, body was: `, handleError.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  
  
  constructor(private http: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError))
    }
  
  
  getTaskByPeriod(period: string): Observable<Task[]> {
    return this.http.get<Task[]>(this.url + '/' + period)
    .pipe(
      retry(2))
    }
  getTaskByProject(project_id: any): Observable<Task[]>{
    const options = project_id ? 
    { params: new HttpParams().set('project_id', project_id) } : {};
    return this.http.get<Task[]>(this.urlTaskByProject,options)
    .pipe(
      retry(2)
    )
  }
  
  

  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(this.url + '/' + id)
      .pipe(
        retry(2))
  }

  create_task(task: any): Observable<Task> {
    return this.http.post<Task>(
      this.url, JSON.stringify(task), this.httpOptions
      ).pipe(
        catchError(this.handleError)
      )
  }

  updateTask(task: any): Observable<Task> {
    return this.http.put<Task>(this.url + '/' + task.id, JSON.stringify(task), this.httpOptions)
      .pipe(
        retry(1)
      )
  }

  delete(id: number): Observable<Task>{
    return this.http.delete<Task>(this.url + '/' + id)
      .pipe(
        retry(2))
  }

  

  // saveTask(car: Car): Observable<Task> {
  //   return this.http.post<Task>(this.url, JSON.stringify(task), this.httpOptions)
  //     .pipe(
  //       retry(2))
  //     }


    }
