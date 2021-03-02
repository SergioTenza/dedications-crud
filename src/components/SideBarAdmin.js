import { Component } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios';


export default class Home extends Component {
    constructor(props) {
        super(props);       

        this.state = {
            username: 'Usuario',
            users: []
        }
    }
    componentDidMount() {        
        
    }
    getUsers(){
        const headers = {            
            'Authorization': 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMmY2YmZlNDY4ZjkxZDlkMmRiYjZkZiIsImlhdCI6MTYxNDU5NzczMCwiZXhwIjoxNjE0Njg0MTMwfQ.YA4zlmSy38ALT_mdA6OqJnsUHJGlmZh7pG6MTf4m5Fo'
          }
        axios.get('http://funphotos.es/api/users',{ 
            headers: headers})
            .then(res => {
                this.setState({users: res.data});
            })
            .catch((error) => {
                console.log(error)
            })
    }
    getUserName() {
        return <a href="/userinfo" className="d-block">{this.state.username}</a>
    }
    render() {
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">    
                <Link className="brand-link" to="/">
                    <img src="dist/img/AdminLTELogo.png" alt="Logo" className="brand-image img-circle elevation-3"/>
                    <span className="brand-text font-weight-light">Dedications</span>
                </Link>            
                <div className="sidebar">                
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User"/>
                        </div>
                        <div className="info">
                            {this.getUserName()}
                        </div>
                    </div>
                </div>
            </aside>
        )
    }
}
