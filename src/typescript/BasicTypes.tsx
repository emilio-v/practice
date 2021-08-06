import React from 'react';

const BasicTypes = () => {
  const name: string = 'Emilio';
  const age: number = 22;
  const isActive: boolean = true;

  const powers: string[] = ['Speed', 'Fly', 'Strength'];

  return (
    <>
      <h3>Basic Types</h3>
      {name}, {age}, {isActive ? 'active' : ' not active'}
      <br />
      {powers.join(', ')}
    </>
  );
};

export default BasicTypes;
