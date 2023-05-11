import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { TodoCommand } from 'src/app/_commands/todo.command';
import { TodoService } from 'src/app/_services/todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent {
  todo: TodoCommand = {
    title: '',
  };

  saving: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<NewTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TodoCommand,
    private todoService: TodoService
  ) {}

  save() {
    this.saving = true;
    this.todoService
      .create(this.todo)
      .pipe(finalize(() => (this.saving = false)))
      .subscribe((_) => {
        this.todoService.getAll().subscribe();
        this.dialogRef.close();
      });
  }
}
