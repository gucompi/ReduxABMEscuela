import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllAlumno extends Component {
render() {
return (
  <div className="container">
  <div className="table-wrapper">
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2> <b>Alumnos</b></h2>
        </div>
        
      </div>
    </div>
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          
          <th>Nombre</th>
          <th>Email</th>
          <th>Domicilio</th>
          <th>Telefono</th>
          <th>Legajo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
     
  {this.props.alumnos.map((alumno) => (

  
        <tr>
          <td>
            <span className="custom-checkbox">
              <input type="checkbox" id="checkbox1" name="options[]" defaultValue={1} />
              <label htmlFor="checkbox1" />
            </span>
          </td>
          <td>{alumno.nombre}</td>
          <td>{alumno.email}</td>
          <td>{alumno.direccion}</td>
          <td>{alumno.telefono}</td>
          <td>{alumno.legajo}</td>
          <td>{alumno.curso.desc}</td>
          <td>
            <button     onClick={() => this.props.dispatch({ type: 'EDIT_ALUMNO', id: alumno.id })} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></button>
            <button onClick={() => this.props.dispatch({ type: 'DELETE_ALUMNO', id: alumno.id })} href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></button>
          </td>
        </tr>

        ))}

      </tbody>
    </table>
    
  </div>
</div>

);
}
}

const mapStateToProps = (state) => {
  return {
   alumnos: state.alumnoReducer
  }
}
export default connect(mapStateToProps)(AllAlumno);