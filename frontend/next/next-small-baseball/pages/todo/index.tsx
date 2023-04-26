import Link from 'next/link';
import React, { useState, useEffect, useRef, useContext } from 'react';
import NotificationContext from '../../store/notification-context';
import { useSession } from 'next-auth/react';
import AuthForm from '@/components/auth/auth-form';
import AccessDenied from '@/components/access-denied';

function TodoList() {
  const [todos, setTodos] = useState<any[]>([]);
  const notificationCtx = useContext(NotificationContext);
  const { data: session } = useSession();
  if (!session) {
    return <AccessDenied />;
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch('/api/todos/');
    const data = await response.json();
    setTodos(data.data);
  };

  const todoInputRef = useRef<any>();

  function sendTodoHandler(event: any) {
    event.preventDefault();

    const todo = todoInputRef.current.value;

    fetch('/api/todos/', {
      method: 'POST',
      body: JSON.stringify({
        title: todo,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => {
        notificationCtx.showNotification({
          title: 'Success!',
          message: 'Add todo success.',
          status: 'success',
        });
        fetchTodos();
      });
  }

  return (
    <div>
      <h1>TodoList</h1>

      <form onSubmit={sendTodoHandler}>
        <input ref={todoInputRef} />
        <button>Submit</button>
      </form>

      {todos.map((todo: any) => (
        // <Link href={'/todo/' + todo.id} key={todo.id}>
        //   <h3>{todo.title}</h3>
        // </Link>
        <Link
          href={{
            pathname: '/todo/[id]',
            query: { id: todo._id },
          }}
          key={todo._id}
        >
          <h3>{todo.title}</h3>
        </Link>
      ))}
    </div>
  );
}

export default TodoList;
