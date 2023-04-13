import React, { useState, Fragment } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  function AddUserHandler(name, age) {
    setUsersList((prevState) => {
      return [...prevState, { name, age }]
    })
  }

  return (
    <Fragment>
      <AddUser onAddUser={ AddUserHandler } />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
