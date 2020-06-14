import { Injectable } from '@angular/core';
import { Todo } from "../model/Todo";
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos : Todo[];
  constructor() {
    this.todos = [
      {
        id:'111',
        title : 'Learn CSS',
        isCompleted:true,
        date:new Date()
      },
      {
        id:'222',
        title : 'Learn JAVA',
        isCompleted:false,
        date:new Date()
      },
      {
        id:'333',
        title : 'Learn LARAVEL',
        isCompleted:true,
        date:new Date()
      }
    ]

  }

  getTodos(){
    return of(this.todos);
  }

  addTodo(todo : Todo){
    this.todos.push(todo);
  }

  changeStatus(todo : Todo){
    this.todos.map((singleTodo) =>{
      if(singleTodo.id === todo.id){
        singleTodo.isCompleted = !todo.isCompleted
      }
    })
  }

  deleteTodo(todo : Todo){
    let indexOfTodo = this.todos.indexOf(todo);
    this.todos.splice(indexOfTodo,1);
  }


}
