import React from "react";

function Board({ height, width }) {
    return (
        <div className="board">
            {Array(height).fill().map((_, row) => (
                <div key={row} className="boardRow">
                    {Array(width).fill().map((_, col) => (
                        <button key={col} className="boardCell" />
                    ))}
                </div>
            ))}
        </div>
    );
}

function BattleshipView({ battleships }) {
    return (
        <div className="battleshipView">
            {battleships.map((battleship, i) => (
                <div key={i} className="battleship">
                    {Array(battleship.size).fill().map((_, j) => (
                        <button key={j} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default function PreparingPage() {
    return (
        <div>
            <h1>Prepare Your Board</h1>
            <button className="readyButton">Ready to Start</button>
            <div className="preparingPage">
                <Board height={12} width={12} />
                <BattleshipView battleships={[{ size: 2 }, { size: 3 }, { size: 3 }, { size: 4 }, { size: 5 }]} />
            </div>
        </div>
    );
}