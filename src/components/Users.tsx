import useUsers from '../hooks/useUsers';
import { Data } from '../interfaces/reqRes.interface';

const Users = () => {
  const [users, getUsers] = useUsers();

  const renderItem = ({ id, avatar, first_name, last_name, email }: Data) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img src={avatar} alt={first_name} style={{ width: 50, borderRadius: 100 }} />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Users:</h3>
      <table className="table align-middle">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map(user => renderItem(user))}</tbody>
      </table>

      <button className="btn btn-primary" onClick={getUsers}>
        Next
      </button>
    </>
  );
};

export default Users;
