import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { Todo } from 'src/app/_models/todo';
import { TodoService } from 'src/app/_services/todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent {
  todo: any;
  saving: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<NewTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todo,
    private todoService: TodoService
  ) {}

  save() {
    this.saving = true;
    const save$ = this.todoService.create(this.todo);
    save$
      .pipe(finalize(() => (this.saving = false)))
      .subscribe((_) => this.dialogRef.close());
  }
}
