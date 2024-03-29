import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service.service';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponentComponent implements OnInit{



  project = {} as Project

  constructor(
    private service: ProjectService,
    @Inject(MAT_DIALOG_DATA) public data: Project, 
    private _snackBar: MatSnackBar, 
    public dialogRef: MatDialogRef<MenuComponentComponent>, 
    ){}

  ngOnInit(): void {
    if(this.data.id){
      this.getProjectById(this.data.id)
    }
  }

  getProjectById(id: number){
    return this.service.getProjectById(id).subscribe((project)=>{
      this.project = project;
    })
  }

  onCancel() {
    this.dialogRef.close()
  }


  deleteProject() {
    console.log(this.project)
    this.service.delete(this.project.id).subscribe(()=>{
      this.dialogRef.close()
      setTimeout(()=>{window.location.reload()}, 2000) 
      this.openSnackBar("Project deleted successfully", "Close")
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  
  config: MatSnackBarConfig = {
    duration: 4000
  }

  




}
