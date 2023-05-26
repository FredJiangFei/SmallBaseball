import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { todoHoverAnim } from 'src/app/_animates/todo.animate';
import { Todo } from 'src/app/_models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [todoHoverAnim],
})
export class TodoComponent {
  @Input() todo: Todo;
  @HostBinding('@todoHover') cardState = 'out';
  @Output() onDelete = new EventEmitter<string>();
  @Output() onToggle = new EventEmitter<string>();

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.cardState = 'out';
  }

  handleDelete(e: Event) {
    e.stopPropagation();
    this.onDelete.emit(this.todo.id);
  }

  handleToggle(e: Event) {
    e.stopPropagation();
    this.onToggle.emit(this.todo.id);
  }
}
