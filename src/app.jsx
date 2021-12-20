import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
import CreateForm from './components/createForm';

class App extends Component{
  state ={
    habits:[
      {id:1,name:'Reading', count:0},
      {id:2,name:'Coding', count:0},
      {id:3,name:'Running', count:0}
    ],
    // cnt : this.state.habits.length,
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count ++;
    this.setState({habits});

  };
  
  handleDecrement = (habit) =>{
    // console.log({habit});
    // this.habits[habit.id] -= 1;
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count = habits[index].count-1 < 0 ? 0: habits[index].count-1;
    this.setState({habits});
    
    
  };
  
  handleDelete = (habit)=>{
    // console.log({habit});
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits.splice(index,1);
    this.setState({habits});
  };


  render(){
    return (
      <div>
        <Navbar
        habits_cnt={this.state.habits.length}
        ></Navbar>
        <Habits
        habits={this.state.habits}
        handleDecrement={this.handleDecrement}
        handleDelete={this.handleDelete}
        handleIncrement={this.handleIncrement}></Habits>
        <CreateForm></CreateForm>
      </div>
      );

  }
}

export default App;
