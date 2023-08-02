import { Injectable } from '@angular/core';
import { ApiconfigService } from './apiconfig.service';
import TaskModel from '../models/taskmodel';
import TaskListModel from '../models/taskListModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private apiConfigService:ApiconfigService) { }
  //to fectch all tasklists
  getAllTaskLists(): Observable<TaskListModel[]>{
    return this.apiConfigService.getTaskLists('tasklists')
  }

  getAllTasks(taskListId:string): Observable<TaskModel[]>{
    return this.apiConfigService.getTasks('tasklists/${taskListId}')
  }


  //create a tasklist bukket
  createTaskList(title:string):Observable<TaskListModel>{
    let data = { 'title':title };
     return  this.apiConfigService.post('tasklists',data);
  }
  //to fetch all task inside a task list object
  getAllTasksForATaskList(taskListId: string){
   return this.apiConfigService.getTasks(`tasklists/${taskListId}/tasks`)

  }
  //create a task inside aparticular tasklist object
  createTaskInsideATaskList(taskListId: string,title:string){
   
 return this.apiConfigService.post(`tasklists/${taskListId}/tasks`,{'title':title})
  }
  //delete a tasklist
  deleteTaskList(taskListId: string):Observable<TaskListModel>{
   return this.apiConfigService.deleteTaskList(`tasklists/${taskListId}`)
  }
   //delete a task inside a particular task list

 deleteATaskInsideATaskList(taskListId: string,taskId:string):Observable<TaskModel>{
   return this.apiConfigService.deleteTask(`tasklists/${taskListId}/tasks/${taskId}`)
  }
  //update astatus of a task wheter its complted or not
updateTaskStatus(taskListId: string,taskObject:TaskModel):Observable<TaskModel>{
  let updateData = {'completed':!taskObject.completed}//toggle database value
return this.apiConfigService.patch(`tasklists/${taskListId}/tasks/${taskObject._id}`,updateData)

}


}
