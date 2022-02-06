import React, { Component } from "react";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: [{ task: "Comprar Pollo" }, { task: "groom Chicken" }],
    };
  }

  render() {
    return (
      <div>
        <h1>Todo List </h1>
        <ul></ul>
      </div>
    );
  }
}

export default ToDoList;
