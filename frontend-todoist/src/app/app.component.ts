import { TaskService } from './services/task.service';
import { Task } from './models/task';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit{
  title = 'frontend-todoist';
  
  
  task = {} as Task;
  tasks!: Task[];

  constructor(public dialog: MatDialog, private http: HttpClient, private taskService: TaskService) {} 

  openDialog(): void { 
    let dialogRef = this.dialog.open(TaskDialogComponent, { 
      width: '450px',
    }); 
  
    dialogRef.afterClosed().subscribe(); 
  }

  ngOnInit() {
  }




   

}
