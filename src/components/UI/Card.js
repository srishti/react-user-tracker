import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
  console.log("[Card] rendered");

  const styleClasses = props.className
    ? `${props.className} ${styles.card}`
    : styles.card;

  return <div className={styleClasses}>{props.children}</div>;
};

export default Card;
