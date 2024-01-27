import { Task } from './../../models/task';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { AppComponent } from 'src/app/app.component';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{

  task = {} as Task;
  tasks!: Task[];

  visible:boolean = false
  
  constructor(public dialog: MatDialog, 
    private taskService: TaskService,
    private router: Router,
    ) {} 



  ngOnInit() {
    this.getTasks();
  }
  
  getTasks() {
    this.taskService.getTask().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }
  
  openDialog(task: Task): void { 
    let dialogRef = this.dialog.open(TaskDialogComponent, { 
      width: '800px', 
      height: '600px',
      data: {
        id: task.id
      } 
    }); 
  
    
  } 
}
