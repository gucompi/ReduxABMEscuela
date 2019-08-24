import React, { Component } from 'react';
import { connect } from 'react-redux';
class CursoForm extends Component {
  handleSubmit= (e)=> {
    e.preventDefault();
     const anio = this.getAnio.value;
     const turno = this.getTurno.value;
     const data = {
      id: this.getId.value || new Date().toISOString(),
      anio,
      turno,
      editing: this.getEditing||false
     }
     this.props.dispatch({
     type: this.getEditing?'UPDATE':'ADD_CURSO',
     data
     })
     this.getId.value='';
     this.getAnio.value = '';
     this.getTurno.value = '';
     this.getEditing=false;

    }
    componentWillUpdate  (update) {
      update.cursos.map((curso)=>{
         if(curso.editing){
           this.getId.value=curso.id;
          this.getAnio.value=curso.anio; 
          this.getTurno.value=curso.turno; 
          this.getEditing=true;
         }
      })
    }
render() {
return (
  <React.Fragment>
  <form className="agregar" onSubmit={this.handleSubmit} >
    <div className="modal-header">						
      <h4 className="modal-title">Añadir curso</h4>
      
    </div>
    <div className="modal-body">	
    <input type="text" style={{display: 'none'}} defaultValue=""  ref={(input) => this.getId = input} className="form-control"  />				
      <div className="form-group">
        <label>Año</label>
        <input type="text"  ref={(input) => this.getAnio = input} className="form-control" required />
      </div>
      <div className="form-group">
        <label>Turno</label>
        <input type="text" ref={(input) => this.getTurno = input} className="form-control" required />
      </div>
    </div>
    <div className="modal-footer">
      <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancelar" />
      <input type="submit" className="btn btn-success" defaultValue="Añadir" />
    </div>
  </form> 
        </React.Fragment>

);
}
}

const mapStateToProps = (state) => {
  return {
   cursos: state.cursoReducer
  }
}
export default connect(mapStateToProps)(CursoForm);