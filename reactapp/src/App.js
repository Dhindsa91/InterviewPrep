import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos'



class App extends Component {
    state ={
      todos: [
        {
          id: 1,
          title: "Buy food",
          completed: true
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
    }

//now the id is being passed from the top 
    markComplete = (id) =>{

      this.setState({
        todos: this.state.todos.map(todo=>{
          if(todo.id==id){
            todo.completed = !todo.completed
          }
          return todo;
        }
          )
      })

    }

    delTodo = (id) =>{
     
      this.setState({ todos: [...this.state.todos.filter(todo=>todo.id !=id)]
       
      });

    }

  render() {

    return (
      
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>


    </div>
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