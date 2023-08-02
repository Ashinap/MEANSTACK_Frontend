import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import TaskListModel from 'src/app/models/taskListModel';
import TaskModel from 'src/app/models/taskmodel';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-task-screen',
  templateUrl: './task-screen.component.html',
  styleUrls: ['./task-screen.component.css']
})
export class TaskScreenComponent implements OnInit {
  taskLists:TaskListModel[]=[];
  tasks:TaskModel[]=[];
  taskListId:string='';
  displayList = false;


constructor(
  private taskService:TaskService,
  private activateRoute:ActivatedRoute,
  private router:Router
  ){}


 ngOnInit(): void {
  debugger;
  this.taskService.getAllTaskLists().subscribe(allTaskLists=>{
    this.taskLists=allTaskLists
       //get the first list id and rout to it on page load
      //  this.router.navigate(['task-list',this.taskLists[0]['_id']]);
  });
   this.activateRoute.params.subscribe( (params:Params) =>{
      this.taskListId = params['taskListId'];
      if(this.taskListId){
        this.taskService.getAllTasksForATaskList(this.taskListId).subscribe(
          (tasks:TaskModel[])=>{
            this.tasks=tasks
          }
            );
      }
      console.log(this.tasks);
    }
  );
     
  }
  taskClicked(task:TaskModel){
    console.log("tasssskkk",task);
    this.taskService.updateTaskStatus(this.taskListId,task)
    .subscribe(()=>task.completed=!task.completed);

  }
  deleteTask(task:TaskModel){
    console.log(task)
    this.taskService.deleteATaskInsideATaskList(this.taskListId,task._id)
    .subscribe((taskDeleted:TaskModel)=>{

      this.tasks = this.tasks.filter(t=>t._id !=taskDeleted._id)
    })

  }
  deleteTaskList(tasklistClicked:TaskListModel){
    this.taskService.deleteTaskList(tasklistClicked._id)
    .subscribe(
      ()=>{
        this.taskLists = this.taskLists.filter(tL=>tL._id !=tasklistClicked._id)
      }
    )
    
  }
  addNewTask(){
    if (this.taskListId){

      this.router.navigate(['./new-task'],{relativeTo:this.activateRoute});
    }else{
      alert('Please select a Task');
      return;
    }
  }
  showList(){
  

  
    this.displayList = !this.displayList;
    
  }
}

