import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoService } from '../_services/todo.service';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { DelModalComponent } from './del-modal/del-modal.component';
import { AlertifyService } from '../_utils/alertify.service';
import { TodoCommand } from '../_commands/todo.command';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos$ = this.todoService.todos$;
  status: string[] = ['All', 'Completed', 'Uncompleted'];
  filterStatus: string = 'All';

  constructor(
    private todoService: TodoService,
    private dialog: MatDialog,
    private alertify: AlertifyService
  ) {}

  handleAdd() {
    const dialog = this.dialog.open(NewTodoComponent);
    dialog.afterClosed().subscribe((command: TodoCommand) => {
      if (command) {
        const formData = new FormData();
        formData.append('title', command.title);
        if (command.image) {
          formData.append('image', command.image);
        }
        this.todoService.create(formData).subscribe((_) => {
          this.alertify.success('Todo created successfully');
          this.todoService.getAll().subscribe();
        });
      }
    });
  }

  handleDelete(id: string) {
    const dialog = this.dialog.open(DelModalComponent);
    dialog.afterClosed().subscribe((isDelete: boolean) => {
      if (isDelete) {
        this.todoService.deleteTodo(id).subscribe(() => {
          this.alertify.success('Todo deleted successfully');
        });
      }
    });
  }

  handleToggle(id: string) {
    this.todoService.toggleTodo(id).subscribe(() => {
      this.alertify.success('Todo toggle successfully');
    });
  }

  ngOnInit() {
    this.todoService.getAll().subscribe();
  }
}
