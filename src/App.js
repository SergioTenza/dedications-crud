import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/plugins/fontawesome-free/css/all.min.css'
import './App.css';

//import Navigation from './components/Navigation';
import NavigationAdmin from './components/NavigationAdmin';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import NotesList from './components/NotesList';
import Home from './components/Home';
import BreadCrumb from './components/BreadCrumb';
import SideBarAdmin from './components/SideBarAdmin';
import MainContent from './components/MainContent';
import UserList from './components/UserList'
import MachineList from './components/MachineList'

function App() {
  return (    
    <Router>      
      <div className="wrapper">           
        <NavigationAdmin/>      
        <SideBarAdmin/>         
      </div>
      <div className="content-wrapper">          
          <Route path="/" exact component={MachineList} />
          <Route path="/edit/:id" component={CreateNote} />
          <Route path="/create" component={CreateNote} />
          <Route path="/user" component={CreateUser} />
          <Route path="/notes" component={NotesList} />
      </div>
    </Router>
  );
}

export default App;
