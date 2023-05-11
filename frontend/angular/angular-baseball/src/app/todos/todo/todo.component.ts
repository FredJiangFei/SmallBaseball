import { Component, Input, HostBinding, HostListener } from '@angular/core';
import { DelModalComponent } from '../del-modal/del-modal.component';
import {
  todoHoverAnim,
  todoAddAndRemoveAnim,
} from '../../_animations/todo.animate';
import { TodoService } from 'src/app/_services/todo.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [todoHoverAnim, todoAddAndRemoveAnim],
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

  constructor(private dialog: MatDialog, private todoService: TodoService) {}

  showDeleteModal(e: Event) {
    e.stopPropagation();
    const dialog = this.dialog.open(DelModalComponent);
    dialog.afterClosed().subscribe((result: any) => {
      if (result) {
        this.todoService.deleteTodo(this.todo?.id).subscribe();
      }
    });
  }
}
