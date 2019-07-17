import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { //making private instnace of httpclient
    // this.getTasks(); // service invoking function
  }

  getAllTasks(){
    // our http response is an observable, store it in the var tempObservable
    // let tempObservable = this._http.get('/tasks'); //connecting the routes w /tasks, didn't work before cuz t here was no route for /tasks
    // // subscribe to our obserable and provide the code we would like to do with our data from the resposne
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks') //retunring observable
  }
  getTask(id){
    return this._http.get(`/tasks/${id}`)
  }
  createTask(newtask){ //json hits here, have to parse thru the object with . notation
    return this._http.post(`/new/${newtask.title}/${newtask.description}`, newtask)
  }
  editTask(id, updatetask){
    console.log(id, "this is from the service");
    console.log(updatetask, "this is updatetask from service")
    return this._http.put(`/update/${id}`, updatetask)
  }
  removeTask(id){
    return this._http.delete(`/remove/${id}`)
  }
}
