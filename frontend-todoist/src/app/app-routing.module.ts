import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskIndexComponent } from './components/task-index/task-index.component';
import { HomepageComponent } from './components/homepage/homepage.component';

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
    path: 'index',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
