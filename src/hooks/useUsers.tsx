import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResList, Data } from '../interfaces/reqRes.interface';

const useUsers = (): [Data[], () => void, () => void] => {
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
    } else {
      pageRef.current--;
      alert('There are not more records');
    }
  };

  const prevPage = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      getUsers();
    } else {
      alert('There are not more records');
    }
  };

  const nextPage = () => {
    pageRef.current++;
    getUsers();
  };

  return [users, prevPage, nextPage];
};

export default useUsers;
