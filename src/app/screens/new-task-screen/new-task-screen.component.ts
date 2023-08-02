import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-new-task-screen',
  templateUrl: './new-task-screen.component.html',
  styleUrls: ['./new-task-screen.component.css']
})
export class NewTaskScreenComponent {
  taskListId: string ='';
    
constructor( private taskService:TaskService,
  private activatedroute:ActivatedRoute,
  private router:Router
 
  ){
    this.activatedroute.params.subscribe((params:Params)=>{
      this.taskListId=params['taskListId'];
    })
  }


 ngOnInit(): void {
 

}

  addNewTask(title:string){
    this.taskService.createTaskInsideATaskList(this.taskListId,title).subscribe(()=>{
      this.router.navigate(['../'],{relativeTo:this.activatedroute})
    })

  }

}
