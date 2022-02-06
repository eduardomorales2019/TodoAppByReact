import React, { Component } from "react";

class TodoComponent extends Component {
  render() {
    return (
      <div>
        <button>Edit</button>
        <button>X</button>
        <li>{this.props.task} </li>
        <li> </li>
      </div>
    );
  }
}

export default TodoComponent;
