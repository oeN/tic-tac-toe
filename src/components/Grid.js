import React, { Component } from 'react';
import Cell from './Cell';
import Player from './Player';
import Result from './Result';

const WINS_CONDITIONS = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ]

class Grid extends Component {
  constructor() {
    super();
    this.state = this.getDefaultState();
    this.onCellClick = this.onCellClick.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  getDefaultState() {
    return {
      cells: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      player: 1,
      result: 0,
      winCombination: []
    }
  }

  onCellClick(index) {
    let { cells, player, result, winCombination } = this.state;
    cells = cells.slice(0, cells.length);
    cells[index] = player;
    winCombination = this.checkResult(cells, player, index);
    result = winCombination.length > 0 ? player : 0
    player = player === 1 ? 2 : 1;
    this.setState({ cells, player, result, winCombination });
  }

  checkResult(cells, player, clickedCellIndex){
    var i, c;
    var conditions = WINS_CONDITIONS.filter(function(condition){
      return condition.indexOf(clickedCellIndex) > -1;
    })
    for(i = 0; i < conditions.length; i++){
      c = conditions[i];
      if (this.checkCombination(cells, c[0], c[1], c[2], [player, player, player].join(''))){
        console.log(`Player ${player} win`);
        return c;
      }
    }
    return [];
  }

  checkCombination(cells, i1, i2, i3, match){
    return [cells[i1], cells[i2], cells[i3]].join('') === match;
  }

  renderCell(index, checked){
    let { result, winCombination } = this.state
    let key  = index
    let inWinCombination = winCombination.indexOf(index) > -1
    let attr = { key, index, checked, inWinCombination }
    if (!checked && result === 0) attr.onClick = this.onCellClick

    return (<Cell {...attr} />);
  }

  newGame(){
    this.setState(this.getDefaultState());
  }

  render() {
    let { cells, player, result } = this.state
    let hasGameEnded = result !== 0 || cells.indexOf(0) === -1

    return (
      <div>
        { hasGameEnded ? <Result result={result} /> : <Player player={player} />}
        <div className="Grid">
          {cells.map((val, i) => ( this.renderCell(i, val) ))}
        </div>
        { hasGameEnded ? <button className='new-game' onClick={this.newGame}>New Game</button> : null}
      </div>
    );
  }
}

export default Grid;
