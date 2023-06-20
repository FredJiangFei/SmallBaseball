import * as React from 'react';

function SfAge() {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return (
    <div>
      <div>Age: {count}</div>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default SfAge;
