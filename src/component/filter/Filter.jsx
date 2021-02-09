import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../redux/contacts/contactSelector";
import * as contactAction from "../redux/contacts/contactAction";
import styles from "./filter.module.css";

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeFilter = (e) =>
    dispatch(contactAction.changeFilter(e.target.value));

  return (
    <>
      <p className={styles.text}>Find contacts by name: </p>
      <input
        placeholder="type name..."
        type="text"
        value={value}
        onChange={onChangeFilter}
      ></input>
    </>
  );
}
