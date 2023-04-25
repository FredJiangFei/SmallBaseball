import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { Todo } from '../_models/todo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosSubject = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get<any>(`${environment.baseUrl}/todos`)
      .pipe(tap((res) => this.todosSubject.next(res?.value)));
  }

  create(data: any) {
    return this.http.post<Todo>(`${environment.baseUrl}/todos`, data);
  }

  deleteTodo(id: string) {
    return this.http.delete<Todo>(`${environment.baseUrl}/todos/${id}`).pipe(
      tap((_) => {
        let todos = this.todosSubject.value;
        todos = todos.filter((todo) => todo.id !== id);
        this.todosSubject.next(todos);
      })
    );
  }
}
