import { colors_projects } from './../../models/list_colors';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent implements OnInit{
  editProject(arg0: Project) {
    throw new Error('Method not implemented.');
  }
  @Input() projects!: Project[];
  
  projectForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
    color_user: new FormControl('', [Validators.required]),
    
  })
  
  project = {} as Project;
  
  public disabled = false;
  public touchUi = false;
  public colors_user = colors_projects;
  
  colorCtr: AbstractControl = new FormControl();
  
  
  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>, 
    private service: ProjectService,
    @Inject(MAT_DIALOG_DATA) public data: Project, 
    private router: Router, 
    private Form: FormBuilder){}
    
    createProject(){
      return this.service.create_project(this.projectForm.value).subscribe(()=>{
        this.router.navigateByUrl("/tasks")
        .then(() => {
          window.location.reload();
        });
      })
    }

    updateProject() {
      console.log(this.projectForm.value)
      this.service.updateProject(this.projectForm.value).subscribe(()=>{
        this.router.navigateByUrl("/tasks")
          .then(() => {
            window.location.reload();
          });
    })
    }

  onCancel(): void { 
    this.dialogRef.close(); 
  }

  ngOnInit(): void {
    this.projectForm.patchValue(this.data)
  }
  
}

