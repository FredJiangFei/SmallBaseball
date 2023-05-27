import { TestBed, ComponentFixture } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { TodosComponent } from './todos.component';
import { TodoService } from '../_services/todo.service';
import { ShareModule } from '../_shared/share.module';
import { TodoFilterPipe } from '../_pipes/todo-filter.pipe';

describe('TodosComponent', () => {
  let fixture: ComponentFixture<TodosComponent>;
  let mockTodoService;

  beforeEach(async () => {
    mockTodoService = jasmine.createSpyObj(['getAll']);

    TestBed.configureTestingModule({
      imports: [ShareModule],
      declarations: [TodosComponent, TodoFilterPipe],
      providers: [{ provide: TodoService, useValue: mockTodoService }],
    }).compileComponents(); // compile all declared Components, Directives and Pipes

    fixture = TestBed.createComponent(TodosComponent);

    const todos = [
      {
        id: '76cbca9f-4a40-4ba8-9150-fcb0f43be563',
        title: 'Todo 1',
        completed: true,
      },
      {
        id: 'c342dace-5eca-4160-91c5-921ea898750a',
        title: 'Todo 2',
        completed: false,
      },
    ];

    const okResponse = new Response(JSON.stringify(todos), {
      status: 200,
      statusText: 'OK',
    });

    mockTodoService.getAll.and.returnValue(of(okResponse));
  });

  it('test basic', async () => {
    // assert

    // expect({ name: 'Linda' }).toBe({ name: 'Linda' });
    expect({ name: 'Linda' }).toEqual({ name: 'Linda' });
  });

  it('should render todos', async () => {
    // assert

    // act
    fixture.detectChanges(); // trigger change detection

    // assert
    expect(fixture.nativeElement.querySelector('.checked')).toContain('Todo 1');
  });
});
