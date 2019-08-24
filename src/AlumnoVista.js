import React, { Component } from 'react';
import { connect } from 'react-redux';
import CursoForm from './CursoForm';
import AllCursos from './AllCursos';
import AlumnoForm from './AlumnoForm';
import AllAlumnos from './AllAlumnos';
import {withRouter } from "react-router-dom";
class AlumnoVista extends Component {
  render() {
    return (
      <React.Fragment>
        <AlumnoForm></AlumnoForm>
        <AllAlumnos></AllAlumnos>
      </React.Fragment>
    )
  }
}
export default withRouter(connect()(AlumnoVista));