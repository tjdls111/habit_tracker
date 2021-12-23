import React, { Component } from 'react';

class ResetBtn extends Component {
  handleReset = () =>{
    this.props.onReset()
  }


  render() {
    return (
      <>
        <button className="reset-btn" onClick={this.handleReset}> 모든 습관 횟수 0으로 (다시 초심으로🌱~)</button>
      </>
    )
  }
}

export default ResetBtn;