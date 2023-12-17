import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'frontend-todoist';
  
  constructor(public dialog: MatDialog) {} 
  
  openDialog(): void { 
    let dialogRef = this.dialog.open(TaskDialogComponent, { 
      width: '450px',
    }); 
  
    dialogRef.afterClosed().subscribe(); 
  }
}
