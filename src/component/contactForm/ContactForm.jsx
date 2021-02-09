import React from "react";
import styles from "./contactForm.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../redux/contacts/contactSelector";
import * as contactOperation from "../redux/contacts/contactOperation";

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onSubmit = (name, number) =>
    dispatch(contactOperation.addContact(name, number));

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
      alert(`${name}${number} is already in contacts`);
      return true;
    }
  };
  const onhandleSubmit = async (e) => {
    e.preventDefault();
    if (contactMatch()) {
      return;
    }
    await onSubmit(name, number);
    onNameChange("");
    onNumberChange("");
  };

  return (
    <form onSubmit={onhandleSubmit}>
      {/* <Alert isVisible={isVisible} /> */}
      <p>Name:</p>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="name.."
        onChange={(e) => onNameChange(e.currentTarget.value)}
      ></input>
      <p>Number:</p>
      <input
        placeholder="number.."
        id="number"
        value={number}
        onChange={(e) => onNumberChange(e.currentTarget.value)}
      ></input>
      <br></br>
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}
