import React from 'react';

const Cell = function(props) {
  let { index, checked, inWinCombination, onClick } = props
  let attr = { className: `cell ${inWinCombination ? 'highlight' : ''} ${checked ? `checked-${checked}` : ""}` }
  if (onClick) attr.onClick = () => { onClick(index) }

  return (<div {...attr} />)
}

export default Cell;
