import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-delete-dialog',
  templateUrl: './task-delete-dialog.component.html',
  styleUrls: ['./task-delete-dialog.component.scss']
})
export class TaskDeleteDialogComponent {

  constructor(
    public dialogDelete: MatDialogRef<TaskDeleteDialogComponent>, 
    private service: TaskService,
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private _snackBar: MatSnackBar, 
    private router: Router,
  ){}

  onNoClick(): void {
    this.dialogDelete.close();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  

  onYesClick(): void {
    this.service.delete(this.data.id).subscribe(()=>{
      let nameTask = this.data.title
      this.dialogDelete.close()
      setTimeout(()=>{window.location.reload()}, 2000) 
      this.openSnackBar("Task "+nameTask+" deleted successfully", "Close")
    })
  }

  config: MatSnackBarConfig = {
    duration: 4000
  }

}