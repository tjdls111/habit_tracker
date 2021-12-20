import React, { Component } from 'react';
import '../app.css';

class CreateForm extends Component{
  state = {

  };

  addTodo = ()=>{
    
  };

  render(){
    return (
      <div className='createForm'>
        <form action={this.addTodo}>
          <input type="input" />
          <button>추가하기</button>
        </form>
        
      </div>
    )


  };
}

export default CreateForm;