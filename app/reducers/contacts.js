import {FETCH_CONTACTS, FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_FAILED, FETCH_CONTACTS_RESET,
        FETCH_CONTACT, FETCH_CONTACT_SUCCESS, FETCH_CONTACT_FAILED, FETCH_CONTACT_RESET,
        ADD_CONTACT, ADD_CONTACT_SUCCESS, ADD_CONTACT_FAILED, ADD_CONTACT_RESET,
        DELETE_CONTACT, DELETE_CONTACT_SUCCESS, DELETE_CONTACT_FAILED, DELETE_CONTACT_RESET,
        UPDATE_CONTACT, UPDATE_CONTACT_SUCCESS, UPDATE_CONTACT_FAILED, UPDATE_CONTACT_RESET} from '../actions/actionCreators';

const INITIAL_STATE = { contactsList: {contacts: [], error:null, loading: false},
							newContact:{contact:null, error: null, loading: false}, 
							selectedContact:{contact:null, error:null, loading: false}, 
							deletedContact: {contact:null, error:null, loading: false},
              updatedContact: {contact:null, error:null, loading: false}
						};

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

      case FETCH_CONTACT: // start fetching a contact set the loading = true
        return {...state, selectedContact: {...state.contact, error: null, loading: true}};
      case FETCH_CONTACT_SUCCESS: // return a contacts set the loading = false
        return {...state, selectedContact: {contact:action.payload, error: null, loading: false}};
      case FETCH_CONTACT_FAILED: // return an error the loading = false
        return {...state, selectedContact: {contact:null, error: null, loading: false}};
      case FETCH_CONTACT_RESET: // reset everything
        return {...state, selectedContact: {contact:null, error: null, loading: false}};

      case ADD_CONTACT: // start fetching a contact set the loading = true
        return {...state, newContact: {...state.contact, error: null, loading: true}};
      case ADD_CONTACT_SUCCESS: // return a contacts set the loading = false
        return {...state, newContact: {contact:action.payload, error: null, loading: false}};
      case ADD_CONTACT_FAILED: // return an error the loading = false
        return {...state, newContact: {contact:null, error: null, loading: false}};
      case ADD_CONTACT_RESET: // reset everything
        return {...state, newContact: {contact:null, error: null, loading: false}};

        case DELETE_CONTACT: // start deleting a contact set the loading = true
        return {...state, deletedContact: {...state.contact, error: null, loading: true}};
      case DELETE_CONTACT_SUCCESS: // return the deleted contact set the loading = false
        return {...state, deletedContact: {contact:action.payload, error: null, loading: false}};
      case DELETE_CONTACT_FAILED: // return an error the loading = false
        return {...state, deletedContact: {contact:null, error: null, loading: false}};
      case DELETE_CONTACT_RESET: // reset everything
        return {...state, deletedContact: {contact:null, error: null, loading: false}};

        case UPDATE_CONTACT: // start updating contact set the loading = true
        return {...state, updatedContact: {contact:null, error: null, loading: true}};
      case UPDATE_CONTACT_SUCCESS: // loading = false
        return {...state, updatedContact: {contact:action.payload, error: null, loading: false}};
      case UPDATE_CONTACT_FAILED: // return an error the loading = false
        return {...state, updatedContact: {contact:null, error: null, loading: false}};
      case UPDATE_CONTACT_RESET: // reset everything
        return {...state, updatedContact: {contact:null, error: null, loading: false}};
    default:
        return state;
  }
}

export default contacts;