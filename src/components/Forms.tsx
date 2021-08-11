import useForms from '../hooks/useForms';

const Forms = () => {
  const { email, password, onChange } = useForms({
    email: 'test@test.com',
    password: '123',
  });

  return (
    <>
      <h3>Forms</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={({ target }): void => {
          onChange(target.value, 'email');
        }}
      />
      <input
        type="password"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={password}
        onChange={({ target }): void => {
          onChange(target.value, 'password');
        }}
      />
      <code>
        <pre>{JSON.stringify({ email, password }, null, 2)}</pre>
      </code>
    </>
  );
};

export default Forms;
