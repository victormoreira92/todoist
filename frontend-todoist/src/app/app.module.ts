import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskIndexComponent } from './components/task-index/task-index.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TaskComponent } from './components/task/task.component';
import {MatButtonModule} from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from "@angular/material/dialog";
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TaskService } from './services/task.service';
import { ProjectService } from './services/project.service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateTaskComponentComponent } from './components/update-task-component/update-task-component.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TaskDeleteDialogComponent } from './components/task-delete-dialog/task-delete-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core'
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { ProjectDialogComponent } from './components/project-dialog/project-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    TaskIndexComponent,
    SidebarComponent,
    TaskComponent,
    TaskDialogComponent,
    UpdateTaskComponentComponent,
    TaskDeleteDialogComponent,
    ProjectDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCheckboxModule,
    HttpClientModule,
    NgxMatColorPickerModule,
    ReactiveFormsModule
  ],
  providers: [
    TaskService,
    ProjectService,
    MatDatepickerModule,
    MatNativeDateModule,  
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
