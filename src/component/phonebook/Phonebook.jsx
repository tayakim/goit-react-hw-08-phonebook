import React from "react";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as contactOperation from "../redux/contacts/contactOperation";
import { getLoader } from "../redux/contacts/contactSelector";
import ContactList from "../contactList/ContactList";
import ContactForm from "../contactForm/ContactForm";
import Filter from "../filter/Filter";
import Section from "../section/Section";
import Container from "../container/Container";

export default function Phonebook() {
  // const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const isFirstRender = useRef(true);
  const onFirstLoad = () => dispatch(contactOperation.fetchContacts());
  const loader = useSelector(getLoader);

  useEffect(() => {
    if (isFirstRender.current) {
      onFirstLoad();

      isFirstRender.current = false;
      return;
    }
  });

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
        {loader && <p>Loading...</p>}
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}
