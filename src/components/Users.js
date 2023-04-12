import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../store/users/usersSlice';
import { v4 as uuidv4 } from 'uuid';

const Users = () => {
  const { users, isLoading, error } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [fetchUsers]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <ul>
      {users.map((user) => (
        <li key={uuidv4()}>
          {user.name.first} {user.name.last}
        </li>
      ))}
    </ul>
  );
};

export default Users;
