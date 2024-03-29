import { Router } from '@angular/router';
import { Component, EventEmitter, Input, Output, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { Project } from 'src/app/models/project';
import {MatMenuTrigger, MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ProjectService } from 'src/app/services/project.service.service';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  @ViewChild('menuTrigger', {read: MatMenuTrigger}) menuTrigger!: MatMenuTrigger;
  
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
    

    menu!: MatMenuModule;
    title!: string;
    description!: string;
    name!:string;
    color_user!:string;




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
    openMenu() {
      const dialogRef = this.dialog.open(MenuComponentComponent, {restoreFocus: false});
  
      dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
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

  openDeleteProjectComponent(id: number){
    let dialogRef = this.dialog.open(MenuComponentComponent, { 
      width: '450px', 
      height: '200px',
      data: { id: id }
    }); 
  }

  openDialogProject(): void {
    let dialogRef = this.dialog.open(ProjectDialogComponent, { 
      width: '450px', 
      height: '350px',
      data: {  name: this.name , color_user: this.color_user }
    }); 
  }

  openProject(project: Project): void {
    let dialogRef = this.dialog.open(ProjectDialogComponent, { 
      width: '450px', 
      height: '350px',
      data: {  id: project.id, name: project.name , color_user: project.color_user }
    }); 
  }

  getTaskByPeriod(period: string){
    this.service.getTaskByPeriod(period).subscribe((tasks)=>{
      this.taskEmitter.emit(tasks)
      this.router.navigateByUrl("/tasks/"+period)
    })
    };
  }
   
