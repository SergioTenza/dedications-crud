import { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const User = props => (
  <tr>
      <td>{props.user._id}</td>
      <td>{props.user.username}</td>
      <td>{props.user.email}</td>
      <td>{props.user.roles}</td>
      <td>
          <Link className="btn btn-success" to={"/edit/"+props.user._id}>editar</Link><Link className="btn btn-danger" to={"/delete/"+props.user._id}>eliminar</Link>
      </td>
  </tr>
)

export default class UserList extends Component {
  constructor(props) {
    super(props);       

    this.state = {
        users: []
    }
  }
  componentDidMount() {   
    this.getUsers()
  }
  getUsers() {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMWM1YzVhMjRlZjc2MGYxODAyMGIxYyIsImlhdCI6MTYxNDYwODU1OSwiZXhwIjoxNjE0Njk0OTU5fQ.gJ4Z46VSfYA6ldWxbIfudu9q8AkOXBT9u-pMkfzLH0c';
    axios.get('http://localhost:5001/api/users',{
      headers: {                
        'x-access-token': token
      }
    })
    .then(res => {
        this.setState({users: res.data});
    })
    .catch((error) => {
        console.log(error)
        const users = [{
          id:'000',
          username: 'sergio',
          email: 'prueba@gmail.com',
          role: 'admin'
        },
        {
          id:'001',
          username: 'curro',
          email: 'prueba@gmail.com',
          role: 'customer'
        }      
      ]
      this.setState({
        users: users
      })      
    })
  }
  userList() {
    return this.state.users.map(currentuser => {
        return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
    })
  }
  render() {
    return (    
      <div>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Listar usuarios</h1>
              </div>
              <div className="col-sm-6">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Link to="/">Comenzar</Link></li>
                    <li className="breadcrumb-item active"><Link to="/">Listar Usuarios</Link></li>
                  </ol>
                </nav>           
              </div>
            </div>
          </div>
        </section>  
        <section className="content">
            <div className="card">
                <div className="card-header">
                <h3 className="card-title">Listado de Usuarios</h3>

                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i className="fas fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                    <i className="fas fa-times"></i>
                    </button>
                </div>
                </div>
                <div className="card-body">
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          <th>ID</th>
                          <th><i className="bi bi-person-bounding-box fs-3"></i></th>
                          <th><i className="bi bi-envelope fs-3"></i></th>
                          <th>Roles</th>
                          <th><i className="bi bi-pencil-square fs-3"></i></th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.userList()}
                      </tbody>
                    </table>
                </div>                
                <div className="card-footer">
                  Listado de Usuarios                
                </div>
            </div>
        </section>
      </div>
    );
  }
}
