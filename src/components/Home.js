import { Component } from "react";
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6"> 
                        <div className="text-center">
                            <img src="./logo.png" alt="corporate_logo" height="auto" className="rounded"/> 
                            <div className="card mt-4">
                                <div className="card-body">
                                    <h4 className="card-title">El repaso divertido</h4>
                                    <p className="card-text">Empieza hoy mismo a convertir tus clases en diversion</p>
                                </div>
                                <div className="card-footer">
                                    <Link className="btn btn-primary" to="/create">
                                            Comenzar
                                    </Link>
                                </div>
                            </div>                                             
                        </div>                       
                    </div>
                    <div className="col-6">
                        <div className="container">
                            <img src="./logo.png" height="600" className="rounded" alt="kids_playing"></img>
                        </div>                            
                    </div>
                </div>
            </div>
        )
    }
}
