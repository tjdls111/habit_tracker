import HabitPresenter from "../habit_presenter";

describe("HabitPresenter", () => {
  const habits = [
    { id: 1, name: "Reading", count: 1 },
    { id: 2, name: "Running", count: 0 },
  ];
  let presenter;
  let update = jest.fn(); // jest의 mock 함수

  beforeEach(() => {
    presenter = new HabitPresenter(habits, 4);
  });

  it("inits with habits", () => {
    expect(presenter.getHabits()).toEqual(habits);
  });

  it("increments habit cnt", () => {
    presenter.increment(habits[0], update);

    expect(presenter.getHabits()[0].count).toBe(2);
    checkUpdateIsCalled();
  });

  it("decrements habit cnt", () => {
    presenter.decrement(habits[0], update);

    expect(presenter.getHabits()[0].count).toBe(0);
    checkUpdateIsCalled();
  });

  it("does not set cnt value under zero", () => {
    presenter.decrement(habits[0], update);
    presenter.decrement(habits[0], update);

    expect(presenter.getHabits()[0].count).toBe(0);
  });

  it("delete habit item", () => {
    presenter.delete(habits[0], update);

    expect(presenter.getHabits().length).toBe(1);
    expect(presenter.getHabits()[0].name).toBe("Running");
    checkUpdateIsCalled();
  });

  it("add habit item", () => {
    presenter.add("Coding", update);

    expect(presenter.getHabits().length).toBe(3);
    expect(presenter.getHabits()[2].name).toBe("Coding");
    checkUpdateIsCalled();
  });
  describe("reset", () => {
    it("reset all habit cnt to zero", () => {
      presenter.reset(update);
      expect(presenter.getHabits()[0].count).toBe(0);
      checkUpdateIsCalled();
    });

    it("does not make new object", () => {
      const habits = presenter.getHabits();
      presenter.reset(update);
      const updatedHabits = presenter.getHabits();

      expect(habits[1]).toBe(updatedHabits[1]); // 오브젝트의 참조값 똑같은지
    });
  });

  it("throws an error when exceed max cnt limit", () => {
    presenter.add("Coding", update);
    presenter.add("Coding", update);
    expect(() => {
      presenter.add("Sleeping", update);
    }).toThrow("Habit 개수는 4까지입니다~!!");
  });

  // 중복되는 부분 함수로 만들어 둠
  function checkUpdateIsCalled() {
    expect(update).toHaveBeenCalledTimes(1); // 업데이트 함수가 한 번 실행
    expect(update).toHaveBeenCalledWith(presenter.getHabits()); //업데이트할 때 이 배열이 전달되었는지
  }
});
