import { useEffect, useState } from 'react';
import todoService from '../../services/todoService';
import { useForm } from 'react-hook-form';

function Todo() {
  const [todos, setTodos] = useState([]);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const res: any = await todoService.getAll();
    setTodos(res.value);
  };

  const handleCreate = async (data: any) => {
    await todoService.create(data);
    getTodos();
  };

  const handleDelete = async (id: any) => {
    await todoService.deleteTodo(id);
    getTodos();
  };

  return (
    <>
      <h1>Todos</h1>

      {todos &&
        todos.map((todo: any) => (
          <div key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => handleDelete(todo.id)}>X</button>
          </div>
        ))}

      <form autoComplete="off" onSubmit={handleSubmit(handleCreate)}>
        <label htmlFor="name">Title</label>
        <input type="text" {...register('title')} />
        <button>Create</button>
      </form>
    </>
  );
}

export default Todo;
