//                                COMMON MOVEMENTS
//          ALL THE WAY UP
export const canMoveNorth = (arr, i, j) => {
  while (i >= 0) {
    const oneRowUp = arr[i - 1];
    if (oneRowUp && oneRowUp[j] === null) {
      oneRowUp[j] = 1;
    } else if (oneRowUp && oneRowUp[j] && oneRowUp[j].color === "#565352") {
      oneRowUp[j].danger = true;
      break;
    } else if (oneRowUp && oneRowUp[j] !== null) {
      break;
    }
    i--;
  }

  return [...arr];
};
//        ALL THE WAY DOWN
export const canMoveSouth = (arr, i, j) => {
  while (arr.length >= i) {
    const oneRowDown = arr[i + 1];
    if (oneRowDown && oneRowDown[j] === null) {
      oneRowDown[j] = 1;
    } else if (
      oneRowDown &&
      oneRowDown[j] &&
      oneRowDown[j].color === "#565352"
    ) {
      oneRowDown[j].danger = true;
      break;
    } else if (oneRowDown && oneRowDown[j] !== null) {
      break;
    }
    i++;
  }

  return [...arr];
};
//        ALL THE WAY WEST
export const canMoveWest = (arr, i, j) => {
  while (j >= 0) {
    const oneSpotWest = arr[i][j - 1];
    if (oneSpotWest === null) {
      arr[i][j - 1] = 1;
    } else if (oneSpotWest && oneSpotWest.color === "#565352") {
      arr[i][j - 1].danger = true;
      break;
    } else if (oneSpotWest !== null) {
      break;
    }
    j--;
  }
  return [...arr];
};
//        ALL THE WAY EAST
export const canMoveEast = (arr, i, j) => {
  while (arr[i].length >= j) {
    const oneSpotEast = arr[i][j + 1];
    if (oneSpotEast === null) {
      arr[i][j + 1] = 1;
    } else if (oneSpotEast && oneSpotEast.color === "#565352") {
      arr[i][j + 1].danger = true;
      break;
    } else if (oneSpotEast !== null) {
      break;
    }
    j++;
  }
  return [...arr];
};

//        ALL THE WAY NORTH EAST
export const canMoveNorthEast = (arr, i, j) => {
  while (0 <= i && arr[i].length > j) {
    if (arr[i - 1] === undefined) {
      break;
    }
    const oneSpotNorthEast = arr[i - 1][j + 1];
    if (oneSpotNorthEast === null) {
      arr[i - 1][j + 1] = 1;
    } else if (oneSpotNorthEast && oneSpotNorthEast.color === "#565352") {
      arr[i - 1][j + 1].danger = true;
      break;
    } else if (oneSpotNorthEast !== null) {
      break;
    }
    j++;
    i--;
  }
  return [...arr];
};
//        ALL THE WAY NORTH EAST
export const canMoveNorthWest = (arr, i, j) => {
  while (0 <= i && 0 <= j) {
    if (arr[i - 1] === undefined) {
      break;
    }
    const oneSpotNorthWest = arr[i - 1][j - 1];
    if (oneSpotNorthWest === null) {
      arr[i - 1][j - 1] = 1;
    } else if (oneSpotNorthWest && oneSpotNorthWest.color === "#565352") {
      arr[i - 1][j - 1].danger = true;
      break;
    } else if (oneSpotNorthWest !== null) {
      break;
    }
    j--;
    i--;
  }
  return [...arr];
};
//        ALL THE WAY SOUTH EAST
export const canMoveSouthEast = (arr, i, j) => {
  while (arr.length > i && arr[i].length > j) {
    if (arr[i + 1] === undefined) {
      break;
    }
    const oneSpotSouthEast = arr[i + 1][j + 1];
    if (oneSpotSouthEast === null) {
      arr[i + 1][j + 1] = 1;
    } else if (oneSpotSouthEast && oneSpotSouthEast.color === "#565352") {
      arr[i + 1][j + 1].danger = true;
      break;
    } else if (oneSpotSouthEast !== null) {
      break;
    }
    j++;
    i++;
  }
  return [...arr];
};
//        ALL THE WAY SOUTH WEST
export const canMoveSouthWest = (arr, i, j) => {
  while (arr.length > i && 0 <= j) {
    if (arr[i + 1] === undefined) {
      break;
    }
    const oneSpotSouthWest = arr[i + 1][j - 1];
    if (oneSpotSouthWest === null) {
      arr[i + 1][j - 1] = 1;
    } else if (oneSpotSouthWest && oneSpotSouthWest.color === "#565352") {
      arr[i + 1][j - 1].danger = true;
      break;
    } else if (oneSpotSouthWest !== null) {
      break;
    }
    j--;
    i++;
  }
  return [...arr];
};
//--------------------------------GROUPED FUNCTIONS---------------------------------------
//------------------------ALL THE VERTICAL AND HORIZONTAL---------------------------------
export const canMoveHorizontalAndVertical = (arr, i, j) => {
  let temp = canMoveNorth(arr, i, j);
  temp = canMoveSouth(temp, i, j);
  temp = canMoveEast(temp, i, j);
  temp = canMoveWest(temp, i, j);
  return [...temp];
};

//--------------------------------ALL THE DIAGONAL LINES-------------------------------------
export const canMoveDiagonal = (arr, i, j) => {
  let temp = canMoveNorthEast(arr, i, j);
  temp = canMoveNorthWest(temp, i, j);
  temp = canMoveSouthEast(temp, i, j);
  temp = canMoveSouthWest(temp, i, j);
  return [...temp];
};

