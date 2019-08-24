import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponentNota extends Component {
handleEdit =(e)=>{
  e.preventDefault();
  const newMataria = this.getMateria.value;
  const newNota = this.getNota.value;
  const newObservacion = this.getObservacion.value;
  const data = {
    newMataria,
    newNota,
    newObservacion
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.nota.id, data: data })
}
render() {
return (
<div key={this.props.nota.id} className="post">
  <form className="form" onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getMateria = input}
    defaultValue={this.props.nota.materia} placeholder="Enter Materia" /><br /><br />
    <input required type="text" ref={(input) => this.getNota = input}
    defaultValue={this.props.nota.nota} placeholder="Enter Nota" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getObservacion = input}
    defaultValue={this.props.nota.observacion} cols="28" placeholder="Enter Observacion" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponentNota);