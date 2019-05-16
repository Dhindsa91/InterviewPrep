import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header.js";
import AddTodo from "./components/AddTodo.js";
import uuid from "uuid";
import About from "./components/pages/About";
import Axios from 'axios';

class App extends Component {
  state = {
    todos: [
 
    ]
  }

  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
    .then(res => this.setState({
      todos: res.data
    }))
  }

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
    Axios.delete(`https://jsonplaceholder.typicode.com/todos${id}`)
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id != id)]
    });
  };

  addTodo = ntitle => {

    Axios.post('https://jsonplaceholder.typicode.com/todos', {title: ntitle,
  completed: false})
  .then(res=>this.setState({ todos: [...this.state.todos, res.data] }));
    // const newTodo = {
    //   id: uuid.v4(),
    //   title: ntitle,
    //   completed: false
    // };

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
