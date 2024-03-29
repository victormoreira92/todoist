import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit{

  checkForErrorsIn(form: AbstractControl) {

}

  
  
    taskForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
      description: new FormControl('',[Validators.required, Validators.minLength(5)]),
      boolean: new FormControl(),
      due_date: new FormControl(new Date(), [Validators.required]),
      project_id: new FormControl()

    })

    constructor( 
        public dialogRef: MatDialogRef<TaskDialogComponent>, 
        @Inject(MAT_DIALOG_DATA) public data: Task, 
        private service: TaskService,
        private router: Router,
        private datePicker: MatDatepickerModule,
        private formBuilder: FormBuilder) {}

      onCancel(): void { 
        this.dialogRef.close(); 
      }

      ngOnInit(): void {
        if(this.data.id)
          this.getTaskById(this.data.id)
      }
    
      getTaskById(id: number){
        return this.service.getTaskById(id).subscribe((task)=>{
          this.taskForm.patchValue(task)
        })
      }
    
      create(){
        return this.service.create_task(this.taskForm.value).subscribe(()=>{
          this.router.navigateByUrl("/tasks")
            .then(() => {
              window.location.reload();
            })
        })
      }

      update(){
        this.service.updateTask(this.taskForm.value).subscribe(()=>{
            this.router.navigateByUrl("/tasks")
              .then(() => {
                window.location.reload();
              });
        })
        
      }


}


