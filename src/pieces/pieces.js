import {
  FaChessQueen,
  FaChessKing,
  FaChessPawn,
  FaChessRook,
  FaChessBishop,
  FaChessKnight,
} from "react-icons/fa";

import {
  canMoveHorizontalAndVertical,
  canMoveDiagonal,
  pawnCanMove,
  kingCanMove,
  canKnightMove,
} from "../functions/movements";
//--------------------------------PAWN----------------------------------------------------

export const pawn = (color) => {
  return {
    name: "pawn",
    color: color,
    image: FaChessPawn,
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
// --------------------------------------KING------------------------------------------------

export const king = (color) => {
  return {
    name: "king",
    color: color,
    image: FaChessKing,
    determineMovement: kingCanMove,
  };
};
// --------------------------------------ROOK---------------------------------------------
export const rook = (color) => {
  return {
    name: "rook",
    color: color,
    image: FaChessRook,
    danger: false,
    determineMovement: canMoveHorizontalAndVertical,
  };
};
// -------------------------------------BISHOP-----------------------------------------------
export const bishop = (color) => {
  return {
    name: "bishop",
    color: color,
    image: FaChessBishop,
    danger: false,
    determineMovement: canMoveDiagonal,
  };
};
//-------------------------------KNIGHT------------------------------------------------------
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
