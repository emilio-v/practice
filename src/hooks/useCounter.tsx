import { useState } from 'react';

const useCounter = (initialValue: number = 0): [number, (number: number) => void] => {
  const [value, setValue] = useState<number>(initialValue);

  const increaseValue = (number: number) => {
    setValue(value + number);
  };

  return [value, increaseValue];
};

export default useCounter;
