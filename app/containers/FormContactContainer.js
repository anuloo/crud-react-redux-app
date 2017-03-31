import { connect } from 'react-redux';
import FormContact from '../components/FormContact';
import { addContact, addContactFulfilled, addContactRejected, addContactReset} from '../actions/actionCreators'

function mapStateToProps(state, ownProps) {
  return {
    newContact: state.contacts.newContact,
    id: ownProps.params.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (props) => {
      dispatch(addContact(props)).then((response) => {
            !response.error ? dispatch(addContactFulfilled(response.payload.data)) : dispatch(addContactRejected(response.payload.data));
          });
    },

    addContactReset: () => {
        dispatch(addContactReset());
    }
  }
}

const FormContactContainer = connect(mapStateToProps, mapDispatchToProps)(FormContact);

export default FormContactContainer;