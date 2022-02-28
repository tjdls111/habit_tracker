import React, { useState } from "react";
import "./App.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import ResetBtn from "./components/resetBtn";

const App = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Coding", count: 0 },
    { id: 3, name: "Running", count: 0 },
  ]);

  const handleIncrement = (habit) => {
    const habits2 = habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    setHabits(habits2);
  };

  const handleDecrement = (habit) => {
    const habits2 = habits.map((item) => {
      if (item.id === habit.id) {
        return { ...item, count: item.count <= 0 ? 0 : item.count - 1 };
      }
      return item;
    });
    setHabits(habits2);
  };

  const handleDelete = (habit) => {
    // console.log({habit});
    const habits2 = [...habits];
    const index = habits.indexOf(habit);
    habits2.splice(index, 1);
    setHabits(habits2);
  };

  const handleAdd = (name) => {
    const habit = { id: Date.now(), name: name, count: 0 };
    const habits2 = [...habits, habit];
    setHabits(habits2);
  };

  const handleReset = () => {
    const habits2 = habits.map((item) => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });

    setHabits(habits2);
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
