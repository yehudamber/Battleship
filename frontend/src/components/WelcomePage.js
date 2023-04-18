import React from "react";

export default function WelcomePage() {
    return (
        <div>
            <h1>Welcome to Battleship!</h1>
            <div className="buttonArea">
                <button id="newGameButton">New Game</button>
                <button id="joinGameButton">Join Game</button>
                <div>
                    <label htmlFor="gameIdInput">Game Id:</label>
                    <input type="text" id="gameIdInput" />
                </div>
            </div>
        </div>
    );
}