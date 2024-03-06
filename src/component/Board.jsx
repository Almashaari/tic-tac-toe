import React from "react";
import Strike from "./Strike";
import Tile from "./Tile";

function Board() {
  return (
<div className="container">
<Tile />
<Tile />
<Tile />
<Tile />
<Tile />
<Tile />
<Tile />
<Tile />
<Tile />
<Strike />
</div>
  );
}

export default Board;