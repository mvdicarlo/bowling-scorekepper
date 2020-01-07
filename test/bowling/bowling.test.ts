import { expect } from 'chai';
import 'mocha';
import Bowling from '../../src/games/bowling/bowling';

describe('Bowling Game', () => {
  it('should equal perfect game (300)', () => {
    const game: Bowling = new Bowling('X-X-X-X-X-X-X-X-X-XXX');
    expect(game.getScore()).to.equal(300);
  });

  it('should equal 0', () => {
    const game: Bowling = new Bowling('00-00-00-00-00-00-00-00-00-00');
    expect(game.getScore()).to.equal(0);
  });

  it('should equal 90', () => {
    const game: Bowling = new Bowling('45-54-36-27-09-63-81-18-90-72');
    expect(game.getScore()).to.equal(90);
  });

  it('should equal 150', () => {
    const game: Bowling = new Bowling('5/-5/-5/-5/-5/-5/-5/-5/-5/-5/-5');
    expect(game.getScore()).to.equal(150);
  });

  it('should equal 190', () => {
    const game: Bowling = new Bowling('1/-1/-1/-1/-1/-1/-1/-1/-1/-1/-9');
    expect(game.getScore()).to.equal(190);
  });
});
