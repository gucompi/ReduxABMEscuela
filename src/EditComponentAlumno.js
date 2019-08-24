import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponentAlumno extends Component {
handleEdit(e) {
  e.preventDefault();
  const newTitle = this.getTitle.value;
  const newColor = this.getColor.value;
  const data = {
    newTitle,
    newColor
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.alumno.id, data: data })
}
render() {
return (
<div key={this.props.alumno.id} className="post">
  <form className="form" onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.alumno.title} placeholder="Enter alumno Title" /><br /><br />
    <input required type="text" ref={(input) => this.getColor = input}
    defaultValue={this.props.alumno.color} placeholder="Enter alumno Color" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponentAlumno);