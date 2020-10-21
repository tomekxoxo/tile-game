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
  console.log('baja');
}

export const deleteBox = (id, arr, score) => {
  const initialColor = arr[id].color;
  moveBlocksDown()
  const checkForNeighbours = (array, stack) => {
    if (stack.length > 0) {
      // console.log("uruchomienie rekurencji");
      // console.log(initialColor);
      const currElementId = stack[0]; //  first element from stack
      let newStack = stack;
      let newArray = array;
      let checked = false;

      if (
        array[currElementId - 12] !== undefined &&
        array[currElementId - 12].color == initialColor
      ) {
        //upper element
        newStack.push(currElementId - 12);

        newArray[currElementId].color = "transparent";
        newArray[currElementId - 12].color = "transparent";
        checked = true;
      }
      if (
        array[currElementId + 12] !== undefined &&
        array[currElementId + 12].color == initialColor
      ) {
        //lower element

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
        //element from left
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
        //element from right

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
  const x = checkForNeighbours(arr, [id], score);

  return { type: actionTypes.BOX_DELETE, arr: x, move: id };
};

export const updateScore = (arr) => {
  let score = 0

  arr.forEach(element => {
    if (element.color == 'transparent') {
      score += 1
    }
  })
  return { type: actionTypes.UPDATE_SCORE, score: score };
}