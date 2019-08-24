import React, { Component } from 'react';


import { BrowserRouter as Router, Route, Switch , Link ,withRouter } from "react-router-dom";
import CursoVista from './CursoVista';
import AlumnoVista from './AlumnoVista';
import DocenteVista from './DocenteVista';
import NotaVista from './NotaVista';

class App extends Component {
render() {
return (
<div className="App">
 
<Router>
<nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#">Colegio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to="/alumnos" className="nav-link">Lista de alumnos</Link>
            </li>
            <li className="nav-item">
              <Link  to="/cursos" className="nav-link">Lista de cursos</Link>
            </li>
            <li className="nav-item ">
              <Link to="/docentes" className="nav-link">Lista de Docentes</Link>
            </li>
            <li className="nav-item">
              <Link to="/notas" className="nav-link">Notas</Link>
            </li>
          </ul>
          
        </div>
      </nav>

        <Switch>
          <Route exact path="/" component={CursoVista} />
          <Route  path="/alumnos" component={AlumnoVista} />
          <Route  path="/docentes" component={DocenteVista} />
          <Route  path="/notas" component={NotaVista} />
          </Switch>
      </Router>
  
</div>
);
}
}
export default App;