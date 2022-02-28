export default class HabitPresenter {
  constructor(habits) {
    this.habits = habits;
  }

  getHabits() {
    return this.habits;
  }

  increment(habit, update) {
    this.habits = this.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    update(this.habits);
  }

  decrement(habit, update) {
    this.habits = this.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...item, count: item.count <= 0 ? 0 : item.count - 1 };
      }
      return item;
    });
    update(this.habits);
  }
  delete(habit, update) {
    const index = this.habits.indexOf(habit);
    this.habits.splice(index, 1);
    update(this.habits);
  }

  add(name, update) {
    const habit = { id: Date.now(), name: name, count: 0 };
    this.habits = [...this.habits, habit];
    update(this.habits);
  }

  reset(update) {
    this.habits = this.habits.map((item) => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });

    update(this.habits);
  }
}
