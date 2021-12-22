import React, { Component } from 'react';
import Habit from './habit';
import CreateForm from './createForm';

class Habits extends Component {

  handleIncrement = (habit) => {
    this.props.onIncrement(habit);

  };
  
  handleDecrement = (habit) =>{
    this.props.onDecrement(habit);
    
    
  };
  
  handleDelete = (habit)=>{
    this.props.onDelete(habit);
  };

  handleAdd = (name)=>{
    this.props.onAdd(name);
  }


  render() {
    return (
      <>
        <CreateForm onAdd={this.handleAdd}>
        </CreateForm>
        <ul>
          {
            this.props.habits.map(habit=>(
              <Habit key={habit.id} 
                habit={habit} 
                onIncrement={this.handleIncrement} 
                onDecrement = {this.handleDecrement}
                onDelete = {this.handleDelete}
                />
            ))
          }
          
        </ul>
    </>
    );
  }
}

export default Habits;