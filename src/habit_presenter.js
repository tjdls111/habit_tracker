export default class HabitPresenter {
  constructor(habits, maxHabits) {
    this.habits = habits;
    this.maxHabits = maxHabits;
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
    // this.habits.splice(habit.id, 1);
    this.habits = this.habits.filter((item) => item.id !== habit.id);
    update(this.habits);
  }

  add(name, update) {
    if (this.habits.length === this.maxHabits) {
      throw new Error(`Habit 개수는 ${this.maxHabits}까지입니다~!!`);
    }
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
