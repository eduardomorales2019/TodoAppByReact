import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "..//styles/newTodForm.css";
// =============
class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // always use a function when we use a  onChange. and we have to bind it!!!
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }); //
  };
  // =====================
  //! to add a toDo , we have to create a method in the todoList and we have to pass this.state que es el task because this the one we care about. and then we have to set  the state to 0 after we got the state.  with the Todo create method
  // =====================
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createToDo({ ...this.state, id: uuidv4(), completed: false }); // agregar como Objeto

    this.setState({ task: "" });
    // console.log(this.state.task); // aqui veo el tasks
  };

  //! ONSUBMIT ALWAYS ON **********FORM************!!!!!!!!!!!!!
  render() {
    return (
      <div>
        <form className="newTodoForm" onSubmit={this.handleSubmit}>
          <label htmlFor="task"></label>
          <input
            type="text"
            placeholder="Add"
            id="task"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          ></input>
          <button>Add ToDo </button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
