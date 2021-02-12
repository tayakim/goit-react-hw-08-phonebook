import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./contactsList.module.css";
import { useSelector, useDispatch } from "react-redux";
import * as contactOperation from "../redux/contacts/contactOperation";
import { getVisibleContacts } from "../redux/contacts/contactSelector";

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(contactOperation.deleteContact(id));

  return (
    <TransitionGroup component="ul" className={styles.list}>
      <h3>My contacts list:</h3>
      {contacts.map(({ name, number, id }) => (
        <CSSTransition key={id} timeout={250} classNames={styles}>
          <li className={styles.item}>
            {name}: {number}
            <button
              type="button"
              onClick={() => onDeleteContact(id)}
              className={styles.button}
            >
              Delete contact
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
