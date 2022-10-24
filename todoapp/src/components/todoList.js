import React, { Component } from "react";
import NewTodoForm from "./newToDoForm";
import TodoComponent from "./todo";
import ErrorBondary from "./utils/ErrorBondary";
import "../styles/Todolist.css";

import logo from "../images/todoappvector.svg";

// ===================================================================
class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: [],
    };
    this.create = this.create.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
    this.isUpdating = this.isUpdating.bind(this);
    this.toogleConfirmation = this.toogleConfirmation.bind(this);
  }
  //!! ======================CREATE=============================================
  // ! I HAVE TO PASS THAT METHOD  I CReaTE AS PROP IN THE COMPONENT.
  create = (NewTodoo) => {
    this.setState({ Todos: [...this.state.Todos, NewTodoo] });
  };
  //! =======================REMOVE ID ============================================

  removeToDo = (id) => {
    this.setState({
      Todos: this.state.Todos.filter((t) => t.id !== id),
    });
  };
  // ===================================================================
  isUpdating = (id, updatedtask) => {
    const updateTodos = this.state.Todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedtask };
      }
      return todo;
    });
    this.setState({ Todos: updateTodos }); // NOT MUTATE STATE DIRECTLY, WE  SET THE STATE WITH THE VARIANBLE CREATED  WITH ITS PROCESS
    console.log(updateTodos, "Soy updated TODOS ");
  };
  // ! THIS LOGIC , IS THE ONE IT TAKE TIME TO LEARN==========================same logic as the updatemethod.

  toogleConfirmation = (id) => {
    const Completeded = this.state.Todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ Todos: Completeded });
    // console.log(this.state);
  };
  // ===================================================================

  render() {
    //  important to set a variable with the mapping insteead doing all, not forget . its beeen a  month of using dadtabeses and  I just forget

    //! to solve the key problem, when we create the todo , just set the key  with the iteration.

    //? i add the remove method where the x button is
    //?  WE ARE PASSING PROPS IN THE TODO COMPONENT, THAT IS COMMING FROM THE MAP ARRAY
    const todos = this.state.Todos.map((todo) => {
      //!  OJO CON ESTE MAP ESTOY PASANDO TODOS LOS  this.state.Todos a componente todo.js
      return (
        <TodoComponent
          key={todo.id}
          task={todo.task}
          remove={this.removeToDo}
          id={todo.id}
          update={this.isUpdating}
          completed={todo.completed}
          toggleconfirmedTask={this.toogleConfirmation}
        />
      );
    });
    return (
      <ErrorBondary>
        <div className="TodoList">
          {/* <div className="Logo"> */}
          <img src={logo} alt="svg" width="80px"></img>
          {/* </div> */}
          <h1>
            Todo List <span> Simple React Todo List App</span>
          </h1>

          <ul>{todos}</ul>
          <NewTodoForm createToDo={this.create} />
        </div>
      </ErrorBondary>
    );
  }
}

export default ToDoList;
