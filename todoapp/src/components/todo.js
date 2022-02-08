import React, { Component } from "react";

//! HERE WE CRETE ALL TODO, SO EACH ONE IS GONNA  INCREASE A  NUMBER  AND IT MUST CREATE AND ID.

//?  to to tge editing componene we must use a condition in the result.  so we have to the a state  : false " and play with it in the render"
class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
    this.handleRemove = this.handleRemove.bind(this);
    this.isT = this.isToggling.bind(this);
  }

  // ==================
  handleRemove = () => {
    this.props.remove(this.props.id); // TO GET ACCEss TO THE ID, WE MUST PASS IT  ,AS AND ID AS WELL.  and the way to pass it is as a prop.
  };

  // when  the button is push,  is reacting with the conditional in the render  that we use in the state..
  isToggling = () => {
    this.setState({ isEditing: !this.isEditing });
  };
  // ! here  i take  new task data and pass up to the parent.
  handleUpdateSubmit = (event) => {
    event.preventDefault();
  };

  //  ========================== use a variable to set the  manipulate the editing mode if is editiinf if flase:
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdateSubmit}>
            <input type="text"></input>
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.isToggling}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li>{this.props.task} </li>
        </div>
      );
    }
    return result;
  }
}

export default TodoComponent;
