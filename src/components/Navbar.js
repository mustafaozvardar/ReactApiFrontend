import { Link } from 'react-router-dom';
import React from 'react';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
            <div className="container">
          <div style={{float:'left'}}>
            <a href="/">
            <img
            
             style={{width:200,height:100}}
              src={require(`../images/logo.png`)}
            />
            </a>
        </div>
      
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active"  to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/students">Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about-us">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact-us">Contact Us</Link>
                    </li>
                  
                    
                </ul>  
                </div>
            </div>
        </nav>
    )
}

export default Navbar;