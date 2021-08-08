import { useEffect, useState, useRef } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResList, Data } from '../interfaces/reqRes.interface';

const Users = () => {
  const [users, setUsers] = useState<Data[]>([]);

  const pageRef = useRef(1);

  useEffect(() => {
    // call to API
    getUsers();
  }, []);

  const getUsers = async () => {
    const resp = await reqResApi.get<ReqResList>('/users', {
      params: {
        page: pageRef.current,
      },
    });

    if (resp.data.data.length) {
      setUsers(resp.data.data);
      pageRef.current++;
    } else {
      alert('There are not more records');
    }
  };

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
