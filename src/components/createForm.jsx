import React, { Component } from 'react';
import '../app.css';

class CreateForm extends Component{
  state = {

  };

  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault(); // 기본 기능 취소
    // console.log('submit!!');
    const name = this.inputRef.current.value
    name && this.props.onAdd(name); // 이름 받아왔으면, onAdd에 넘김

  }

  render(){
    return (
        <form 
          action={this.addTodo} 
          onSubmit={this.onSubmit}>
          <input 
            ref = {this.inputRef} 
            type="text" 
            className="add-input" 
            placeholder='만들고 싶은 습관을 입력하세요!'/>
          <button>추가하기</button>
        </form>
    )


  };
}

export default CreateForm;