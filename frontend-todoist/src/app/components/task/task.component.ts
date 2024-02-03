import { Task } from './../../models/task';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { AppComponent } from 'src/app/app.component';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TaskDeleteDialogComponent } from '../task-delete-dialog/task-delete-dialog.component';


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
    private _snackBar: MatSnackBar,
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
  
  doneTask(task: Task){
    task.done = !task.done
    this.taskService.updateTask(task).subscribe()
  }
  

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  openDialog(task: Task): void { 
    let dialogRef = this.dialog.open(TaskDialogComponent, { 
      width: '800px', 
      height: '600px',
      data: {
        id: task.id
      } 
    })
    
  } 

  openDeleteDialog(id: number): void {
    let dialogDelete = this.dialog.open(TaskDeleteDialogComponent, {
      width: '400px', 
      height: '125px',
      data: {
        id: id
      }
    })
  }
}

