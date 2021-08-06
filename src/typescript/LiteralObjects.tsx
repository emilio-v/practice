interface Person {
  name: string;
  age: number;
  direction: Direction;
  fullName?: string;
}

interface Direction {
  country: string;
  houseNumber: number;
}

const LiteralObjects = () => {
  const person: Person = {
    name: 'Emilio Velasco Enciso',
    age: 22,
    direction: {
      country: 'Mexico',
      houseNumber: 108,
    },
  };

  return (
    <>
      <h3>Literal Objects</h3>
      <code>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </code>
    </>
  );
};

export default LiteralObjects;
