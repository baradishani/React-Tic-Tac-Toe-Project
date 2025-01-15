import { useState } from "react";
import Board from "./Components/Board";
import Log from "./Components/Log";
import Player from "./Components/Player";
import { WINNING_COMBINATIONS } from "./COMBINATIONS";
import GameOver from "./Components/GameOver";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
      if (gameTurns.length > 0 && gameTurns[0].player === 'X')
        currentPlayer = 'O';
  return currentPlayer;
}

const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

function deriveWinner(gameboard, players) {
  let winner = null;

  for (const combination of WINNING_COMBINATIONS){
    const firstSquare = gameboard[combination[0].row][combination[0].column];
    const secondSquare = gameboard[combination[1].row][combination[1].column];
    const thirdSquare = gameboard[combination[2].row][combination[2].column];

    if (firstSquare && 
      firstSquare === secondSquare && 
      firstSquare === thirdSquare){
        winner = players[firstSquare];
    }
  };

  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameboard = [...initialGameBoard.map(arr => [...arr])];

  for (const turn of gameTurns){
      const { square, player } = turn;
      const { row, col } = square;
      gameboard[row][col] = player;
  };
  return gameboard;
}

function App() {
  const [ gameTurns, setGameTurns ] = useState([]);
  const [ players, setPlayers] = useState({
    'X' : 'Player 1',
    'O' : 'Player 2',
  });
  const gameboard = deriveGameBoard(gameTurns);
  const activePlayer = deriveActivePlayer(gameTurns);
  const winner = deriveWinner(gameboard, players);
  const isDraw = (gameTurns.length === 9 && !winner);

  function handleSelect(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      
      const currentPlayer = deriveActivePlayer(prevTurns);

      const currentTurns = [
        { square: {row : rowIndex, col : colIndex}, player: activePlayer },
        ...prevTurns
      ];
      return currentTurns;
    });
  }

  function handlePlayAgain() {
    setGameTurns([]);
  };

  function handleNameChange(symbol, newName) {
    setPlayers(prevNames => {
      return {
        ...prevNames,
        [symbol]: newName
      };
    });
  }

  return (
    <main>
      <div id="game-container">
      {(winner || isDraw) && <GameOver winner={winner} restart={handlePlayAgain} />}
        <ol id="players" className="highlight-player">
          <Player 
          initName="Player 1" 
          symbol="X" 
          isActive={activePlayer === 'X'}
          onNameChange={handleNameChange}
          />
          <Player 
          initName="Player 2" 
          symbol="O" 
          isActive={activePlayer === 'O'}
          onNameChange={handleNameChange}
          />
        </ol>
        <Board onSelect={handleSelect} board={gameboard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App
