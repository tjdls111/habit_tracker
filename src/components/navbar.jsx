import React, { Component } from "react";
import "../App.css";

class NavBar extends Component {
  render() {
    console.log("navbar");
    return (
      <div className="navbar">
        <h1>Habit Tracker ✅📚👩‍💻</h1>
        <h3>{this.props.habits_cnt}개의 좋은 습관 만들기를 진행 중이에요.</h3>
      </div>
    );
  }
}

export default NavBar;
