import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskScreenComponent } from './screens/task-screen/task-screen.component';
import { NewTaskListScreenComponent } from './screens/new-task-list-screen/new-task-list-screen.component';
import { NewTaskScreenComponent } from './screens/new-task-screen/new-task-screen.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';


const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'login', component:LoginComponent},
  { path: 'signup', component:SignupComponent}, // Add the path for the signup component
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
   // Default route
  // {path:'',redirectTo:'task-list',pathMatch:'full'},
  {path:'task-list',component:TaskScreenComponent},
  {path:'task-list/:taskListId',component:TaskScreenComponent},
  {path:'new-task-list',component:NewTaskListScreenComponent},
  {path:'task-list/:taskListId/new-task',component:NewTaskScreenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
