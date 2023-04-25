import { Component, OnInit } from '@angular/core';
import { TodoService } from '../_services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos$ = this.todoService.todos$;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getAll().subscribe();
  }
}
