import React, { useState } from 'react';

export default function State01() {
  const [count, setCount] = useState(0);

  // Function to handle increment
  const handleIncrement = () => {
    if(count<5)
    setCount(count + 1);
    else
    alert("Can't Increate more than Five");
  };

  // Function to handle decrement
  const handleDecrement = () => {
    if(count!==0)
    setCount(count - 1);
  else 
  alert("can't below Zero");
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}
