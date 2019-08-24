import React, { Component } from 'react';
import { connect } from 'react-redux';
class Nota extends Component {
render() {
return (
<div className="post">
  <h2 className="post_title">{this.props.nota.materia}</h2>
  <p className="post_message">{this.props.nota.nota}</p>
  <p className="post_message">{this.props.nota.observacion}</p>
  <div className="control-buttons">
    <button className="edit"
    onClick={() => this.props.dispatch({ type: 'EDIT_NOTA', id: this.props.nota.id })
    }
    >Edit</button>
    <button className="delete"
    onClick={() => this.props.dispatch({ type: 'DELETE_NOTA', id: this.props.nota.id })}
    >Delete</button>
  </div>
</div>
);
}
}
export default connect()(Nota);