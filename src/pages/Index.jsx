// Othello game implementation using Chakra UI
import { Button, Grid, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const initialBoard = Array(8).fill(null).map(() => Array(8).fill(null));
  initialBoard[3][3] = 'white';
  initialBoard[3][4] = 'black';
  initialBoard[4][3] = 'black';
  initialBoard[4][4] = 'white';

  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('black');

  const handleCellClick = (row, col) => {
    // Placeholder for game logic
    const newBoard = [...board];
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'black' ? 'white' : 'black');
  };

  return (
    <>
      <Grid templateColumns="repeat(8, 1fr)" gap={1}>
        {board.map((row, rowIndex) => row.map((cell, colIndex) => (
          <Button key={`${rowIndex}-${colIndex}`} 
                  colorScheme={cell ? (cell === 'black' ? 'black' : 'white') : 'gray'} 
                  style={{ backgroundColor: cell, color: cell === 'black' ? 'white' : 'black', fontWeight: 'bold' }}
                  onClick={() => handleCellClick(rowIndex, colIndex)}>
            {cell ? cell[0].toUpperCase() : ''}
          </Button>
        )))}
      </Grid>
      <div>Current Player: {currentPlayer}</div>
    </>
  );
};

export default Index;