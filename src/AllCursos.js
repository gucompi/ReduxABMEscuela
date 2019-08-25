import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllCurso extends Component {
render() {
return (
  <div className="container">
  <div className="table-wrapper">
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2> <b>Cursos</b></h2>
        </div>
        
      </div>
    </div>
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          
          <th>Nombre</th>
          <th>Turno</th>
        </tr>
      </thead>
      <tbody>
     
  {this.props.cursos.map((curso) => (

  
        <tr>
          
          <td>{curso.anio}</td>
          <td>{curso.turno}</td>
          <td>
            <button     onClick={() => this.props.dispatch({ type: 'EDIT_CURSO', id: curso.id })} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></button>
            <button onClick={() => this.props.dispatch({ type: 'DELETE_CURSO', id: curso.id })} href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></button>
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
   cursos: state.cursoReducer
  }
}
export default connect(mapStateToProps)(AllCurso);