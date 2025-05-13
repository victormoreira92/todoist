import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskIndexComponent } from './components/task-index/task-index.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch:'full'
  },
  {
    path: 'tasks',
    component: TaskIndexComponent
  },
  {
    path: 'tasks/today',
    component: TaskIndexComponent
  },
  {
    path: 'tasks/upcoming',
    component: TaskIndexComponent
  },
  {
    path: 'index',
    component: HomepageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
