import React from "react";

function GamePage() {
    const yourTurn = Math.random() > 0.5;
    return (
        <div>
            <h1>{yourTurn ? "This is Your Turn!" : "Wait While Your Opponent Does His Turn"}</h1>
            <div className="gamePage">

            </div>
        </div>
    );
}

export default GamePage;