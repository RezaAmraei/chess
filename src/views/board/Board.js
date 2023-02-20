import React, { useState } from "react";
import { bishop, pawn, rook, knight, queen, king } from "../../pieces/pieces";
import "./board.css";

const Board = () => {
  const [activePiece, setActivePiece] = useState(null);
  //white
  const pawnWhiteA2 = pawn("#dfdfdf");
  const pawnWhiteB2 = pawn("#dfdfdf");
  const pawnWhiteC2 = pawn("#dfdfdf");
  const pawnWhiteD2 = pawn("#dfdfdf");
  const pawnWhiteE2 = pawn("#dfdfdf");
  const pawnWhiteF2 = pawn("#dfdfdf");
  const pawnWhiteG2 = pawn("#dfdfdf");
  const pawnWhiteH2 = pawn("#dfdfdf");

  const rookWhiteA1 = rook("#dfdfdf");
  const knightWhiteB1 = knight("#dfdfdf");
  const bishopWhiteC1 = bishop("#dfdfdf");
  const queenWhiteD1 = queen("#dfdfdf");
  const kingWhiteE1 = king("#dfdfdf");
  const bishopWhiteF1 = bishop("#dfdfdf");
  const knightWhiteG1 = knight("#dfdfdf");
  const rookWhiteH1 = rook("#dfdfdf");
  //black
  const pawnBlackA7 = pawn("#565352");
  const pawnBlackB7 = pawn("#565352");
  const pawnBlackC7 = pawn("#565352");
  const pawnBlackD7 = pawn("#565352");
  const pawnBlackE7 = pawn("#565352");
  const pawnBlackF7 = pawn("#565352");
  const pawnBlackG7 = pawn("#565352");
  const pawnBlackH7 = pawn("#565352");

  const rookBlackA8 = rook("#565352");
  const rookBlackH8 = rook("#565352");
  const knightBlackB8 = knight("#565352");
  const knightBlackG8 = knight("#565352");
  const bishopBlackC8 = bishop("#565352");
  const bishopBlackF8 = bishop("#565352");
  const queenBlack = queen("#565352");
  const kingBlack = king("#565352");

  const [boardArr, setBoardArr] = useState([
    [
      rookBlackA8,
      knightBlackB8,
      bishopBlackC8,
      queenBlack,
      kingBlack,
      bishopBlackF8,
      knightBlackG8,
      rookBlackH8,
    ],
    [
      pawnBlackA7,
      pawnBlackB7,
      pawnBlackC7,
      pawnBlackD7,
      pawnBlackE7,
      pawnBlackF7,
      pawnBlackG7,
      pawnBlackH7,
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
      pawnWhiteA2,
      pawnWhiteB2,
      pawnWhiteC2,
      pawnWhiteD2,
      pawnWhiteE2,
      pawnWhiteF2,
      pawnWhiteG2,
      pawnWhiteH2,
    ],
    [
      rookWhiteA1,
      knightWhiteB1,
      bishopWhiteC1,
      queenWhiteD1,
      kingWhiteE1,
      bishopWhiteF1,
      knightWhiteG1,
      rookWhiteH1,
    ],
  ]);
  const removePossibleMovesFromBoard = () => {
    return [
      ...boardArr.map((row) => {
        for (let i = 0; i < row.length; i++) {
          if (row[i] === 1) {
            row[i] = null;
          }
          if (row[i] && row[i].danger === true) {
            row[i].danger = false;
          }
        }
        return row;
      }),
    ];
  };

  const changeActivePiece = (spot, i, j) => {
    //CLICKING ON SAME PIECE
    if (activePiece && activePiece.i === i && activePiece.j === j) {
      setActivePiece(null);
      //REMOVING ALL 1'S FROM THE MATRIX

      //SETTING BOARD ARRY TO MATRIX WITHOUT 1'S
      setBoardArr(removePossibleMovesFromBoard());
      return;
    }

    //SETTING NEW ACTIVE PIECE
    if (activePiece) setBoardArr(removePossibleMovesFromBoard());
    setActivePiece({
      i,
      j,
      color: spot.color,
      determineMovement: spot.determineMovement,
      image: spot.image,
      name: spot.name,
      movement: spot.movement,
      danger: spot.danger,
    });

    if (boardArr[i][j]) {
      setBoardArr(spot.determineMovement(boardArr, i, j));
    }
  };
  // MOVING PIECE
  const moveActivePiece = (i, j) => {
    let temp = [...boardArr];
    //SETTING OLD SPOT TO NULL
    temp[activePiece.i][activePiece.j] = null;
    //SETTING NEW SPOT TO THE PIECE
    temp[i][j] = null;
    temp[i][j] = activePiece;
    //SETTING THE BOARD
    setBoardArr([...temp]);
    // RESSTING STATES
    removePossibleMovesFromBoard();
    setActivePiece(null);
  };

  return (
    <div className="board">
      <span>Board</span>

      {boardArr.map((row, i) => {
        return (
          <div className="boardRow" key={i}>
            {/* INDIVIDUAL SPOTS */}
            {row.map((spot, j) => {
              return (
                <div
                  onClick={() => {
                    if (spot && spot.color === "#dfdfdf") {
                      changeActivePiece(spot, i, j);
                    }
                    if (
                      (spot === 1 || (spot && spot.danger === true)) &&
                      activePiece
                    ) {
                      moveActivePiece(i, j);
                    }
                  }}
                  className={
                    (i + j) % 2 === 0 ? "light boardSpot" : "dark boardSpot"
                  }
                  id={spot === 1 || (spot && spot.danger) ? "green" : ""}
                  key={j}
                >
                  {spot && spot !== 1 && (
                    <spot.image
                      size={"60px"}
                      style={{ color: spot.color }}
                      className="piece"
                    />
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
