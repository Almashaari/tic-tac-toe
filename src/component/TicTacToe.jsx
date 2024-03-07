import React, { useState } from 'react';
import Board from './Board';

const PlayerX ="X";
const PlayerO ="O";
function TicTacToe() {

    const [tiles,setTiles] = useState(Array(9).fill(null));
const [playerTurn,setPlayerTurn] = useState(PlayerX)
    const handleTileClick = (index) =>{
        if(tiles[index] !== null){
            return;
        }
        
        const newTiles = [...tiles]
        newTiles[index] =playerTurn;
        setTiles(newTiles)
        if(playerTurn === PlayerX){
            setPlayerTurn(PlayerO)
        } else {
            setPlayerTurn(PlayerX)
        }
      }
    return ( <div>
        <h1>Tic Tac Toe</h1>
        <Board tiles={tiles} onTileClick={handleTileClick}/>
    </div> );
}

export default TicTacToe;