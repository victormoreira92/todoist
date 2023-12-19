import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';


@Component({
  selector: 'app-task-index',
  templateUrl: './task-index.component.html',
  styleUrls: ['./task-index.component.scss']
})
export class TaskIndexComponent {
  

  title!: string; 
  description!: string; 
  
  constructor(public dialog: MatDialog) {} 
  
  openDialog(): void { 
    let dialogRef = this.dialog.open(TaskDialogComponent, { 
      width: '800px', 
      height: '600px',
      data: { title: this.title, description: this.description } 
    }); 
  
    dialogRef.afterClosed().subscribe(result => { 
      this.description = result; 
    }); 
  } 

}
