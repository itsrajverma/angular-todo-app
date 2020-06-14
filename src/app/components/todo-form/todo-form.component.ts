import { Component, OnInit } from '@angular/core';

import {Todo} from "../../model/Todo";
import {TodoService} from "../../service/todo.service";
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor(private todoService:TodoService) { }

  todoTitle : string ='';

  ngOnInit(): void {
  }

  handleAddTodo(){
    let todo : Todo = {
      id : uuidv4(),
      title : this.todoTitle,
      isCompleted : false,
      date : new Date()
    }

    this.todoService.addTodo(todo)

    this.todoTitle='';

  }

}
