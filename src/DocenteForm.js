import React, { Component } from 'react';
import { connect } from 'react-redux';
class DocenteForm extends Component {
  constructor(){
    super();
    this.state={
      cursosDocente:[]
    }
  }
  handleClick=(event)=> {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if (this.state.cursosDocente.indexOf(target.id)!=-1){
        
      this.setState({
        "cursosDocente":this.state.cursosDocente.filter((value)=>{return value!=target.id})
      });

    }else{
      this.setState({
        "cursosDocente": [...this.state.cursosDocente,target.id]
      });
    }

  }
  handleSubmit= (e)=> {
    
    e.preventDefault();
     const nombre = this.getNombre.value;
     const email = this.getEmail.value;
     const direccion = this.getDireccion.value;
     const telefono = this.getTelefono.value;
     const legajo = this.getLegajo.value;
     const curso = this.state.cursosDocente;
     const materia = this.getMateria.value;
     const data = {
      id: this.getId.value || new Date().toISOString(),
      nombre,
      email,
      direccion,
      telefono,
      legajo,
      editing: this.getEditing||false,
      curso,
      materia
     }
     this.props.dispatch({
     type: this.getEditing?'UPDATE':'ADD_DOCENTE',
     data
     })
     
     this.getId.value='';
     this.getNombre.value='';
     this.getEmail.value='';
     this.getDireccion.value='';
     this.getTelefono.value='';
     this.getLegajo.value='';
     this.getCurso.value='';
     this.getMateria.value='';
     this.getEditing=false;
    }
    componentWillUpdate  (update) {
      
      update.docentes.map((docente)=>{
         if(docente.editing){

          this.getId.value=docente.id
          this.getNombre.value=docente.nombre
          this.getEmail.value=docente.email
          this.getDireccion.value=docente.direccion
          this.getTelefono.value=docente.telefono
          this.getLegajo.value=docente.legajo
          this.getCurso.value=docente.curso
          this.getMateria.value=docente.materia
          this.getEditing=true;
         }
      })
    }
render() {
return (
  <React.Fragment>
  <form className="agregar" onSubmit={this.handleSubmit} >
    <div className="modal-header">						
      <h4 className="modal-title">Añadir docente</h4>
      
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
          <label>Materia</label>
          <input type="text" ref={(input) => this.getMateria = input}  className="form-control" required />
        </div>
      <div className="form-group">
        <label>Curso</label>
      
       {this.props.cursos.map((curso)=>{return ( <div className="form-check" id={curso.id} onClick={this.handleClick}> <input type="checkbox" className="form-check" checked={this.state.cursosDocente.indexOf(curso.id)!=-1} value={curso.id} id={curso.id}></input> <label id={curso.id} className="form-check" htmlFor={curso.id}>{curso.anio}-{curso.turno}</label></div>)})}
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
   docentes: state.docenteReducer,
   cursos:state.cursoReducer
  }
}
export default connect(mapStateToProps)(DocenteForm);



