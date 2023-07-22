import React, { useState } from 'react';
import AddUser from "./Users/AddUsers";
import UserList from "./Users/UsersList";


function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }]
    });
  }
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList user={usersList} />
    </React.Fragment>

  );
}

export default App;
