import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  user = {
    name: "Reginaldo"
  }
  projects =[
    {
      name: "Personal",
      color: "blue"
    },
    {
      name: "Professional",
      color: "red"
    }
  ]
  constructor(public dialog: MatDialog) {} 

  title!: string;
  description!: string

  openDialog(): void { 
    let dialogRef = this.dialog.open(TaskDialogComponent, { 
      width: '800px', 
      height: '600px',
      data: { title: this.title, description: this.description } 
    }); 
  
    dialogRef.afterClosed().subscribe(
    ); 
  } 
}
