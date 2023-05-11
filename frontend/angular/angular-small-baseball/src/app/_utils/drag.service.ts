import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragService {
  private _dragData = new BehaviorSubject<any>(null);
  dragData$ = this._dragData.asObservable();

  setDragData(data: any) {
    this._dragData.next(data);
  }

  clearDragData() {
    this._dragData.next(null);
  }
}
