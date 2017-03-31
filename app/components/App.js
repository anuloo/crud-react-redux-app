import { connect } from 'react-redux';
import Home from './Home';
import { fetchContacts, fetchContactsFulfilled, fetchContactsRejected, fetchContactsReset,
          deleteContact, deleteContactFulfilled, deleteContactRejected, deleteContactReset,
          fetchContact, fetchContactFulfilled, fetchContactRejected, fetchContactReset,
          updateContact, updateContactFulfilled, updateContactRejected, updateContactReset} from '../actions/actionCreators'

function mapStateToProps(state, ownProps) {
  return {
    contacts: state.contacts.contactsList,
    selectedContact: state.contacts.selectedContact,
    id: ownProps.params.id,
    deletedContact: state.contacts.deletedContact,
    updatedContact: state.contacts.updatedContact
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: () => {
      dispatch(fetchContacts()).then((response) => {
            !response.error ? dispatch(fetchContactsFulfilled(response.payload.data)) : dispatch(fetchContactsRejected(response.payload));
          });
    },
    deleteContact: (id) => {
      dispatch(deleteContact(id)).then((response) => {
            !response.error ? dispatch(deleteContactFulfilled(response.payload.data)) : dispatch(deleteContactRejected(response.payload));
          });
    },
    fetchContact: (id) => {
      dispatch(fetchContact(id)).then((response) => {
            !response.error ? dispatch(fetchContactFulfilled(response.payload.data)) : dispatch(fetchContactRejected(response.payload.data));
          });
    },
    updateContact: (id, props) => {
      dispatch(updateContact(id, props)).then((response) => {
            !response.error ? dispatch(updateContactFulfilled(response.payload.data)) : dispatch(updateContactRejected(response.payload.data));
          });
    },
    resetAllState: () => {
       dispatch(updateContactReset());
       dispatch(deleteContactReset());
       dispatch(fetchContactReset());
    },
    fetchContactsReset: () => {
       dispatch(fetchContactsReset())
    }
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Home);

export default App;