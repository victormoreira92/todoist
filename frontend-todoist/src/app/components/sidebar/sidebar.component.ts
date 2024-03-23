import { Router } from '@angular/router';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service.service';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  
  @Output() taskEmitter = new EventEmitter<Task[]>();
  
  task = {} as Task;
  tasks!: [];
  
  user = {
    name: "Reginaldo"
  }
  projects!: Project[]
  project = {} as Project;
  
  constructor(public dialog: MatDialog, 
    private service: TaskService,
    public router: Router,
    private projectService: ProjectService) {} 
    
    title!: string;
    description!: string
    
    ngOnInit(){
      this.getProject()
    }
    
    getProject() {
      this.projectService.getProject().subscribe((projects)=>{
        this.projects = projects
      })
    }
    
    getTaskByProject(id: number) {
      
    }
  openDialog(): void { 
    let dialogRef = this.dialog.open(TaskDialogComponent, { 
      width: '800px', 
      height: '600px',
      data: { title: this.title, description: this.description } 
    }); 
  
    dialogRef.afterClosed().subscribe(
    ); 
  } 

  openDialogProject(): void {
    let dialogRef = this.dialog.open(ProjectDialogComponent, { 
      width: '450px', 
      height: '350px',
      data: { title: this.title, description: this.description } 
    }); 
  }

  getTaskByPeriod(period: string){
    this.service.getTaskByPeriod(period).subscribe((tasks)=>{
      this.taskEmitter.emit(tasks)
      this.router.navigateByUrl("/tasks/"+period)
    })
    };
  }
   
