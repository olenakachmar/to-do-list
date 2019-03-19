import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  name: string;
  todos: any[];
  myModel: string;

  constructor() {
    this.todos = [
      {text: 'learn angular', done: true},
      {text: 'build an angular app', done: false},
      {text: 'modify', done: true},
      {text: 'test', done: false},
      {text: 'close', done: false}
    ];
  }

  addToDo = () => {
    const newToDo = {
      text: this.myModel,
      done: false
    };
    this.todos = [...this.todos, newToDo];
  }

  delete = (index) => {
    console.log(index);
    this.todos = this.todos.filter((element, idx) => {
      return idx !== index;
    });
  }

  remaining = () => {
    return this.todos.filter((element) => !element.done).length;
  }

  clean = () => {
    this.todos = this.todos.filter((element) => !element.done);
  }
}
