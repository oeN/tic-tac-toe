import React from 'react';

const Result = function(props) {
  let payoff = props.result !== 0 ? `Player ${props.result} Win!` : "It's a Draw!"
  return ( <h1>{payoff}</h1> )
}

export default Result;
