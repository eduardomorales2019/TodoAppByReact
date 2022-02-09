import React, { Component } from "react";
import "../styles/todo.css";
//! HERE WE CRETE ALL TODO, SO EACH ONE IS GONNA  INCREASE A  NUMBER  AND IT MUST CREATE AND ID.

//?  to to tge editing componene we must use a condition in the result.  so we have to the a state  : false " and play with it in the render"
class TodoComponent extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.update);

    this.state = { isEditing: false, task: this.props.task };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.isToggling = this.isToggling.bind(this);
    this.handleToogleCompleted = this.handleToogleCompleted.bind(this);
  }

  // ==================
  handleRemove = () => {
    this.props.remove(this.props.id); // TO GET ACCEss TO THE ID, WE MUST PASS IT  ,AS AND ID AS WELL.  and the way to pass it is as a prop.
  };

  // when  the button is push,  is reacting with the conditional in the render  that we use in the state..
  isToggling = () => {
    this.setState({ isEditing: !this.isEditing });
  };

  // in this method we need  id and  updatedtask.. WE ARE ATACCHING ALL PROPERTY  CREATED  BY THE PROPS

  // ! here  i take  new task data and pass up to the parent. so  i have to create a method and use down here after the preventdefault.
  handleUpdateSubmit = (event) => {
    event.preventDefault();
    console.log("hola");
    this.props.update(this.props.id, this.props.task);
    this.setState({ isEditing: false }); // para salir del  editing mode.. and got save!!!
  };

  //! this method is for take all the values from input.
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleToogleCompleted = () => {
    console.log("push");
    this.props.toggleconfirmedTask(this.props.id); // pasar el id sino no funciona !
  };

  //  ========================== use a variable to set the  manipulate the editing mode if is editiinf if flase:
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdateSubmit}>
            <input
              type="text"
              name="task"
              value={this.state.task} // aqui tengo la duda!!! siempre di
              onChange={this.handleChange} // valor al meter info
            ></input>
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.isToggling}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          {/* rendeting class with conditional */}
          <li
            className={this.props.completed ? "completed" : ""}
            onClick={this.handleToogleCompleted}
          >
            {this.props.task}{" "}
          </li>
        </div>
      );
    }
    return result;
  }
}

export default TodoComponent;
