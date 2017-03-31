import axios from "axios";
//Contacts list
export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_FAILED = 'FETCH_CONTACTS_FAILED';
export const FETCH_CONTACTS_RESET = 'FETCH_CONTACTS_RESET';

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



