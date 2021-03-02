import { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (  
      <div>   
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
        <section className="content">
            <div className="card">
                <div className="card-header">
                <h3 className="card-title">Title</h3>

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
                Start creating your amazing application!
                </div>                
                <div className="card-footer">
                Footer
                </div>
            </div>
        </section>
      </div>
    );
  }
}
