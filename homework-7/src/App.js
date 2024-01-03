import React, { useState, useMemo } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  
  const calculateExpensiveValue = () => {
    console.log('Calculating expensive value...');
    return count * 2;
  };
  const memoizedValue = useMemo(() => calculateExpensiveValue(), [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Value: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Example;
