import * as actionTypes from "./actionTypes";

const colors = [
  "#9e5613",
  "#133d8a",
  "#72caed",
  "#f7c95c",
  "#705496",
  "red",
  "green",
  "blue",
  "yellow",
  "grey",
  "white",
  "pink",
  "orange",
  "purple",
];

export const populateBoard = (rows, cols) => {
  const qt = rows * cols;
  let res = [];

  for (let i = 0; i < qt; i++) {
    const randColor = Math.floor(Math.random() * colors.length);
    res.push({ id: i, color: colors[randColor] });
  }
  return { type: actionTypes.POPULATE_BOARD, arr: res };
};

export const moveBlocksDown = (arr, cols) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].color === "transparent") {
      if (arr[i - cols] !== undefined && arr[i - cols].color !== "transparent") {
        const tempColor = arr[i - cols].color;
        arr[i - cols].color = "transparent";
        arr[i].color = tempColor;
      } else if (
        arr[i - cols * 2] !== undefined &&
        arr[i - cols * 2].color !== "transparent"
      ) {
        const tempColor = arr[i - cols * 2].color;
        arr[i - cols * 2].color = "transparent";
        arr[i].color = tempColor;
      } else if (
        arr[i - cols * 3] !== undefined &&
        arr[i - cols * 3].color !== "transparent"
      ) {
        const tempColor = arr[i - cols * 3].color;
        arr[i - cols * 3].color = "transparent";
        arr[i].color = tempColor;
      } else if (
        arr[i - cols * 4] !== undefined &&
        arr[i - cols * 4].color !== "transparent"
      ) {
        const tempColor = arr[i - cols * 4].color;
        arr[i - cols * 4].color = "transparent";
        arr[i].color = tempColor;
      }
    }
  }
  return {
    type: actionTypes.MOVE_BLOCKS_DOWN,
    arr: arr,
    move: Math.floor(Math.random()),
  };
};

export const deleteBox = (id, arr) => {
  const initialColor = arr[id].color;
  const checkForNeighbours = (array, stack) => {
    if (stack.length > 0) {
      const currElementId = stack[0];
      let newStack = stack;
      let newArray = array;
      let checked = false;

      if (
        array[currElementId - 12] !== undefined &&
        array[currElementId - 12].color === initialColor
      ) {
        newStack.push(currElementId - 12);
        newArray[currElementId].color = "transparent";
        newArray[currElementId - 12].color = "transparent";
        checked = true;
      }
      if (
        array[currElementId + 12] !== undefined &&
        array[currElementId + 12].color === initialColor
      ) {
        newStack.push(currElementId + 12);
        newArray[currElementId].color = "transparent";
        newArray[currElementId + 12].color = "transparent";
        checked = true;
      }
      if (
        array[currElementId - 1] !== undefined &&
        array[currElementId - 1].id !== 11 &&
        array[currElementId - 1].id !== 23 &&
        array[currElementId - 1].id !== 35 &&
        array[currElementId - 1].id !== 47 &&
        array[currElementId - 1].color === initialColor
      ) {
        newStack.push(currElementId - 1);

        newArray[currElementId].color = "transparent";
        newArray[currElementId - 1].color = "transparent";
        checked = true;
      }
      if (
        array[currElementId + 1] !== undefined &&
        array[currElementId + 1].id !== 12 &&
        array[currElementId + 1].id !== 24 &&
        array[currElementId + 1].id !== 36 &&
        array[currElementId + 1].id !== 48 &&
        array[currElementId + 1].color === initialColor
      ) {
        newStack.push(currElementId + 1);
        newArray[currElementId].color = "transparent";
        newArray[currElementId + 1].color = "transparent";
        checked = true;
      }

      if (checked) {
        newStack.shift();
        return checkForNeighbours(newArray, newStack);
      } else {
        return array;
      }
    } else {
      return array;
    }
  };
  const x = checkForNeighbours(arr, [id]);

  return { type: actionTypes.BOX_DELETE, arr: x, move: id };
};

export const generateNewBlocks = (arr) => {
  arr.forEach((element) => {
    if (element.color === "transparent") {
      const randColor = Math.floor(Math.random() * colors.length);
      element.color = colors[randColor];
    }
  });

  return {
    type: actionTypes.GENERATE_NEW_BLOCKS,
    arr: arr,
    move: Math.floor(Math.random()),
  };
};

export const updateScore = (arr, prevScore) => {
  let score = prevScore;

  arr.forEach((element) => {
    if (element.color === "transparent") {
      score += 1;
    }
  });

  return {
    type: actionTypes.UPDATE_SCORE,
    score: score,
    move: Math.floor(Math.random()),
  };
};

export const checkIfCanMove = (arr) => {
  let canMove;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (i >= 12 && arr[i].color === arr[i - 12].color) {
      canMove = true;
      return {
        type: actionTypes.CHECK_IF_CAN_MOVE,
        move: canMove,
      };
    }
    if (i >= 1 && arr[i].color === arr[i - 1].color) {
      if (i !== 12 && i !== 24 && i !== 36 && i !== 48) {
        canMove = true;
        return {
          type: actionTypes.CHECK_IF_CAN_MOVE,
          move: canMove,
        };
      }
    }
  }
  canMove = false;
  return {
    type: actionTypes.CHECK_IF_CAN_MOVE,
    move: canMove,
  };
};

export const restartGame = () => {
  return { type: actionTypes.RESTART_GAME };
};
