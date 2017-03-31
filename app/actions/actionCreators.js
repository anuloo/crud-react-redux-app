import axios from "axios";
//Contacts list
export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_FAILED = 'FETCH_CONTACTS_FAILED';
export const FETCH_CONTACTS_RESET = 'FETCH_CONTACTS_RESET';

//Single contact
export const FETCH_CONTACT = 'FETCH_CONTACT';
export const FETCH_CONTACT_SUCCESS = 'FETCH_CONTACT_SUCCESS';
export const FETCH_CONTACT_FAILED = 'FETCH_CONTACT_FAILED';
export const FETCH_CONTACT_RESET = 'FETCH_CONTACT_RESET';

//Add new contact
export const ADD_CONTACT = 'ADD_CONTACT';
export const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';
export const ADD_CONTACT_FAILED = 'ADD_CONTACT_FAILED';
export const ADD_CONTACT_RESET = 'ADD_CONTACT_RESET';

//Delete a contact
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS';
export const DELETE_CONTACT_FAILED = 'DELETE_CONTACT_FAILED';
export const DELETE_CONTACT_RESET = 'DELETE_CONTACT_RESET';

//Update a contact
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const UPDATE_CONTACT_SUCCESS = 'UPDATE_CONTACT_SUCCESS';
export const UPDATE_CONTACT_FAILED = 'UPDATE_CONTACT_FAILED';
export const UPDATE_CONTACT_RESET = 'UPDATE_CONTACT_RESET';


const API_URL = 'http://rest.learncode.academy/api/anuloo/contacts';
//list -----------------------------
// fetch the full list of contacts
export function fetchContacts() {
    const request =  axios.get(API_URL);
  return {
    type: FETCH_CONTACTS,
    payload: request
  };
}

// return the list 
export function fetchContactsFulfilled(contacts) {
  return {
    type: FETCH_CONTACTS_SUCCESS,
    payload: contacts
  };
}

// handle error 
export function fetchContactsRejected(error) {
  return {
    type: FETCH_CONTACTS_FAILED,
    payload: error
  };
}

// reset
export function fetchContactsReset() {
  return {
    type: FETCH_CONTACTS_RESET,
  };
}

//Single contact ----------------------------
// fetch a contacts
export function fetchContact(id) {
    const request =  axios.get(API_URL+"/"+id);
  return {
    type: FETCH_CONTACT,
    payload: request
  };
}

// return a contact 
export function fetchContactFulfilled(selectedContact) {
  return {
    type: FETCH_CONTACT_SUCCESS,
    payload: selectedContact
  };
}

// handle error 
export function fetchContactRejected(error) {
  return {
    type: FETCH_CONTACT_FAILED,
    payload: error
  };
}

// reset
export function fetchContactReset() {
  return {
    type: FETCH_CONTACT_RESET,
  };
}

//Add new contact ----------------------------
// start adding a contact
export function addContact(props) {
    const request =  axios({
      method :'post',
      data: props,
      url: API_URL
    });
  return {
    type: ADD_CONTACT,
    payload: request
  };
}

// return the newly added contact 
export function addContactFulfilled(newContact) {
  return {
    type: ADD_CONTACT_SUCCESS,
    payload: newContact
  };
}

// handle error 
export function addContactRejected(error) {
  return {
    type: ADD_CONTACT_FAILED,
    payload: error
  };
}

// reset
export function addContactReset() {
  return {
    type: ADD_CONTACT_RESET,
  };
}

//Delete a contact ----------------------------
export function deleteContact(id) {
    const request =  axios.delete(API_URL+"/"+id);
  return {
    type: DELETE_CONTACT,
    payload: request
  };
}

// return a contact 
export function deleteContactFulfilled(deletedContact) {
  return {
    type: DELETE_CONTACT_SUCCESS,
    payload: deletedContact
  };
}

// handle error 
export function deleteContactRejected(error) {
  return {
    type: DELETE_CONTACT_FAILED,
    payload: error
  };
}

// reset
export function deleteContactReset() {
  return {
    type: DELETE_CONTACT_RESET,
  };
}

//Update selected contact ----------------------------
// update contact
export function updateContact(id, props) {
    const request =  axios({
      method :'put',
      data: props,
      url: API_URL+"/"+id
    });
  return {
    type: UPDATE_CONTACT,
    payload: request
  };
}

// return updated contact 
export function updateContactFulfilled(updatedContact) {
  return {
    type: UPDATE_CONTACT_SUCCESS,
    payload: updatedContact
  };
}

// handle error 
export function updateContactRejected(error) {
  return {
    type: UPDATE_CONTACT_FAILED,
    payload: error
  };
}

// reset
export function updateContactReset() {
  return {
    type: UPDATE_CONTACT_RESET,
  };
}


