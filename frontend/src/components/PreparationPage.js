import React from "react";

function Board({ height, width }) {
    return (
        <div className="board">
            {Array(height).fill().map((_, row) => (
                <div key={row} className="boardRow">
                    {Array(width).fill().map((_, col) => (
                        <div key={col} className="boardCell" />
                    ))}
                </div>
            ))}
        </div>
    );
}

function Battleships({ battleships, selectedBattleshipIndex, onBattleshipClick }) {
    return (
        <div className="battleships">
            {battleships.map((battleship, i) => (
                <div key={i} className={i === selectedBattleshipIndex ? "selectedBattleshipArea" : undefined}>
                    <div
                        className={battleship.placed ? "placedBattleship" : "battleship"}
                        onClick={() => onBattleshipClick(i)}
                    >
                        {Array(battleship.size).fill().map((_, j) => (
                            <div key={j} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function PreparationPage() {
    const [selectedBattleshipIndex, setSelectedBattleshipIndex] = React.useState(-1);

    return (
        <div className="preparationPage">
            <h1>Prepare Your Board</h1>
            <button className="readyButton">Ready To Play</button>
            <div className="boardArea">
                <Board height={12} width={12} />
                <Battleships
                    battleships={[{ size: 2 }, { size: 3, placed: true }, { size: 3 }, { size: 4 }, { size: 5 }]}
                    selectedBattleshipIndex={selectedBattleshipIndex}
                    onBattleshipClick={setSelectedBattleshipIndex}
                />
            </div>
        </div>
    );
}

export default PreparationPage;
