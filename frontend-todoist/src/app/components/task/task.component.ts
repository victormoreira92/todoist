import { ProjectService } from './../../services/project.service.service';
import { Task } from './../../models/task';
import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { AppComponent } from 'src/app/app.component';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TaskDeleteDialogComponent } from '../task-delete-dialog/task-delete-dialog.component';
import { CommonModule } from '@angular/common';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{
  @Input() tasks!: Task[];

  task = {} as Task;
  params = '';
  
  project = {} as Project;
  projects!: Project[];


  visible:boolean = false
  
  constructor(public dialog: MatDialog, 
    private taskService: TaskService,
    private projectService: ProjectService,
    private _snackBar: MatSnackBar,
    private router: Router,
    ) {} 


  ngOnInit() {
    this.getTasks()
    this.getProject()
  }
  
  getTasks() {
    this.taskService.getTask().subscribe((tasks: Task[]) => {
        this.tasks = tasks;
    });
  }

  getProject(){
    this.projectService.getProject().subscribe((projects: Project[])=>{
      this.projects = projects;
    })
  }

  getProjectData(id: number){
      return this.projects.find(x=>x.id===id)
  }

  
  doneTask(task: Task){
    task.done = !task.done
    this.taskService.updateTask(task).subscribe()
  }
  

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  getDueDate(params: string, tasks: Task []){
    if(params == "today"){
      tasks = tasks.filter(t => new Date(t.due_date).toLocaleDateString() == new Date().toLocaleDateString());
    }else{
      tasks = tasks.filter(t => new Date(t.due_date).getMilliseconds() >= new Date().getMilliseconds());
    }
    return tasks;
  }

  openDialog(task: Task): void { 
    let dialogRef = this.dialog.open(TaskDialogComponent, { 
      width: '800px', 
      height: '650px',
      data: {
        id: task.id
      } 
    })
    
  } 

  openDeleteDialog(id: number): void {
    let dialogDelete = this.dialog.open(TaskDeleteDialogComponent, {
      width: '400px', 
      height: '125px',
      data: {
        id: id
      }
    })
  }
}

