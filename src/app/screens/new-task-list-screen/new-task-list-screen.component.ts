import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import TaskListModel from 'src/app/models/taskListModel';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-new-task-list-screen',
  templateUrl: './new-task-list-screen.component.html',
  styleUrls: ['./new-task-list-screen.component.css']
})
export class NewTaskListScreenComponent {
  
constructor(private router:Router,
  private taskService:TaskService
 
  ){}


 ngOnInit(): void {
 

}
addNewTaskList(title:string){
  if(title){
   this.taskService.createTaskList(title)
   .subscribe((newlyCreatedTaskList:TaskListModel)=>{
    this.router.navigate(['task-list',newlyCreatedTaskList._id]);
   });
  }
 else{
  alert("Title canot be empty")
  return;
 }

    
}
}

