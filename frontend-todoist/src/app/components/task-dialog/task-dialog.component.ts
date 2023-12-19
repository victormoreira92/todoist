import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent {
    constructor( 
        public dialogRef: MatDialogRef<TaskDialogComponent>, 
        @Inject(MAT_DIALOG_DATA) public data: any) { } 
      
      onCancel(): void { 
        this.dialogRef.close(); 
      }
}


