import React, { Component } from 'react';
import { connect } from 'react-redux';
class NotaForm extends Component {
  
  handleSubmit= (e)=> {
    console.log("pase")
    e.preventDefault();
     
     const curso = this.getCurso.value;
     const alumno = this.getAlumno.value;
     const docente = this.getDocente.value;
     const nota = this.getNota.value;
     const data = {
      id: this.getId.value || new Date().toISOString(),
   
      editing: this.getEditing||false,
      curso,
      alumno,
      docente,
      nota
     
     }
     this.props.dispatch({
     type: this.getEditing?'UPDATE':'ADD_NOTA',
     data
     })
     
     this.getCurso.value='';
     this.getAlumno.value='';
     this.getDocente.value='';
     this.getNota.value='';
     this.getEditing=false;
    }
    componentWillUpdate  (update) {
      console.log("Updating from nota");
      update.notas.map((nota)=>{
         if(nota.editing){

          
          this.getCurso.value=nota.curso
          this.getDocente.value=nota.docente
          this.getAlumno.value=nota.alumno
          this.getNota.value=nota.nota

          this.getEditing=true;
         }
      })
    }
render() {
return (
  <React.Fragment>
  <form className="agregar" onSubmit={this.handleSubmit} >
    <div className="modal-header">						
      <h4 className="modal-title">Añadir nota</h4>
      <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
    </div>
    <div className="modal-body">	
    <input type="text" style={{display: 'none'}} defaultValue=""  ref={(input) => this.getId = input} className="form-control"  />				
      
      <div className="form-group">
        <label>Curso</label>
       <select  ref={(input) => this.getCurso = input}>
         <React.Fragment>
          {this.props.cursos.map((curso)=>{return ( <option value={curso.id}>{curso.anio}-{curso.turno}</option>)})}
          </React.Fragment>
       </select>
         </div>


      <div className="form-group">
        <label>Alumno</label>
       <select  ref={(input) => this.getAlumno = input}>
         <React.Fragment>
          {this.props.alumnos.map((alumno)=>{return ( <option value={alumno.id}>{alumno.legajo}-{alumno.legajo}</option>)})}
          </React.Fragment>
       </select>
    </div>


      <div className="form-group">
        <label>Docente</label>
       <select  ref={(input) => this.getDocente = input}>
         <React.Fragment>
          {this.props.docentes.map((docente)=>{return ( <option value={docente.id}>{docente.nombre}-{docente.materia}</option>)})}
          </React.Fragment>
       </select>



         </div>


         <div className="form-group">
        <label>Nota</label>
        <input type="text"  ref={(input) => this.getNota = input} className="form-control" required />
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
   notas: state.notaReducer,
   docentes: state.docenteReducer,
   alumnos: state.alumnoReducer,
   cursos:state.cursoReducer
  }
}
export default connect(mapStateToProps)(NotaForm);



