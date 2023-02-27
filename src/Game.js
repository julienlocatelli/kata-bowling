class Game {
  constructor() {
    this._score = 0;
  }

  /**
   * @param {number} pins
   * @return {void}
   */
  roll(pins) {}

  /**
   * @returns {number} the final score of one game
   */
  get score() {
    return this._score;
  }
}

export default Game;
