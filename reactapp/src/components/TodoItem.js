import React, { Component } from 'react';
import PropTypes from 'prop-types';



// double {{}} for inline style in JSQ
export class TodoItem extends Component {

  getStyle = () =>{
    
      return{
        background: 'lightblue',
        padding: '2px',
        border: '2px black solid',
        textDecoration: this.props.todo.completed ?
            'line-through': 'none'                              //textDecoration is a css Property
      }

    } 

    markComplete = (e) =>{

    }
  
  //   }else {
  //     return {
  //       textDecoration: 'none'
  //   }
  // }
  // }

// DESTRUCTERING 
  render() {
    const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
       <br/> <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/> 
        <p>{title}</p>
      </div>
    )
  }
}


TodoItem.propTypes = {
  todos: PropTypes.object.isRequired
}


export default TodoItem



