import { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (      
      <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Blank Page</h1>
          </div>
          <div className="col-sm-6">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/">Comenzar</Link></li>
                <li className="breadcrumb-item active"><Link to="/">Blank Page</Link></li>
              </ol>
            </nav>           
          </div>
        </div>
      </div>
    </section>    
    );
  }
}
