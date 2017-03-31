import React from 'react';
import Navbar from './Navbar';

const Home = React.createClass({
  render() {
    return (
      <div className="container-fluid">
        <div className="page-header">
            <h2>React Redux Contacts</h2>
        </div>
        <Navbar />
            {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
});

export default Home;