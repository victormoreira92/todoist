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
  
  
  constructor(private http: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url)
    .pipe(
      retry(2))
      
    }
  
    getTaskByPeriod(period: string): Observable<Task[]> {
      return this.http.get<Task[]>(this.url + '/' + period)
      .pipe(
        retry(2))
      }
    

  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(this.url + '/' + id)
      .pipe(
        retry(2))
  }

  create_task(task: any): Observable<Task> {
    return this.http.post<Task>(
      this.url, JSON.stringify(task), this.httpOptions
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
