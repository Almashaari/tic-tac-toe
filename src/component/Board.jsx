import React from "react";
import Strike from "./Strike";
import Tile from "./Tile";


function Board(props) {
  return (
<div className="container">
<Tile value={props.tiles[0]} onClick={()=>props.onTileClick(0)} className='right-border bottom-border'/>
<Tile value={props.tiles[1]} onClick={()=>props.onTileClick(1)} className='right-border bottom-border'/>
<Tile value={props.tiles[2]} onClick={()=>props.onTileClick(2)} className='bottom-border'/>
<Tile value={props.tiles[3]} onClick={()=>props.onTileClick(3)} className='right-border bottom-border'/>
<Tile value={props.tiles[4]} onClick={()=>props.onTileClick(4)} className='right-border bottom-border'/>
<Tile value={props.tiles[5]} onClick={()=>props.onTileClick(5)} className='bottom-border'/>
<Tile value={props.tiles[6]} onClick={()=>props.onTileClick(6)} className='right-border '/>
<Tile value={props.tiles[7]} onClick={()=>props.onTileClick(7)} className='right-border '/>
<Tile value={props.tiles[8]} onClick={()=>props.onTileClick(8)}/>
<Strike strikeClass={props.strikeClass}/>
</div>
  );
}

export default Board; 