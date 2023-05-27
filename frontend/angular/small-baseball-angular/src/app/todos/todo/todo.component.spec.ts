import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TodoComponent } from './todo.component';
import { ShareModule } from 'src/app/_shared/share.module';
import { click, expectText } from 'src/app/_utils/element.spec-helper';

fdescribe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  const todo = {
    id: '76cbca9f-4a40-4ba8-9150-fcb0f43be563',
    title: 'Todo 1',
    completed: true,
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ShareModule],
      declarations: [TodoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);

    const { componentInstance } = fixture;
    component = componentInstance;
    component.todo = todo;
  });

  it('render component', () => {
    // act
    fixture.detectChanges();

    // assert
    expectText(fixture, 'todo-title', todo.title);
  });

  it('delete click return todo id', () => {
    // arrange
    let actualId: string | undefined;
    component.onDelete.subscribe((id: string) => {
      actualId = id;
    });

    // act
    click(fixture, 'todo-delete');

    // assert
    expect(actualId).toBe(todo.id);
  });
});
