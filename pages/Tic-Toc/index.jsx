"use client";
import React, { useState } from 'react'

const Hello = () => {
  const [state, setstate] = useState(Array(9).fill(null))
  const [isXturn, setisturn] = useState(true)

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  }

  const isWinner = checkWinner();


  const handleclick = (index) => {
    if (state[index] !== null) {
      return;
    }
    console.log(state)
    const copyState = { ...state }
    copyState[index] = isXturn ? "x" : "o"
    setstate(copyState);
    setisturn(!isXturn);
  }

  const handlereset = () => {
    setstate(Array(9).fill(null))
  }


  return (
    <div >
      <div className='board-contsiner'>
        <h1>Tic-Toc Game </h1>
        {isWinner ? (<>{isWinner} is win <button onClick={handlereset}>Play again</button>  </>) : (<>
          <h4>Player {isXturn ? "x" : "o"} please move </h4>
          <div className="bord-row">
            <Squre onclick={() => handleclick(0)} value={state[0]} />
            <Squre onclick={() => handleclick(1)} value={state[1]} />
            <Squre onclick={() => handleclick(2)} value={state[2]} />
          </div>
          <div className="bord-row">
            <Squre onclick={() => handleclick(3)} value={state[3]} />
            <Squre onclick={() => handleclick(4)} value={state[4]} />
            <Squre onclick={() => handleclick(5)} value={state[5]} />
          </div>
          <div className="bord-row">
            <Squre onclick={() => handleclick(6)} value={state[6]} />
            <Squre onclick={() => handleclick(7)} value={state[7]} />
            <Squre onclick={() => handleclick(8)} value={state[8]} />
          </div>
        </>)}
      </div>
    </div>
  )
}

const Squre = (props) => {
  return (
    <>
      <div className="square"
        onClick={props.onclick}
        style={{ border: "1px solid ", height: "100px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1>{props.value}</h1>
      </div>
    </>
  )
}

export default Hello
