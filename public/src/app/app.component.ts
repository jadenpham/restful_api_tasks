import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HELLO WORLD';
  tasks : any;
  one_task: any;
  newTask: any; //declaring attribute so html can grab it
  updatedTask: any;
  updateTask: any;
  
  constructor(private _httpService: HttpService){
  }
  ngOnInit(){ //first time user visiting page, will run right after response
    // new_task: any;
    // this.getTasksFromService()
    this.newTask = { title: "", description: ""} //initilizing keys n values when opened
  }
  getTasksFromService(){
    // let observable = this._httpService.getAllTasks() //setting up getTasks, returns an observable
    // observable.subscribe(data => {
    //   console.log("Got data!!", data)
    //   this.tasks = data['tasks'];
    // })
    this._httpService.getAllTasks().subscribe(data=> {
      console.log(data); // doing same thing as above but shorter
      this.tasks = data; //putting data into task array
      // console.log(this.tasks, "this is the output")
    })
  }
  getTask(id){
    this._httpService.getTask(id).subscribe(data => { //subscribe is waiting for data to come back
      console.log(data);
      this.one_task = data; //data coming back from db as json obj
      // console.log(this.task, "this is from task")
    })
  }
  getUpdatedTask(id){
    this._httpService.getTask(id).subscribe(data => { //subscribe is waiting for data to come back
      console.log(data);
      this.updatedTask = data; //data coming back from db as json obj
      // console.log(this.task, "this is from task")
    })
  }
  addTask(){
    this._httpService.createTask(this.newTask).subscribe(data =>{
      console.log(data, "this is the data being passed thru"); //data being passed through from form as json
      this.getTasksFromService(); //calling prev function to show all of the newly added stuff
    })
  }
  editTask(id){
    this._httpService.editTask(id, this.updatedTask).subscribe(data =>{ //using second param to pass the object with data over with the id
      console.log(data, "This is the data being updated");
      this.getTasksFromService();
    })
  }
  removeTask(id){
    this._httpService.removeTask(id).subscribe(data =>{
      console.log(data, "this is the removed data")
    })
  }
}
