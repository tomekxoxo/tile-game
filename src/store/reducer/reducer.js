import * as actionTypes from "../actions/actionTypes";

const initialState = {
  rows: 5,
  cols: 12,
  blockArr: [],
  move: null,
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POPULATE_BOARD:
      return {
        ...state,
        blockArr: action.arr,
      };
    case actionTypes.BOX_DELETE:
      return {
        ...state,
        blockArr: action.arr,
        move: action.move,
      };
    case actionTypes.UPDATE_SCORE:
      return {
        ...state,
        score: action.score
      };
    default:
      return state;
  }
};

export default reducer;
