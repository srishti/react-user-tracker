import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

import styles from "./UserForm.module.css";

const USER_INPUT_INITIAL_STATE = {
  id: "",
  name: "",
  age: "",
};

const UserForm = (props) => {
  console.log("[UserForm] rendered");

  const [userInput, setUserInput] = useState(USER_INPUT_INITIAL_STATE);
  const [error, setError] = useState(null);

  const changeNameHandler = (event) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        name: event.target.value,
      };
    });
  };

  const changeAgeHandler = (event) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        age: event.target.value,
      };
    });
  };

  const validateUserInput = () => {
    if (!userInput.name.trim() || !userInput.age.trim()) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return false;
    } else if (+userInput.age < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (greater than 0).",
      });
      return false;
    }
    return true;
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (validateUserInput()) {
      props.onAdd(userInput);
      setUserInput(USER_INPUT_INITIAL_STATE);
    }
  };

  const resetError = () => {
    setError(null);
  };

  const modalContent = error && (
    <Modal
      title={error.title}
      message={error.message}
      onReset={resetError}
    ></Modal>
  );

  return (
    <>
      <Card className={styles.card}>
        <form className={styles.form} onSubmit={addUserHandler}>
          <div className={styles["form-control"]}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={userInput.name}
              onChange={changeNameHandler}
            />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="age">Age (in years)</label>
            <input
              type="number"
              id="age"
              value={userInput.age}
              onChange={changeAgeHandler}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      {modalContent}
    </>
  );
};

export default UserForm;
