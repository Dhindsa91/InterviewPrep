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
       <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/> 
        <p>{title}</p>
        <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
      </div>
    )
  }
}


const btnStyle = {
  background:'#ff0000',
  color: '#fff',
  border: 'none',
  borderRadius:'50%',
  padding: '5px 9px',
  float: '',
  display: 'block',
  

}

TodoItem.propTypes = {
  todos: PropTypes.object.isRequired
}


export default TodoItem



