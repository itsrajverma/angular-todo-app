import { Injectable } from '@angular/core';
import { Todo } from "../model/Todo";
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos : Todo[];
  constructor() { }

  getTodos(){

  }

}
