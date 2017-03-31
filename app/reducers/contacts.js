import {FETCH_CONTACTS, FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_FAILED, FETCH_CONTACTS_RESET
        } from '../actions/actionCreators';

const INITIAL_STATE = { contactsList: {contacts: [], error:null, loading: false}};

function contacts(state = INITIAL_STATE, action) {
  
  switch(action.type) {
      
      case FETCH_CONTACTS: // start fetching contacts set the loading = true
        return {...state, contactsList: {contacts:[], error: null, loading: true}};
      case FETCH_CONTACTS_SUCCESS: // return the contacts list set the loading = false
        return {...state, contactsList: {contacts:action.payload, error: null, loading: false}};
      case FETCH_CONTACTS_FAILED: // return an error the loading = false
        return {...state, contactsList: {contacts:[], error: null, loading: false}};
      case FETCH_CONTACTS_RESET: // reset everything
        return {...state, contactsList: {contacts:[], error: null, loading: false}};
    default:
        return state;
  }
}

export default contacts;