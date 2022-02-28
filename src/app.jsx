import React, { useState } from "react";
import "./App.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import ResetBtn from "./components/resetBtn";

const App = ({ presenter }) => {
  const [habits, setHabits] = useState(presenter.getHabits());

  const handleIncrement = (habit) => {
    presenter.increment(habit, setHabits);
  };

  const handleDecrement = (habit) => {
    presenter.decrement(habit, setHabits);
  };

  const handleDelete = (habit) => {
    presenter.delete(habit, setHabits);
  };

  const handleAdd = (name) => {
    presenter.add(name, setHabits);
  };

  const handleReset = () => {
    presenter.reset(setHabits);
  };

  return (
    <>
      <Navbar habits_cnt={habits.length}></Navbar>
      <Habits
        habits={habits}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onIncrement={handleIncrement}
        onAdd={handleAdd}
      ></Habits>

      <ResetBtn onReset={handleReset}></ResetBtn>
    </>
  );
};

export default App;
