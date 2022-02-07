import React, { Component } from "react";

//! HERE WE CRETE ALL TODO, SO EACH ONE IS GONNA  INCREASE A  NUMBER  AND IT MUST CREATE AND ID.
class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  // ==================
  handleRemove = () => {
    this.props.remove(this.props.id); // TO GET ACCEDD TO THE ID, WE MUST PASS IT  ,AS AND ID AS WELL.  and the way to pass it is as a prop.
  };

  //  ==========================
  render() {
    return (
      <div>
        <button>Edit</button>
        <button onClick={this.handleRemove}>X</button>
        <li>{this.props.task} </li>
      </div>
    );
  }
}

export default TodoComponent;
