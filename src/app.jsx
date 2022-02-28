import React, { Component } from "react";
import "./App.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import ResetBtn from "./components/resetBtn";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Coding", count: 0 },
      { id: 3, name: "Running", count: 0 },
    ],
    // cnt : this.state.habits.length,
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    // console.log({habit});
    // this.habits[habit.id] -= 1;
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...item, count: item.count <= 0 ? 0 : item.count - 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    // console.log({habit});
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits.splice(index, 1);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habit = { id: Date.now(), name: name, count: 0 };
    const habits = [...this.state.habits, habit];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((item) => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });

    this.setState({ habits });
  };

  render() {
    console.log("app");
    return (
      <>
        <Navbar habits_cnt={this.state.habits.length}></Navbar>
        <Habits
          habits={this.state.habits}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onAdd={this.handleAdd}
        ></Habits>

        <ResetBtn onReset={this.handleReset}></ResetBtn>
      </>
    );
  }
}

export default App;
