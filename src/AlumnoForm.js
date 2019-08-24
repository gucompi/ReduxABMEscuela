import React, { Component } from 'react';
import { connect } from 'react-redux';
class AlumnoForm extends Component {
  handleSubmit= (e)=> {
    
    e.preventDefault();
     const nombre = this.getNombre.value;
     const email = this.getEmail.value;
     const direccion = this.getDireccion.value;
     const telefono = this.getTelefono.value;
     const legajo = this.getLegajo.value;
     const curso = {id:this.getCurso.value,desc:this.getCurso.textContent};
     const data = {
      id: this.getId.value || new Date().toISOString(),
      nombre,
      email,
      direccion,
      telefono,
      legajo,
      editing: this.getEditing||false,
      curso
     }
     this.props.dispatch({
     type: this.getEditing?'UPDATE':'ADD_ALUMNO',
     data
     })
     
     this.getId.value='';
     this.getNombre.value='';
     this.getEmail.value='';
     this.getDireccion.value='';
     this.getTelefono.value='';
     this.getLegajo.value='';
     this.getCurso.value='';
     this.getEditing=false;
    }
    componentWillUpdate  (update) {
      
      update.alumnos.map((alumno)=>{
         if(alumno.editing){

          this.getId.value=alumno.id
          this.getNombre.value=alumno.nombre
          this.getEmail.value=alumno.email
          this.getDireccion.value=alumno.direccion
          this.getTelefono.value=alumno.telefono
          this.getLegajo.value=alumno.legajo
          this.getCurso.value=alumno.curso
          this.getEditing=true;
         }
      })
    }
render() {
return (
  <React.Fragment>
  <form className="agregar" onSubmit={this.handleSubmit} >
    <div className="modal-header">						
      <h4 className="modal-title">Añadir alumno</h4>
      
    </div>
    <div className="modal-body">	
    <input type="text" style={{display: 'none'}} defaultValue=""  ref={(input) => this.getId = input} className="form-control"  />				
      <div className="form-group">
          <label>Nombre</label>
          <input type="text" ref={(input) => this.getNombre = input}  className="form-control" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" ref={(input) => this.getEmail = input} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Dirección</label>
          <textarea className="form-control" ref={(input) => this.getDireccion = input}  required defaultValue={""} />
        </div>
        <div className="form-group">
          <label>Teléfono</label>
          <input type="text" className="form-control" ref={(input) => this.getTelefono = input}  required />
        </div>	
        <div className="form-group">
          <label>Legajo</label>
          <input type="text" ref={(input) => this.getLegajo = input}  className="form-control" required />
        </div>
      <div className="form-group">
        <label>Curso</label>
       <select  ref={(input) => this.getCurso = input}>
         <React.Fragment>
          {this.props.cursos.map((curso)=>{return ( <option value={curso.id}>{curso.anio}-{curso.turno}</option>)})}
          </React.Fragment>
       </select>
      </div>
    </div>
      
    <div className="modal-footer">
      
      <input type="submit" className="btn btn-success" defaultValue="Añadir" />
    </div>
  </form> 
        </React.Fragment>

);
}
}

const mapStateToProps = (state) => {
  return {
   alumnos: state.alumnoReducer,
   cursos:state.cursoReducer
  }
}
export default connect(mapStateToProps)(AlumnoForm);



