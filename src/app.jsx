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
    // cnt : this.state.habits.length
  };

  render(){
    return (
      <div>
        <Navbar></Navbar>
        <Habits></Habits>
        <CreateForm></CreateForm>
      </div>
      );

  }
}

export default App;
