import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header.js";
import AddTodo from "./components/AddTodo.js";
import uuid from "uuid";
import About from "./components/pages/About"

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Buy food",
        completed: false
      },
      {
        id: 2,
        title: "Go To Gym",
        completed: false
      },
      {
        id: 3,
        title: "Watch GOT",
        completed: false
      }
    ]
  };

  //now the id is being passed from the top
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id != id)]
    });
  };

  addTodo = ntitle => {
    const newTodo = {
      id: uuid.v4(),
      title: ntitle,
      completed: false
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
               exact path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo} />
                </React.Fragment>
                )}/>
                <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
//No props since we're running it in this class

//comes from the  state and accessed as props
//Do we need Todo.propType =
//Why setting state in App
//Arrow function and this
//since no redux markComplete has to be a prop
