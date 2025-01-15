import { useState } from "react";

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function Board({ onSelect, activePlayerSymbol }) {
    const [gameboard, setGameboard] = useState(initialGameBoard);

    function handleSelect(rowIndex, colIndex) {
        setGameboard((gameboard) => {
            const currentBoard = [...gameboard.map(innerArray => [...innerArray])];
            currentBoard[rowIndex][colIndex] = activePlayerSymbol;
            return currentBoard;
        });

        onSelect();
    }

    return(
        <ol id="game-board">
            {gameboard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                        <button onClick={() => handleSelect(rowIndex,colIndex)}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}