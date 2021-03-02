import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">                           
                <Link className="navbar-brand" to="/">                 
                  <img src="/logo192.png" alt="" width="30" height="30"></img>
                </Link>                
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link className="navbar-brand" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="navbar-brand" to="/notes">
                        Home(notas)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="navbar-brand" to="/create">
                        Inspeccion(crear notas)
                      </Link>
                    </li>  
                    <li className="nav-item">
                      <Link className="navbar-brand" to="/user">
                        Usuario(crear usuario)
                      </Link>
                    </li>                                      
                  </ul>
                </div>
              </div>           
          </nav>
        );
    }
}
