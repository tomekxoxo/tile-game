import { getElementError } from "@testing-library/react";
import * as actionTypes from "./actionTypes";

export const populateBoard = (rows, cols) => {
  const qt = rows * cols;
  let res = [];
  const colors = ["#9e5613", "#133d8a", "#72caed", "#f7c95c", "#705496"];

  for (let i = 0; i < qt; i++) {
    const randColor = Math.floor(Math.random() * 5);
    res.push({ id: i, color: colors[randColor] });
  }
  return { type: actionTypes.POPULATE_BOARD, arr: res };
};

export const moveBlocksDown = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].color == "transparent") {
      if (arr[i - 12] != undefined && arr[i - 12].color !== "transparent") {
        const tempColor = arr[i - 12].color;
        arr[i - 12].color = "transparent";
        arr[i].color = tempColor;
      } else if (
        arr[i - 12 * 2] != undefined &&
        arr[i - 12 * 2].color !== "transparent"
      ) {
        const tempColor = arr[i - 12 * 2].color;
        arr[i - 12 * 2].color = "transparent";
        arr[i].color = tempColor;
      } else if (
        arr[i - 12 * 3] != undefined &&
        arr[i - 12 * 3].color !== "transparent"
      ) {
        const tempColor = arr[i - 12 * 3].color;
        arr[i - 12 * 3].color = "transparent";
        arr[i].color = tempColor;
      } else if (
        arr[i - 12 * 4] != undefined &&
        arr[i - 12 * 4].color !== "transparent"
      ) {
        const tempColor = arr[i - 12 * 4].color;
        arr[i - 12 * 4].color = "transparent";
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
        array[currElementId - 12].color == initialColor
      ) {
        newStack.push(currElementId - 12);

        newArray[currElementId].color = "transparent";
        newArray[currElementId - 12].color = "transparent";
        checked = true;
      }
      if (
        array[currElementId + 12] !== undefined &&
        array[currElementId + 12].color == initialColor
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
        array[currElementId - 1].color == initialColor
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
        array[currElementId + 1].color == initialColor
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
  const colors = ["#9e5613", "#133d8a", "#72caed", "#f7c95c", "#705496"];

  arr.forEach((element) => {
    if (element.color == "transparent") {
      const randColor = Math.floor(Math.random() * 5);
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
    if (element.color == "transparent") {
      score += 1;
    }
  });

  return {
    type: actionTypes.UPDATE_SCORE,
    score: score,
    move: Math.floor(Math.random()),
  };
};
