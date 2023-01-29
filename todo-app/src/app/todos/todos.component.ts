import { Component } from '@angular/core';

import { Todo } from './todo.models';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  toDoName:string = '';
  toDoDescription:string = '';
  toDoDeadline = undefined;
  isDisabled = this.toDoName && this.toDoDescription ? false : true; 

  todos: Todo[] = [];

  markToDo(id: number): void {
    this.todos.map((value, index,) => {
      if(index == id) {
        value.finished = !value.finished
      }
    })
  }

  deleteToDo(id: number) {
    this.todos = this.todos.filter((value, index) => index != id)
  }

  addToDo() {
    this.todos.push({
      name: this.toDoName,
      description: this.toDoDescription,
      finished: false,
      deadline: this.toDoDeadline,
      dateAdded: new Date()
    })
    this.todos.sort((a, b) => a.deadline && b.deadline 
    ? new Date(b.deadline).getTime() - new Date(a.deadline).getTime() 
    : new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
  }
}
