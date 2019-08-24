import React, { Component } from 'react';
import { connect } from 'react-redux';
class AllNota extends Component {
render() {
return (
  <div className="container">
  <div className="table-wrapper">
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2> <b>Notas</b></h2>
        </div>
        <div className="col-sm-6">
          <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons"></i> <span>Agregar nota</span></a>
          <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Eliminar</span></a>						
        </div>
      </div>
    </div>
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>
            <span className="custom-checkbox">
              <input type="checkbox" id="selectAll" />
              <label htmlFor="selectAll" />
            </span>
          </th>
          <th>Curso</th>
          <th>Alumno</th>
          <th>Docente</th>
        </tr>
      </thead>
      <tbody>
     
  {this.props.notas.map((nota) => (

  
        <tr>
          <td>
            <span className="custom-checkbox">
              <input type="checkbox" id="checkbox1" name="options[]" defaultValue={1} />
              <label htmlFor="checkbox1" />
            </span>
          </td>
          <td>{nota.curso}</td>
          <td>{nota.alumno}</td>
          <td>{nota.docente}</td>
          <td>
            <button     onClick={() => this.props.dispatch({ type: 'EDIT_NOTA', id: nota.id })} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></button>
            <button onClick={() => this.props.dispatch({ type: 'DELETE_NOTA', id: nota.id })} href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></button>
          </td>
        </tr>

        ))}

      </tbody>
    </table>
    <div className="numerodepaginas clearfix">
      <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
      <ul className="pagination">
        <li className="page-item disabled"><a href="#">Previous</a></li>
        <li className="page-item"><a href="#" className="page-link">1</a></li>
        <li className="page-item"><a href="#" className="page-link">2</a></li>
        <li className="page-item active"><a href="#" className="page-link">3</a></li>
        <li className="page-item"><a href="#" className="page-link">4</a></li>
        <li className="page-item"><a href="#" className="page-link">5</a></li>
        <li className="page-item"><a href="#" className="page-link">Next</a></li>
      </ul>
    </div>
  </div>
</div>

);
}
}

const mapStateToProps = (state) => {
  return {
   notas: state.notaReducer
  }
}
export default connect(mapStateToProps)(AllNota);