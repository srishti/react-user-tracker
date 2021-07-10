import React, { useState, useRef } from "react";

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

  const nameInputRef = useRef(null);
  const ageInputRef = useRef(null);
  const [error, setError] = useState(null);

  const validateUserInput = () => {
    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;

    if (!name.trim() || !age.trim()) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return false;
    } else if (+age < 0) {
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
      props.onAdd(nameInputRef.current.value, ageInputRef.current.value);
      // resetting name and age input fields on successful form submission
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
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
            <input type="text" id="username" ref={nameInputRef} />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="age">Age (in years)</label>
            <input type="number" id="age" ref={ageInputRef} />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      {modalContent}
    </>
  );
};

export default UserForm;
