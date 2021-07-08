import React from "react";

import Card from "../UI/Card";
import User from "./User";

import styles from "./UsersList.module.css";

const UsersList = (props) => {
  console.log("[UsersList] rendered");

  return (
    <Card>
      <ul className={styles["users-list"]}>
        {props.users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
