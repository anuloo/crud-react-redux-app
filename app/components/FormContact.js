import React, { Component, PropTypes } from 'react';


class  FormContact extends Component{
    constructor(props){
        super(props);
        this.updateFlag = false;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
     if(this.props.id){
         this.props.fetchContact(this.props.id);
     }
  }

  componentWillMount(){
    this.props.fetchContactsReset();
    
  }

  componentWillReceiveProps(nextProps) {
    if(this.updateFlag){
        this.context.router.push('/');
        this.updateFlag = false;
    }
    
  }

  handleSubmit(e) {
    e.preventDefault();
    
   if (this.firstname.value || !this.firstname.value.trim() === '') {

        let newContact = {};
        newContact.firstName = this.firstname.value;
        newContact.lastName = this.lastname.value;
        newContact.email = this.email.value;
        if(this.props.id){
            this.props.updateContact(this.props.id, newContact);
        }else{
            this.props.addContact(newContact);
        }
        this.updateFlag = true;
        this.contactForm.reset();  
    }
  
  }
  
  render() {
        const { contact, loading, error ,updated} = this.props.selectedContact;
        if (loading && this.props.id) {
        return <div className="container">Loading...</div>;
        } else if(error) {
        return  <div className="alert alert-danger">{error.message}</div>
        } else if(!contact && this.props.id) {
        return <span />
        }

    return (
      <div className="container-fluid">
        <div className="panel panel-primary">
          <div className="panel-heading"><h4>{this.props.id?'Edit contact':'Add new contact'}</h4></div>
          <div className="panel-body">
            <form ref={(form) => this.contactForm = form} className="contact-form form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="inputFirstname" className="col-sm-2 control-label">First name</label>
                    <div className="col-sm-10">
                        <input type="text" defaultValue={this.props.id?contact.firstName:''} className="form-control" id="inputFirstname" ref={(input) => this.firstname = input} placeholder="First name"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputLastname" className="col-sm-2 control-label">Last name</label>
                    <div className="col-sm-10">
                        <input type="text" defaultValue={this.props.id?contact.lastName:''} className="form-control" id="inputLastname" ref={(input) => this.lastname = input} placeholder="Last name"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" defaultValue={this.props.id?contact.email:''} className="form-control" id="inputEmail" ref={(input) => this.email = input} placeholder="Email"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" value="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormContact;