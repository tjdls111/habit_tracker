import React, { PureComponent } from 'react';

class Habit extends PureComponent {

  componentDidMount(){
    console.log(`${this.props.habit.name} mounting`);
  }
  
  componentWillUnmount(){
    console.log(`${this.props.habit.name} will unmount`);
    
  }


  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };
  
  handleDecrement = () =>{
    this.props.onDecrement(this.props.habit);
    
  };
  
  handleDelete = ()=>{
    this.props.onDelete(this.props.habit);
  };

  handleAdd = ()=>{
    this.props.onAdd(this.props.name)
  }

  render() {
    console.log('habit: '+this.props.habit.name);
    // console.log(this.props);
    const {name, count} = this.props.habit;
    return (
      <li className='habit'>
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>

        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fas fa-plus-circle"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <i className="fas fa-minus-circle"></i>
        </button>

        <button className="habit-button habit-delete" onClick={this.handleDelete}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </li>

    );
  }
}

export default Habit;