import React, { useState } from 'react'

const MemoryGame = () => {
    const [gridSize, setGridSize] = useState(4);
    const [cards, setCards] = useState([]);

    const [flipped, setFlipped] = useState([]);
    const [solved, setSolved] = useState([]);
    const [disabled, setDisabled] = useState(false);

    const [won, setWon] = useState(false);
  return (
    <div>MemoryGame</div>
  )
}

export default MemoryGame