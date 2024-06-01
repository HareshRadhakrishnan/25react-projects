import React, { useEffect, useState } from "react";
import Tile from "./tile";
import "./styles.css";

// 012
// 345
// 678
export default function TicTacToe() {
  const [tiles, setTiles] = useState([...Array(9).fill("")]);
  const [isXplaying, setIsXplaying] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  useEffect(() => {
    CheckWinner();
  }, [isXplaying]);

  function HandleRestart() {
    setWinner(null);
    setTiles([...Array(9).fill("")]);
    setIsXplaying(true);
  }
  function CheckWinner() {
    const winningPatterns = [
      [0, 2, 1],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];
    winningPatterns.map((i) => {
      const [x, y, z] = i;
      const won =
        tiles[x].length > 0 && tiles[x] === tiles[y] && tiles[x] === tiles[z];
      if (won && tiles[x] === "X") {
        setWinner("X");
      } else if (won && tiles[x] === "O") {
        setWinner("O");
      }
    });
  }
  if (tiles.filter((i) => i === "").length === 0) {
    setIsDraw(true);
  }
  function Onclick(index) {
    if (tiles[index] !== "" || winner !== null) {
      return null;
    }
    tiles[index] =
      tiles[index].length > 0 ? tiles[index] : isXplaying ? "X" : "O";
    setIsXplaying(!isXplaying);
  }
  function GetBoard() {
    var count = -1;
    const row = () =>
      Array(3)
        .fill("")
        .map(() => {
          count++;
          return (
            <Tile whenClicked={Onclick} index={count} value={tiles[count]} />
          );
        });
    const board = () =>
      Array(3)
        .fill("")
        .map(() => <div className="row">{row()}</div>);

    return <div className="ttt-grid-container">{board()}</div>;
  }

  return (
    <div>
      {GetBoard()}
      {winner && <h2>match won by {winner}</h2>}
      {isDraw
        ? () => {
            setIsDraw(false);
            HandleRestart();
            return <h1>Match is Draw</h1>;
          }
        : null}
      {(!winner || !isDraw) && (
        <h2>It's Player {isXplaying ? "X" : "O"} 's turn</h2>
      )}
      <button onClick={HandleRestart}>Restart</button>
    </div>
  );
}
