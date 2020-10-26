import reducer from "../store/reducer/reducer";
import * as actionTypes from "../store/actions/actionTypes";

const defaultState = { rows: 5, cols: 12, blockArr: [], move: null, score: 0 };

describe("Reducer", () => {
  test("should return default state when state is not undefined", () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });
  test("should handle POPULATE_BOARD", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.POPULATE_BOARD,
        arr: [{ id: 0, color: "red" }],
      })
    ).toEqual({
      blockArr: [{ id: 0, color: "red" }],
      move: null,
      score: 0,
      rows: 5,
      cols: 12,
    });
  });
  test("should handle RESTART_GAME", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.RESTART_GAME,
      })
    ).toEqual({
      blockArr: [],
      move: null,
      score: 0,
      rows: 5,
      cols: 12,
    });
  });
});
