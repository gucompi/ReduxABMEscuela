import React, { Component } from 'react';
import { connect } from 'react-redux';
class Alumno extends Component {
render() {
return (
<div className="post">
  <h2 className="post_title">{this.props.alumno.title}</h2>
  <p className="post_message">{this.props.alumno.color}</p>
  <div className="control-buttons">
    <button className="edit"
    onClick={() => this.props.dispatch({ type: 'EDIT_ALUMNO', id: this.props.alumno.id })
    }
    >Edit</button>
    <button className="delete"
    onClick={() => this.props.dispatch({ type: 'DELETE_ALUMNO', id: this.props.alumno.id })}
    >Delete</button>
  </div>
</div>
);
}
}
export default connect()(Alumno);