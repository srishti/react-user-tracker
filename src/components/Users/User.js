import React from "react";

import styles from "./User.module.css";

const User = (props) => {
  console.log("[User] rendered");

  return (
    <li className={styles.user}>{`${props.name} (${props.age} years old)`}</li>
  );
};

export default User;
