import { useState } from 'react';

const Forms = () => {
  const [form, setForm] = useState({
    email: 'test@test.com',
    password: '123',
  });

  const onChange = (value: string, field: string): void => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
    <>
      <h3>Forms</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={form.email}
        onChange={({ target }): void => {
          onChange(target.value, 'email');
        }}
      />
      <input
        type="password"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={form.password}
        onChange={({ target }): void => {
          onChange(target.value, 'password');
        }}
      />
      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </>
  );
};

export default Forms;
