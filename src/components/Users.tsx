import { useEffect, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResList, Data } from '../interfaces/reqRes.interface';

const Users = () => {
  const [users, setUsers] = useState<Data[]>([]);

  console.log(users);

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

  return (
    <>
      <h3>Users:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};

export default Users;
