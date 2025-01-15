export default function Board({ onSelect, board }) {
    /*
    const [gameboard, setGameboard] = useState(initialGameBoard);

    function handleSelect(rowIndex, colIndex) {
        setGameboard((gameboard) => {
            const currentBoard = [...gameboard.map(innerArray => [...innerArray])];
            currentBoard[rowIndex][colIndex] = activePlayerSymbol   ;
            return currentBoard;
        });

        onSelect();
    }
        */

    return(
        <ol id="game-board">
            {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                        <button 
                        onClick={() => onSelect(rowIndex, colIndex)} 
                        disabled={playerSymbol !== null}>
                            {playerSymbol}
                        </button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}