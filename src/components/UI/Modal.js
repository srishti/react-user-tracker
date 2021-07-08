import React, { useState } from "react";

import Card from "./Card";
import Button from "./Button";

import styles from "./Modal.module.css";

const Modal = (props) => {
  console.log("[Modal] rendered");

  const closeModalHandler = () => {
    props.onReset();
  };

  return (
    <>
      <div className={styles.backdrop} onClick={closeModalHandler}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button
            type="button"
            onClick={closeModalHandler}
            className={styles.button}
          >
            Okay
          </Button>
        </footer>
      </Card>
    </>
  );
};

export default Modal;
