import React, { Component } from 'react';
import { connect } from 'react-redux';
class AllDocente extends Component {
render() {
return (
  <div className="container">
  <div className="table-wrapper">
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2> <b>Docentes</b></h2>
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
          <th>Cursos</th>
          <th>Materia</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
     
  {this.props.docentes.map((docente) => (

  
        <tr>
          <td>
            <span className="custom-checkbox">
              <input type="checkbox" id="checkbox1" name="options[]" defaultValue={1} />
              <label htmlFor="checkbox1" />
            </span>
          </td>
          <td>{docente.nombre}</td>
          <td>{docente.email}</td>
          <td>{docente.direccion}</td>
          <td>{docente.telefono}</td>
          <td>{docente.legajo}</td>
          <td>{docente.curso}</td>
          <td>{docente.materia}</td>
          <td>
            <button     onClick={() => this.props.dispatch({ type: 'EDIT_DOCENTE', id: docente.id })} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></button>
            <button onClick={() => this.props.dispatch({ type: 'DELETE_DOCENTE', id: docente.id })} href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></button>
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
   docentes: state.docenteReducer
  }
}
export default connect(mapStateToProps)(AllDocente);