import React, { useState } from "react";
import { bishop, pawn, rook, knight, queen, king } from "../../pieces/pieces";
import "./board.css";

const Board = () => {
  const [activePiece, setActivePiece] = useState(null);

  const pawnUser = pawn("#dfdfdf");
  const rookUser = rook("#dfdfdf");
  const bishopUser = bishop("#dfdfdf");
  const knightUser = knight("#dfdfdf");
  const queenUser = queen("#dfdfdf");
  const kingUser = king("#dfdfdf");

  const pawnOpp = pawn("#565352");
  const rookOpp = rook("#565352");
  const bishopOpp = bishop("#565352");
  const knightOpp = knight("#565352");
  const queenOpp = queen("#565352");
  const kingOpp = king("#565352");

  const [boardArr, setBoardArr] = useState([
    [
      rookOpp,
      knightOpp,
      bishopOpp,
      queenOpp,
      kingOpp,
      bishopOpp,
      knightOpp,
      rookOpp,
    ],
    [pawnOpp, pawnOpp, pawnOpp, pawnOpp, pawnOpp, pawnOpp, pawnOpp, pawnOpp],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
      pawnUser,
      pawnUser,
      pawnUser,
      pawnUser,
      pawnUser,
      pawnUser,
      pawnUser,
      pawnUser,
    ],
    [
      rookUser,
      knightUser,
      bishopUser,
      queenUser,
      kingUser,
      bishopUser,
      knightUser,
      rookUser,
    ],
  ]);
  const removePossibleMovesFromBoard = () => {
    return [
      ...boardArr.map((row) => {
        for (let i = 0; i < row.length; i++) {
          if (row[i] === 1) {
            row[i] = null;
          }
          //                   FIX THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          //   if (row[i].danger === true) {
          //     row[i].danger = false;
          //   }
        }
        return row;
      }),
    ];
  };

  const changeActivePiece = (spot, i, j) => {
    //CLICKING ON SAME PIECE
    if (activePiece && activePiece.i == i && activePiece.j == j) {
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
    console.log(activePiece);
    let temp = [...boardArr];
    //SETTING OLD SPOT TO NULL
    temp[activePiece.i][activePiece.j] = null;
    //SETTING NEW SPOT TO THE PIECE
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
                    if (spot && spot.color == "#dfdfdf") {
                      changeActivePiece(spot, i, j);
                    }
                    if (spot === 1 && activePiece) {
                      moveActivePiece(i, j);
                    }
                  }}
                  className={
                    (i + j) % 2 === 0 ? "light boardSpot" : "dark boardSpot"
                  }
                  id={spot === 1 || (spot && spot.danger) ? "green" : ""}
                  key={j}
                >
                  {spot && spot != 1 && (
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
