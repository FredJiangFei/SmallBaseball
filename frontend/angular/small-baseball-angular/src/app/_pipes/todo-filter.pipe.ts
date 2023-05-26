import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../_models/todo';

@Pipe({
  name: 'todoFilter',
})
export class TodoFilterPipe implements PipeTransform {
  transform(allTodos: Todo[] | null, status: string): any {
    if (!allTodos) {
      return undefined;
    }

    if (status === 'Completed') {
      return allTodos.filter((todo) => todo.completed);
    }

    if (status === 'Uncompleted') {
      return allTodos.filter((todo) => !todo.completed);
    }

    return allTodos;
  }
}
