import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { Task } from 'src/app/models/task';


@Component({
  selector: 'app-task-index',
  templateUrl: './task-index.component.html',
  styleUrls: ['./task-index.component.scss']
})
export class TaskIndexComponent {
  

  title!: string; 
  description!: string; 
  tasks!: Task[];
  
  constructor(public dialog: MatDialog) {} 
  
  openDialog(): void { 
    let dialogRef = this.dialog.open(TaskDialogComponent, { 
      width: '800px', 
      height: '600px',
      data: { title: 'tarefa 1', description: 'descricao 2' } 
    }); 
  
    dialogRef.afterClosed().subscribe(result => { 
      this.description = result; 
    }); 
  } 

  onTaskArrive($event: Task[]){
    this.tasks = $event;
  }

}
