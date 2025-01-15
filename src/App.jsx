import { useState } from "react";
import Board from "./Components/Board";
import Player from "./Components/Player";


function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelect() {
    setActivePlayer((currentPlayer) => (currentPlayer === 'X' ? 'O' : 'X'));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <Board onSelect={handleSelect} activePlayerSymbol={activePlayer} />
      </div>
    </main>
  );
}

export default App
