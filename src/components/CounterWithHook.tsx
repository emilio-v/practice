import useCounter from '../hooks/useCounter';

const CounterWithHook = () => {
  const [value, increaseValue] = useCounter();

  return (
    <>
      <h3>
        Counter: <small>{value}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => increaseValue(-1)}>
        -1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => increaseValue(1)}>
        +1
      </button>
    </>
  );
};

export default CounterWithHook;
