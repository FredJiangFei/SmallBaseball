import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../lib/utils';

const getData = (data) => {
  const todos = [];
  for (const key in data) {
    todos.push({
      id: key,
      title: data[key].title,
    });
  }
  return todos;
};

const todoUrl = 'https://jsonplaceholder.typicode.com/posts';

function LastSalesPage(props) {
  const [todos, setTodos] = useState(props.todos);
  const { data, error } = useSWR(todoUrl, fetcher);

  useEffect(() => {
    if (data) {
      const todos = getData(data);
      setTodos(todos);
    }
  }, [data]);

  // useEffect(() => {
  //   fetch(todoUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const todos = getData(data);
  //       setTodos(todos);
  //     });
  // }, []);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !todos) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch(todoUrl);
  const data = await response.json();
  const todos = getData(data);
  return { props: { todos: todos } };
}

export default LastSalesPage;
