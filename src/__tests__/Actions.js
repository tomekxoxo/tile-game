import * as action from "../store/actions/index";

it("should return type and array when POPULATE_BOARD", () => {
  const expectedAction = {
    type: "POPULATE_BOARD",
    arr: expect.any(Array)
  };
  expect(action.populateBoard(5, 12)).toEqual(expectedAction);
});
