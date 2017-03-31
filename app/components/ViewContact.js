import React, { Component } from 'react';

class  ViewContact extends Component{

  componentDidMount() {
    this.props.fetchContact(this.props.id);
    console.log('componentDidMount: id : '+ this.props.id);
  }

  render() {
    const { contact, loading, error } = this.props.selectedContact;
    if (loading) {
      return <div className="container">Loading...</div>;
    } else if(error) {
      return  <div className="alert alert-danger">{error.message}</div>
    } else if(!contact) {
      return <span />
    }

    return (
      <div className="container-fluid">
        <div className="panel panel-primary">
          <div className="panel-heading"><h4>Contact details</h4></div>
          <div className="panel-body">
            <address>
              <div className="row">
                <div className="col-xs-5 col-sm-2"><h5><strong>First name:</strong></h5></div>
                <div className="col-xs-7 col-sm-10"><h5>{contact.firstName}</h5></div>
             </div>
              <div className="row">
                <div className="col-xs-5 col-sm-2"><h5><strong>Last name:</strong></h5></div>
                <div className="col-xs-7 col-sm-10"><h5>{contact.lastName}</h5></div>
             </div>
              <div className="row">
                <div className="col-xs-5 col-sm-2"><h5><strong>Email:</strong></h5></div>
                <div className="col-xs-7 col-sm-10"><h5>{contact.email}</h5></div>
             </div>
            </address>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewContact;