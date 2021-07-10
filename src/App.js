import React, { useState } from "react";

import UserForm from "./components/UserForm/UserForm";
import UsersList from "./components/Users/UsersList";
import styles from "./App.module.css";

// const DUMMY_USERS = [{ id: 1, name: "Srishti", age: 28 }];

const App = () => {
  console.log("[App] rendered");

  const [users, setUsers] = useState([]);

  const addUser = (name, age) => {
    const user = {
      name,
      age,
      id: Math.random().toString(),
    };
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const usersListContent =
    users.length > 0 ? <UsersList users={users} /> : null;

  return (
    <div className={styles.app}>
      <UserForm onAdd={addUser} />
      {usersListContent}
    </div>
  );
};

export default App;
