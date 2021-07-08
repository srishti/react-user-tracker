import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  console.log("[Button] rendered");

  const stylesClasses = props.className
    ? `${props.className} ${styles.button}`
    : styles.button;

  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={stylesClasses}
    >
      {props.children}
    </button>
  );
};

export default Button;
