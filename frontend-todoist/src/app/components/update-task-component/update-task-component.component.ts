import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-update-task-component',
  templateUrl: './update-task-component.component.html',
  styleUrls: ['./update-task-component.component.scss']
})
export class UpdateTaskComponentComponent {

  task = {} as Task

  constructor( 
      public dialogRef: MatDialogRef<UpdateTaskComponentComponent>, 
      @Inject(MAT_DIALOG_DATA) public data: Task, 
      private service: TaskService,
      private router: Router,
      private formBuilder: FormBuilder) {}

    onCancel(): void { 
      this.dialogRef.close(); 
    }

    ngOnInit(): void {
      this.getTaskById(this.data.id)
    }
  
    getTaskById(id: number){
      return this.service.getTaskById(id).subscribe((task)=>{
        this.task = task
      })
    }
}
