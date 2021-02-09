import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "../alert/alert.module.css";

const Alert = ({ isVisible }) => {
  return (
    <CSSTransition
      classNames={styles}
      in={isVisible}
      timeout={250}
      unmountOnExit
    >
      <div className={styles.alert}>
        <p className={styles.alertText}>
          This contact is already in contacts list!
        </p>
      </div>
    </CSSTransition>
  );
};

export default Alert;
