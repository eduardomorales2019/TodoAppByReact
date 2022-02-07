import React, { Component } from "react";
import NewTodoForm from "./newToDoForm";
import TodoComponent from "./todo";
import ErrorBondary from "./utils/ErrorBondary";

// ===================================================================
class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: [],
    };
    this.create = this.create.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
  }
  //!! ======================CREATE=============================================
  // ! WE HAVE TO PASS THAYT METHOD WE CRATE AS PROP IN THE COMPONENT.
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
  render() {
    //  important to set a variable with the mapping insteead doing all, not forget . its beeen a  month of using dadtabeses and  I just forget

    //! to solve the key problem, when we create the todo , just set the key  with the iteration.

    //? i add the remove method where the x button is
    //?  WE ARE PASSING PROPS IN THE TODO COMPONENT, THAT IS COMMING FROM THE MAP ARRAY
    const todos = this.state.Todos.map((todo) => {
      return (
        <TodoComponent
          key={todo.id}
          task={todo.task}
          remove={this.removeToDo}
          id={todo.id}
        />
      );
    });
    return (
      <div>
        <ErrorBondary>
          <h1>Todo List </h1>
          <NewTodoForm createToDo={this.create} />
          <ul>{todos}</ul>
        </ErrorBondary>
      </div>
    );
  }
}

export default ToDoList;
