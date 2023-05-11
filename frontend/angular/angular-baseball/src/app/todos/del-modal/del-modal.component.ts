import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-del-modal',
  templateUrl: './del-modal.component.html',
  styleUrls: ['./del-modal.component.css'],
})
export class DelModalComponent implements OnInit {
  constructor(private def: MatDialogRef<DelModalComponent>) {}

  ngOnInit() {}

  delete() {
    this.def.close(true);
  }
}
