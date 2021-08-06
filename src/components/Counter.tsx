import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => setCounter(counter - 1)}>
        -1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>
        +1
      </button>
    </>
  );
};

export default Counter;
