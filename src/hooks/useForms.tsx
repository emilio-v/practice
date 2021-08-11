import { useState } from 'react';

const useForms = <T extends Object>(form: T) => {
  const [state, setState] = useState(form);

  const onChange = (value: string, field: keyof T): void => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return { ...state, onChange };
};

export default useForms;
