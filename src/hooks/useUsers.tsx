import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResList, Data } from '../interfaces/reqRes.interface';

const useUsers = (): [Data[], () => Promise<void>] => {
  const [users, setUsers] = useState<Data[]>([]);
  const pageRef = useRef(1);

  useEffect(() => {
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

  return [users, getUsers];
};

export default useUsers;
