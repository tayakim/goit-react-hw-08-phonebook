import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

const NavigationItem = ({
  isAuth,
  path,
  name,
  exact,
  isPrivate,
  restricted,
}) => {
  return (
    <>
      {!isAuth && !isPrivate && restricted && (
        <li key={path} className={styles.item}>
          <NavLink
            to={path}
            exact={exact}
            className={styles.item}
            activeClassName={styles.activeItem}
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
