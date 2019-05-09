import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos'



class App extends Component {
    state ={
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
    }




  render() {
    console.log(this.props.todos);
    return (
      
      <div className="App">
        <Todos todos={this.state.todos}/>

    </div>
    );
    }
  }

export default App;
