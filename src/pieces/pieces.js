import {
  FaChessQueen,
  FaChessKing,
  FaChessPawn,
  FaChessRook,
  FaChessBishop,
  FaChessKnight,
} from "react-icons/fa";
//                                COMMON MOVEMENTS
//          ALL THE WAY UP
const canMoveNorth = (arr, i, j) => {
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
const canMoveSouth = (arr, i, j) => {
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
const canMoveWest = (arr, i, j) => {
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
const canMoveEast = (arr, i, j) => {
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
const canMoveNorthEast = (arr, i, j) => {
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
const canMoveNorthWest = (arr, i, j) => {
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
const canMoveSouthEast = (arr, i, j) => {
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
const canMoveSouthWest = (arr, i, j) => {
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
const canMoveHorizontalAndVertical = (arr, i, j) => {
  let temp = canMoveNorth(arr, i, j);
  temp = canMoveSouth(temp, i, j);
  temp = canMoveEast(temp, i, j);
  temp = canMoveWest(temp, i, j);
  return [...temp];
};

//--------------------------------ALL THE DIAGONAL LINES-------------------------------------
const canMoveDiagonal = (arr, i, j) => {
  let temp = canMoveNorthEast(arr, i, j);
  temp = canMoveNorthWest(temp, i, j);
  temp = canMoveSouthEast(temp, i, j);
  temp = canMoveSouthWest(temp, i, j);
  return [...temp];
};
//--------------------------------PAWN----------------------------------------------------
const pawnMovement = function (arr, i, j, pawn) {
  if (arr[i][j] === null) {
    arr[i][j] = null;
    arr[i - 1][j] = pawn;
  }

  return [...arr];
};

const pawnCanMove = (arr, i, j) => {
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

export const pawn = (color) => {
  return {
    name: "pawn",
    color: color,
    image: FaChessPawn,
    movement: pawnMovement,
    determineMovement: pawnCanMove,
    danger: false,
  };
};
// ---------------------------------------------------------------------------------------------
// --------------------------------------QUEEN----------------------------------------------
const queenCanMove = (arr, i, j) => {
  let result = canMoveHorizontalAndVertical(arr, i, j);
  result = canMoveDiagonal(result, i, j);
  return [...result];
};
export const queen = (color) => {
  return {
    name: "queen",
    color: color,
    image: FaChessQueen,
    determineMovement: queenCanMove,
    danger: false,
  };
};
// ---------------------------------------------------------------------------------------------
export const king = (color) => {
  return {
    name: "king",
    color: color,
    image: FaChessKing,
  };
};
// ---------------------------------------------------------------------------------------------
export const rook = (color) => {
  return {
    name: "rook",
    color: color,
    image: FaChessRook,
    danger: false,
    determineMovement: canMoveHorizontalAndVertical,
  };
};
// ---------------------------------------------------------------------------------------------
export const bishop = (color) => {
  return {
    name: "bishop",
    color: color,
    image: FaChessBishop,
    danger: false,
    determineMovement: canMoveDiagonal,
  };
};
// ---------------------------------------------------------------------------------------------
//AFTER COMPLETED, THIS FUNCTION CAN BE REFACTORED BY USING A HELPER FUNCTION TO REDUCE REPEATED CODE, PASS IN POSITVE OR NEGATIVE VALUES WHICH WOULD REPLICATE PLUS OR MINUS
const canKnightMove = (arr, i, j) => {
  //FORWARD CHECK
  if (arr[i - 2]) {
    //top left
    if (arr[i - 2][j - 1] === null) arr[i - 2][j - 1] = 1;
    if (arr[i - 2][j - 1].color === "#565352") arr[i - 2][j - 1].danger = true;
    //top right
    if (arr[i - 2][j + 1] === null) arr[i - 2][j + 1] = 1;
    if (arr[i - 2][j + 1].color === "#565352") arr[i - 2][j + 1].danger = true;
  }
  //BOTTOM CHECK
  if (arr[i + 2]) {
    //top left
    if (arr[i + 2][j - 1] === null) arr[i + 2][j - 1] = 1;
    if (arr[i + 2][j - 1].color === "#565352") arr[i + 2][j - 1].danger = true;
    //top right
    if (arr[i + 2][j + 1] === null) arr[i + 2][j + 1] = 1;
    if (arr[i + 2][j + 1].color === "#565352") arr[i + 2][j + 1].danger = true;
  }
  //RIGHT CHECK
  //LEFT CHECK
  return [...arr];
};
export const knight = (color) => {
  return {
    name: "knight",
    color: color,
    image: FaChessKnight,
    danger: false,
    determineMovement: canKnightMove,
  };
};
// ---------------------------------------------------------------------------------------------
