import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./contactAction";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsRequest());

  axios
    .get("/contacts.json")
    .then(({ data }) =>
      dispatch(
        fetchContactsSuccess(
          data
            ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
            : []
        )
      )
    )
    .catch((error) => dispatch(fetchContactsError(error)));
};

export const addContact = (name, number) => (dispatch) => {
  const contact = {
    name,
    number,
  };
  console.log(contact);
  dispatch(addContactRequest());

  axios
    .post("/contacts.json", contact)
    .then(({ data }) =>
      dispatch(addContactSuccess({ name, number, id: data.name }))
    )
    .catch((error) => dispatch(addContactError(error)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}.json`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error)));
};
