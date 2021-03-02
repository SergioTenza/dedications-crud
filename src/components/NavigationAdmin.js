import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NavigationAdmin extends Component {
    render() {
        return (
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="/" role="button"><i className="fas fa-bars"></i></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="/" className="nav-link">Contact</a>
                    </li>
                </ul>                      
            </nav>                       
        )
    }
}
