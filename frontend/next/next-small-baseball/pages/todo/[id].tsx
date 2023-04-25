import { useRouter } from 'next/router';
import React from 'react';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();

  const paths = data.map((todo: any) => {
    return {
      params: { id: todo.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + id);
  const data = await res.json();

  return {
    props: { todo: data },
  };
};

function TodoDetails({ todo }: any) {
  const router = useRouter();
  return (
    <div>
      <h1>
        Todo Details ({router.pathname}, {router.query.id})
      </h1>
      <div>
        <h3>{todo.title}</h3>
      </div>
    </div>
  );
}

export default TodoDetails;
