import { useEffect, useState } from 'react';
import useSWR from 'swr';

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const todos = [];
      for (const key in data) {
        todos.push({
          id: key,
          title: data[key].title,
        });
      }
      setSales(todos);
    }
  }, [data]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const todos = [];

  //       for (const key in data) {
  //         todos.push({
  //           id: key,
  //           title: data[key].title,
  //         });
  //       }

  //       setSales(todos);
  //     });
  // }, []);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>{sale.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  const todos = [];
  for (const key in data) {
    todos.push({
      id: key,
      title: data[key].title,
    });
  }

  return { props: { sales: todos } };
}

export default LastSalesPage;
