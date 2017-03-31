import React from 'react';
import { Link } from 'react-router';

const NavBar = React.createClass({ 
  render: function(){
    return(
    <div className="container-fluid">
        <nav className="navbar navbar-inverse bg-primary">
            <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    </div>
    );
  }
});

export default NavBar;
