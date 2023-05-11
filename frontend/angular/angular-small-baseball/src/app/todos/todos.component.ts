import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import { slideToRight } from '../_animations/todo.animate';
import { TodoService } from '../_services/todo.service';
import { NewTodoComponent } from './new-todo/new-todo.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [slideToRight],
})
export class TodosComponent implements OnInit {
  @HostBinding('@slideAnim') state: any;

  todos$ = this.todoService.todos$;
  constructor(private todoService: TodoService, private dialog: MatDialog) {}

  showAddModal() {
    const dialogRef = this.dialog.open(NewTodoComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.todoService.getAll().subscribe();
  }
}
