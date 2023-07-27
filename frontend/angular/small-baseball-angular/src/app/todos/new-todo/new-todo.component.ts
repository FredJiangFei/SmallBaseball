import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TodoCommand } from 'src/app/_commands/todo.command';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent {
  todo: TodoCommand = {
    title: '',
    image: undefined 
  };

  constructor(
    private dialogRef: MatDialogRef<NewTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TodoCommand
  ) {}

  handleSubmit() {
    this.dialogRef.close(this.todo);
  }

  uploadImage(event) {
    this.todo.image = event.target.files[0];
  }
}
