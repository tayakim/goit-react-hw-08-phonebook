import React from "react";
import styles from "./contactForm.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../redux/contacts/contactSelector";
import * as contactOperation from "../redux/contacts/contactOperation";

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, onNameChange] = useState("");
  const [number, onNumberChange] = useState("");

  const contactMatch = () => {
    const namesPhone = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      []
    );

    const numbersPhone = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      []
    );

    if (namesPhone.includes(name) || numbersPhone.includes(number)) {
      alert(`${name}:${number}  This contact is already in contacts list!`);

      return true;
    }
  };
  const onhandleSubmit = async (e) => {
    e.preventDefault();
    if (contactMatch()) {
      return;
    }
    dispatch(contactOperation.addContact(name, number));
    onNameChange("");
    onNumberChange("");
  };

  return (
    <form onSubmit={onhandleSubmit}>
      <h3>Create new contact</h3>
      <div className={styles.wrapper}>
        <p className={styles.text}>Name:</p>
        <span> </span>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="type name.."
          onChange={(e) => onNameChange(e.currentTarget.value)}
          className={styles.input}
        ></input>
      </div>

      <div className={styles.wrapper}>
        <p className={styles.text}>Number:</p>
        <span> </span>
        <input
          placeholder="type number.."
          id="number"
          value={number}
          onChange={(e) => onNumberChange(e.currentTarget.value)}
          className={styles.input}
        ></input>
      </div>

      <br></br>
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}
