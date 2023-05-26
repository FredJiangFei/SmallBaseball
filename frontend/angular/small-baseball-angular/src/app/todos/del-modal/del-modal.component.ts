import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-del-modal',
  templateUrl: './del-modal.component.html',
  styleUrls: ['./del-modal.component.css'],
})
export class DelModalComponent {
  constructor(private def: MatDialogRef<DelModalComponent>) {}

  handleDelete() {
    this.def.close(true);
  }
}
