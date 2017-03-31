import { connect } from 'react-redux';
import ViewContact from '../components/ViewContact';
/*import { fetchContact, fetchContactFulfilled, fetchContactRejected } from '../actions/actionCreators'

function mapStateToProps(state, ownProps) {
console.log('----mapStateToProps'+ ownProps.params.id);
  return {
    contact: state.contacts.selectedContact,
    id: ownProps.params.id
  }
}*/

/*const mapDispatchToProps = (dispatch) => {
  return {
    fetchContact: (id) => {
      dispatch(fetchContact(id)).then((response) => {
            !response.error ? dispatch(fetchContactFulfilled(response.payload.data)) : dispatch(fetchContactRejected(response.payload.data));
          });
    }
  }
}*/

const ViewContactContainer = connect()(ViewContact);

export default ViewContactContainer;