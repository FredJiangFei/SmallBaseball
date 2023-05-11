import { Component, Input, HostBinding, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DelModalComponent } from '../del-modal/del-modal.component';
import { NewTodoComponent } from '../new-todo/new-todo.component';
import { todoHoverAnim, todoAddAndRemoveAnim } from '../../_animations/todo.animate';
import { TodoService } from 'src/app/_services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    todoHoverAnim,
    todoAddAndRemoveAnim,
  ]
})
export class TodoComponent {
  @Input() todo: any;
  @HostBinding('@todoHover') cardState = 'out';
  @HostBinding('@todoAddAndRemove') itemAnim: any;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.cardState = 'out';
  }

  constructor(private dialog: MatDialog, private todoService: TodoService) { }

  showEditModal(e: Event) {
    e.stopPropagation();
    this.dialog.open(NewTodoComponent, { data: Object.assign({}, this.todo) });
  }

  showDeleteModal(e: Event) {
    e.stopPropagation();
    const dialog = this.dialog.open(DelModalComponent);
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.todoService.deleteTodo(this.todo?.id).subscribe();
      }
    });
  }
}
