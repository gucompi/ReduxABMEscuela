import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponentCurso extends Component {
handleEdit (e){
  e.preventDefault();
  const newTitle = this.getTitle.value;
  const newMessage = this.getMessage.value;
  const newColor = this.getColor.value;
  const data = {
    newTitle,
    newMessage,
    newColor
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.curso.id, data: data })
}
render() {
return (
<div key={this.props.curso.id} className="post">
  <form className="form" onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.curso.title} placeholder="Enter curso Title" /><br /><br />
    <input required type="text" ref={(input) => this.getColor = input}
    defaultValue={this.props.curso.color} placeholder="Enter curso Color" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getMessage = input}
    defaultValue={this.props.curso.message} cols="28" placeholder="Enter curso" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponentCurso);