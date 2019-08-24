import React, { Component } from 'react';
import { connect } from 'react-redux';
class Curso extends Component {
render() {
return (
<div className="post">
  <h2 className="post_title">{this.props.curso.anio}</h2>
  <p className="post_message">{this.props.curso.turno}</p>
  <div className="control-buttons">
    <button className="edit"
    onClick={() => this.props.dispatch({ type: 'EDIT_CURSO', id: this.props.curso.id })
    }
    >Edit</button>
    <button className="delete"
    onClick={() => this.props.dispatch({ type: 'DELETE_CURSO', id: this.props.curso.id })}
    >Delete</button>
  </div>
</div>
);
}
}
export default connect()(Curso);