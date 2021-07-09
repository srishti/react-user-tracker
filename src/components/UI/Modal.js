import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";

import styles from "./Modal.module.css";

const Backdrop = (props) => {
  console.log("[Backdrop] rendered");

  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  console.log("[ModalOverlay] rendered");

  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button type="button" onClick={props.onClose} className={styles.button}>
          Okay
        </Button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  console.log("[Modal] rendered");

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onReset} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClose={props.onReset}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
