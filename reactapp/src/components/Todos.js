import React, {Component} from 'react';
import TodoItem from './TodoItem.js';
import PropTypes from 'prop-types';


// {} is JSX, JS in HTML
// props call the todo='params' ex: markComplete in Todo will look at the prop in this class 
class Todos extends Component {
  render() {

      return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
      ));
   
    }
  }



Todos.propTypes = {
    todos: PropTypes.array.isRequired
}


export default Todos;


