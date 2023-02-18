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
  const oneIndexUp = arr[i - 1];
  while (i >= 0) {
    if (oneIndexUp && oneIndexUp[j] === null) oneIndexUp[j] = 1;
    else if (oneIndexUp && oneIndexUp[j] && oneIndexUp[j].color === "#565352") {
      oneIndexUp[j] = 1;
      break;
    } else if (oneIndexUp && oneIndexUp[j] !== null) break;
    i--;
  }
  console.log(arr);
  return [...arr];
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
  const oneIndexUp = arr[i - 1];
  if (oneIndexUp && oneIndexUp[j] === null) {
    oneIndexUp[j] = 1;
  }
  if (i === 6 && arr[i - 2][j] === null) arr[i - 2][j] = 1;
  if (
    oneIndexUp &&
    oneIndexUp[j - 1] &&
    oneIndexUp[j - 1].color === "#565352"
  ) {
    console.log(oneIndexUp[j - 1]);
    oneIndexUp[j - 1].danger = true;
  }
  if (
    oneIndexUp &&
    oneIndexUp[j + 1] &&
    oneIndexUp[j + 1].color === "#565352"
  ) {
    oneIndexUp[j + 1].danger = true;
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
const queenMovement = () => {};
const queenCanMove = () => {};
export const queen = (color) => {
  return {
    name: "queen",
    color: color,
    image: FaChessQueen,
    determineMovement: canMoveNorth,
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
  };
};
// ---------------------------------------------------------------------------------------------
export const bishop = (color) => {
  return {
    name: "bishop",
    color: color,
    image: FaChessBishop,
    danger: false,
  };
};
// ---------------------------------------------------------------------------------------------
export const knight = (color) => {
  return {
    name: "knight",
    color: color,
    image: FaChessKnight,
    danger: false,
  };
};
// ---------------------------------------------------------------------------------------------
