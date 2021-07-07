import React from "react";

import User from "./User";

const UsersList = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <User id={user.id} />
      ))}
    </ul>
  );
};

export default UsersList;
