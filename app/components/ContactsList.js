import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class ContactsList extends Component {
  constructor(props){
    super(props)
  }
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchContacts();
    this.props.resetAllState();
  }

  handleViewClick(id, e){
    this.context.router.push(`/contacts/view/${id}`);
  }

  handleDeleteClick(id, e){
    this.props.deleteContact(id);
    this.props.fetchContacts(); 
  }

  handleEditClick(id, e){
    this.context.router.push(`/contacts/addedit/${id}`);
  }

  renderContacts(contacts) {
    return contacts.map((contact) => { 
      return (
        <li className="list-group-item" key={contact.id}>
            <div className="row">
                <div className="col-xs-3 col-sm-2"><h6>{contact.firstName}</h6></div>
                <div className="col-xs-3 col-sm-1"><button onClick={this.handleViewClick.bind(this, contact.id)} type="button" className="btn btn-primary">View</button></div>
                <div className="col-xs-3 col-sm-1"><button onClick={this.handleEditClick.bind(this, contact.id)} type="button" className="btn btn-warning">Edit</button></div>
                <div className="col-xs-3 col-sm-8"><button onClick={this.handleDeleteClick.bind(this, contact.id)} type="button" className="btn btn-danger">Delete</button></div>
             </div>
         
        </li>
      );
    });
  }

  render() {
    const { contacts, loading, error } = this.props.contacts;

    if(loading) {
      return <div className="container"><h1>Posts</h1><h3>Loading...</h3></div>      
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return (
      <div className="container-fluid">
        <div className="subheader">
          <h3>Contacts</h3>
            <span className="pull-right"><Link to="/contacts/addedit">Add new</Link></span>
        </div>
        <ul className="list-group clear-fix">
          {this.renderContacts(contacts)}
        </ul>
      </div>
    );
  }
}


export default ContactsList;