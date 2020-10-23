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
        score: action.score,
        move: action.move,
      };
    case actionTypes.MOVE_BLOCKS_DOWN:
      return {
        ...state,
        blockArr: action.arr,
        move: action.move,
      };
    case actionTypes.GENERATE_NEW_BLOCKS:
      return {
        ...state,
        blockArr: action.arr,
        move: action.move,
      };
    case actionTypes.CHECK_IF_CAN_MOVE:
      return {
        ...state,
        move: action.move,
      };
    case actionTypes.RESTART_GAME:
      return {
        ...state,
        blockArr: [],
        move: null,
        score: 0,
      };
    default:
      return state;
  }
};

export default reducer;
