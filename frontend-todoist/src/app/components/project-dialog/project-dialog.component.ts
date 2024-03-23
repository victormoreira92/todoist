import { colors_projects } from './../../models/list_colors';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent {

  projectForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
    color: new FormControl('', [Validators.required]),

  })

  public disabled = false;
  public touchUi = false;
  public colors_user = colors_projects;

  colorCtr: AbstractControl = new FormControl();


  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>, 
    private service: ProjectService,
    private router: Router, 
    private Form: FormBuilder){}

  createProject(){
    console.log(this.projectForm.value)
    return this.service.create_project(this.projectForm.value).subscribe(()=>{
      this.router.navigateByUrl("/tasks")
        .then(() => {
          window.location.reload();
        });
    })
  }

  onCancel(): void { 
    this.dialogRef.close(); 
  }
  
}

