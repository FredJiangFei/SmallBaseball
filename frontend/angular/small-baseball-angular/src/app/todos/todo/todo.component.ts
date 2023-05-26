import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/_models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() onDelete = new EventEmitter<string>();

  handleDelete(e: Event) {
    e.stopPropagation();
    this.onDelete.emit(this.todo.id);
  }
}
