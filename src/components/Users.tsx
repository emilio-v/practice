import { useEffect, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResList, Data } from '../interfaces/reqRes.interface';

const Users = () => {
  const [users, setUsers] = useState<Data[]>([]);

  useEffect(() => {
    // call to API
    reqResApi
      .get<ReqResList>('/users')
      .then(resp => {
        const { data } = resp.data;
        setUsers(data);
      })
      .catch(console.log);
  }, []);

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
    </>
  );
};

export default Users;
