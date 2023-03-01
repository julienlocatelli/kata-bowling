class Game {
  constructor() {
    this._roll = [];
  }

  /**
   * @param {number} pins
   * @return {void}
   */
  roll(pins) {
    this._roll.push(pins);
  }

  /**
   * @returns {number} the final score of one game
   */
  get score() {
    let score = 0;

    let i = 0;
    for (let turn = 0; turn < 10; turn++) {
      if (this._roll[i] === 10) {
        score += 10 + this._roll[i + 1] + this._roll[i + 2];
        i += 1;
      } else {
        if (this._roll[i] + this._roll[i + 1] === 10) {
          score += 10 + this._roll[i + 2];
        } else {
          score += this._roll[i] + this._roll[i + 1];
        }
        i += 2;
      }
    }
    return score;
  }
}

export default Game;
