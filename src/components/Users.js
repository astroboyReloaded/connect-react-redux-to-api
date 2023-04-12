import { useSelector } from 'react-redux';

const Users = () => {
  const { users, isLoading, error } = useSelector((store) => store.users);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <ul>
      {users.map((user) => (
        <li key={user}>{(user.firstName, user.lastName)}</li>
      ))}
    </ul>
  );
};

export default Users;
