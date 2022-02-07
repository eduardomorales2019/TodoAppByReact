import React, { Component } from "react";
import NewTodoForm from "./newToDoForm";
import TodoComponent from "./todo";
import ErrorBondary from "./utils/ErrorBondary";

// ===================================================================
class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: [{ task: "Comprar Pollo" }, { task: "groom Chicken" }],
    };
    this.create = this.create.bind(this);
  }
  // ! WE HAVE TO PASS THAYT METHOD WE CRATE AS PROP IN THE COMPONENT.
  create = (NewTodoo) => {
    this.setState({ Todos: [...this.state.Todos, NewTodoo] });
  };

  render() {
    //  important to set a variable with the mapping insteead doing all, not forget . its beeen a  month of using dadtabeses and  I just forget

    const todos = this.state.Todos.map((todo) => {
      return <TodoComponent task={todo.task} />;
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
