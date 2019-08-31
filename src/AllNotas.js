import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class AllNota extends Component {
  static propTypes = {
      notas: PropTypes.object.isRequired 
  }
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
                          </div>
                      </div>
                  </div>
                  <table className="table table-striped table-hover">
                      <thead>
                          <tr>
        
                              <th>Curso</th>
                              <th>Alumno</th>
                              <th>Docente</th>
                              <th>Nota</th>
                          </tr>
                      </thead>
                      <tbody>
     
                          {this.props.notas.map((nota) => (

  
                              <tr key={nota.id}>
         
                                  <td>{nota.curso}</td>
                                  <td>{nota.alumno}</td>
                                  <td>{nota.docente}</td>
                                  <td>{nota.nota}</td>
                                  <td>
                                      <button     onClick={() => this.props.dispatch({ type: 'EDIT_NOTA', id: nota.id })} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></button>
                                      <button onClick={() => this.props.dispatch({ type: 'DELETE_NOTA', id: nota.id })} href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></button>
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
        notas: state.notaReducer
    }
}
export default connect(mapStateToProps)(AllNota);