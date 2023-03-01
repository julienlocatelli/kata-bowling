import Game from "./Game";

let game;
const rollMany = (nbRoll, score, game) => {
  for (let i = 0; i < nbRoll; i++) {
    game.roll(score);
  }
};
describe("#Bowling game", () => {
  beforeEach(() => {
    game = new Game();
  });

  it("should score 0 for gutter game", () => {
    rollMany(20, 0, game);

    expect(game.score).toEqual(0);
  });

  it("should score 20 for all ones game", () => {
    rollMany(20, 1, game);

    expect(game.score).toEqual(20);
  });

  it("should score 16 for a spare followed by a 3 ball", () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(17, 0, game);

    expect(game.score).toEqual(16);
  });

  it("should score 24 for a strike followed by a 3 and a 4 ball", () => {
    game.roll(10);
    game.roll(3);
    game.roll(4);
    rollMany(16, 0, game);

    expect(game.score).toEqual(24);
  });

  it("should score 300 for perfect game", () => {
    rollMany(12, 10, game);

    expect(game.score).toEqual(300);
  });
});
