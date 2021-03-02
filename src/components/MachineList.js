import { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Machine = props => (
  <tr>
      <td>{props.machine._id}</td>
      <td>{props.machine.name}</td>
      <td>{props.machine.location}</td>
      <td>{props.machine.user}</td>
      <td>
        <select
          className="form-select"
          name="userSelected" 
          onChange=""                     
          >
            {
              props.machine.tasks.map(machine =>
              <option key={machine.type} value={machine.type}>
                  {machine}
              </option>)
            }
        </select>        
      </td>
      <td>
        <div class="form-check form-switch">            
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={this.checkedChange()} checked/>
            <label class="form-check-label" for="flexSwitchCheckChecked">Apagar/Encender</label>
        </div>
      </td>
      <td>
          <Link className="btn btn-primary" to={"/edit/"+props.machine._id}>editar</Link><Link className="btn btn-danger" to={"/delete/"+props.machine._id}>eliminar</Link>          
      </td>
  </tr>
)

export default class MachineList extends Component {
  constructor(props) {
    super(props);       

    this.state = {
      machines: []
    }
  }
  componentDidMount() {   
    this.getMachines()
  }  
  getMachines() {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMWM1YzVhMjRlZjc2MGYxODAyMGIxYyIsImlhdCI6MTYxNDYwODU1OSwiZXhwIjoxNjE0Njk0OTU5fQ.gJ4Z46VSfYA6ldWxbIfudu9q8AkOXBT9u-pMkfzLH0c';
    axios.get('http://localhost:5001/api/machine',{
      headers: {                
        'x-access-token': token
      }
    })
    .then(res => {
        this.setState({machines: res.data});
    })
    .catch((error) => {
        console.log(error)
        const machines = [{
          _id:'000',
          name: 'Dedications001',
          location: 'MontePinar',
          user: 'Pepe',
          tasks:[1,2,3,4,5],
          status: 'online'
        },
        {
          _id:'010',
          name: 'Dedications002',
          location: 'Merida',
          user: 'Paco',
          tasks:[1,2,3,4,5],
          status: 'offline'
        }      
      ]
      this.setState({
        machines: machines
      })      
    })
  }
  machinesList() {
    return this.state.machines.map(currentmachine => {
        return <Machine machine={currentmachine} deleteMachine={this.deleteMachine} key={currentmachine._id}/>;
    })
  }

  checkedChange() {

  }
  render() {
    return (    
      <div>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Listar maquinas</h1>
              </div>
              <div className="col-sm-6">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Link to="/">Comenzar</Link></li>
                    <li className="breadcrumb-item active"><Link to="/">Listar Maquinas</Link></li>
                  </ol>
                </nav>           
              </div>
            </div>
          </div>
        </section>  
        <section className="content">
            <div className="card">
                <div className="card-header">
                <h3 className="card-title">Listado de Maquinas</h3>

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
                          <th>Nombre</th>
                          <th>Ubicacion</th>
                          <th>Usuario</th>
                          <th>Tareas</th>
                          <th>Status</th>
                          <th>Gestionar</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.machinesList()}
                      </tbody>
                    </table>
                </div>                
                <div className="card-footer">
                  Listado de Maquinas                
                </div>
            </div>
        </section>
      </div>
    );
  }
}
