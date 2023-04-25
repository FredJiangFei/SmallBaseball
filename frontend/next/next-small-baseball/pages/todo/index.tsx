import Link from 'next/link';
import React from 'react';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();

  return {
    props: { todos: data },
  };
};

function TodoList({ todos }: any) {
  return (
    <div>
      <h1>TodoList</h1>
      {todos.map((todo: any) => (
        // <Link href={'/todo/' + todo.id} key={todo.id}>
        //   <h3>{todo.title}</h3>
        // </Link>
        <Link
          href={{
            pathname: '/todo/[id]',
            query: { id: todo.id },
          }}
          key={todo.id}
        >
          <h3>{todo.title}</h3>
        </Link>
      ))}
    </div>
  );
}

export default TodoList;
