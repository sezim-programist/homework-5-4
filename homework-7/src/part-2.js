import React, { useState, useCallback } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const memoizedHandleClick = useCallback(handleClick, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={memoizedHandleClick}>Increment</button>
    </div>
  );
}

export default Example;