import React, { Component } from 'react';
import Habit from './habit';
// import App from '../app';

class Habits extends Component {
  state ={
    habits:[
      {id:1,name:'Reading', count:0},
      {id:2,name:'Coding', count:0},
      {id:3,name:'Running', count:0}
    ],
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

  render() {
    return (
      <ul>
        {
          this.state.habits.map(habit=>(
            <Habit key={habit.id} habit={habit} 
              onIncrement={this.handleIncrement} 
              onDecrement = {this.handleDecrement}
              onDelete = {this.handleDelete}
              />
          ))
        }
        
      </ul>
    );
  }
}

export default Habits;