//-----------------------------pawn------------------------------------------------------
export const pawnCanMove = (arr, i, j) => {
  const oneRowUp = arr[i - 1];
  if (oneRowUp && oneRowUp[j] === null) {
    oneRowUp[j] = 1;
  }
  if (i === 6 && arr[i - 2][j] === null) arr[i - 2][j] = 1;
  if (oneRowUp && oneRowUp[j - 1] && oneRowUp[j - 1].color === "#565352") {
    oneRowUp[j - 1].danger = true;
  }
  if (oneRowUp && oneRowUp[j + 1] && oneRowUp[j + 1].color === "#565352") {
    oneRowUp[j + 1].danger = true;
  }

  return [...arr];
};

// --------------------------------------KING------------------------------------------------
export const kingCanMove = (arr, i, j) => {
  const oneRowDown = arr[i + 1];
  const oneRowUp = arr[i - 1];
  const sameRow = arr[i];
  //ANY MOVEMENT GOING UP
  if (oneRowUp) {
    //straight up
    if (oneRowUp[j] === null) arr[i - 1][j] = 1;
    else if (oneRowUp[j].color === "#565352") arr[i - 1][j].danger = true;
    //up left
    if (oneRowUp[j - 1] === null) arr[i - 1][j - 1] = 1;
    else if (oneRowUp[j - 1] && oneRowUp[j - 1].color === "#565352")
      arr[i - 1][j - 1].danger = true;
    //up right
    if (oneRowUp[j + 1] === null) arr[i - 1][j + 1] = 1;
    else if (oneRowUp[j + 1] && oneRowUp[j + 1].color === "#565352")
      arr[i - 1][j + 1].danger = true;
  }
  //ANY MOVEMENT GOING UP
  if (oneRowDown) {
    //straight down
    if (oneRowDown[j] === null) arr[i + 1][j] = 1;
    else if (oneRowDown[j].color === "#565352") arr[i + 1][j].danger = true;
    //down left
    if (oneRowDown[j - 1] === null) arr[i + 1][j - 1] = 1;
    else if (oneRowDown[j - 1] && oneRowDown[j - 1].color === "#565352")
      arr[i + 1][j - 1].danger = true;
    //down right
    if (oneRowDown[j + 1] === null) arr[i + 1][j + 1] = 1;
    else if (oneRowDown[j + 1] && oneRowDown[j + 1].color === "#565352")
      arr[i + 1][j + 1].danger = true;
  }
  //LEFT
  if (j - 1 >= 0) {
    if (sameRow[j - 1] === null) arr[i][j - 1] = 1;
    else if (sameRow[j - 1].color === "#565352") arr[i][j - 1].danger = true;
  }
  //RIGHT
  if (j + 1 >= 0) {
    if (sameRow[j + 1] === null) arr[i][j + 1] = 1;
    else if (sameRow[j + 1].color === "#565352") arr[i][j + 1].danger = true;
  }
  return [...arr];
};
// ---------------------------------------------------------------------------------------------
//AFTER COMPLETED, THIS FUNCTION CAN BE REFACTORED BY USING A HELPER FUNCTION TO REDUCE REPEATED CODE, PASS IN POSITVE OR NEGATIVE VALUES WHICH WOULD REPLICATE PLUS OR MINUS
export const canKnightMove = (arr, i, j) => {
  //FORWARD CHECK
  if (arr[i - 2]) {
    //top left
    if (arr[i - 2][j - 1] === null) arr[i - 2][j - 1] = 1;
    else if (arr[i - 2][j - 1] && arr[i - 2][j - 1].color === "#565352")
      arr[i - 2][j - 1].danger = true;
    //top right
    if (arr[i - 2][j + 1] === null) arr[i - 2][j + 1] = 1;
    else if (arr[i - 2][j + 1] && arr[i - 2][j + 1].color === "#565352")
      arr[i - 2][j + 1].danger = true;
  }
  //BOTTOM CHECK
  if (arr[i + 2]) {
    //bottom left
    if (arr[i + 2][j - 1] === null) arr[i + 2][j - 1] = 1;
    else if (arr[i + 2][j - 1] && arr[i + 2][j - 1].color === "#565352")
      arr[i + 2][j - 1].danger = true;
    //bottom right
    if (arr[i + 2][j + 1] === null) arr[i + 2][j + 1] = 1;
    else if (arr[i + 2][j + 1] && arr[i + 2][j + 1].color === "#565352")
      arr[i + 2][j + 1].danger = true;
  }
  //RIGHT CHECK
  if (arr[i + 1] && arr[i - 1] && arr[i][j + 2] !== undefined) {
    //right up
    if (arr[i + 1][j + 2] === null) arr[i + 1][j + 2] = 1;
    else if (arr[i + 1][j + 2].color === "#565352")
      arr[i + 1][j + 2].danger = true;
    // right down
    if (arr[i - 1][j + 2] === null) arr[i - 1][j + 2] = 1;
    else if (arr[i - 1][j + 2].color === "#565352")
      arr[i - 1][j + 2].danger = true;
  }

  //LEFT CHECK

  if (arr[i + 1] && arr[i - 1] && arr[i][j - 2] !== undefined) {
    //right up
    if (arr[i + 1][j - 2] === null) arr[i + 1][j - 2] = 1;
    else if (arr[i + 1][j - 2].color === "#565352")
      arr[i + 1][j - 2].danger = true;
    // right down
    if (arr[i - 1][j - 2] === null) arr[i - 1][j - 2] = 1;
    else if (arr[i - 1][j - 2].color === "#565352")
      arr[i - 1][j - 2].danger = true;
  }
  return [...arr];
};
