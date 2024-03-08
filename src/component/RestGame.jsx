import React, { useState } from 'react';

function RestGame() {
    const [isMouseOver,setMouseOver]= useState(false);
    //this line to refresh the page.
    const handleRefreshClick = () => {
        window.location.reload();
    };
function handleMouseOver(){
    setMouseOver(true);
}
function handleMouseOut(){
    setMouseOver(false);
}
    return (
            <button 
            style={{backgroundColor : isMouseOver ? "white" : "black"}} 
            className="rest-game" 
            onClick={handleRefreshClick} 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            >Rest Game</button>
    );
}

export default RestGame;
