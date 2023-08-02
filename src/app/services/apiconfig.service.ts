import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import TaskListModel from '../models/taskListModel';
import TaskModel from '../models/taskmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiconfigService {
  API_BASE_URL='http://localhost:3000';

  constructor(private httpclient:HttpClient) { }

  //get api call
  getTaskLists(url:string){
    return this.httpclient.get<TaskListModel[]>(`${this.API_BASE_URL}/${url}`)  //http://localhost:3000/tasklists

  }
  getTasks(url:string){
    return this.httpclient.get<TaskModel[]>(`${this.API_BASE_URL}/${url}`)  

  }
  post(url:string,data:object){
    return this.httpclient.post<TaskListModel>(`${this.API_BASE_URL}/${url}`,data) // http://localhost:3000/tasklists
  }
  put(url:string,data:object){
    return this.httpclient.put(`${this.API_BASE_URL}/${url}`,data)
  }
  patch(url:string,data:object){
    return this.httpclient.patch<TaskModel>(`${this.API_BASE_URL}/${url}`,data)
  }
  deleteTask(url:string){
    return this.httpclient.delete<TaskModel>(`${this.API_BASE_URL}/${url}`)
  }
  deleteTaskList(url:string){
    return this.httpclient.delete<TaskListModel>(`${this.API_BASE_URL}/${url}`)
  }
}
