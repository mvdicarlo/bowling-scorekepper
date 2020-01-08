import { expect } from 'chai';
import 'mocha';
import Bowling from '../../src/games/bowling/bowling';
import BowlingFrame from '../../src/games/bowling/bowling-frame';
import { BowlingFrameType } from '../../src/games/bowling/bowling-frame.enum';

describe('Bowling Turn', () => {
  const game: Bowling = new Bowling('');
  it('should be a strike', () => {
    const turn: BowlingFrame = new BowlingFrame(game, 1, 'X');
    expect(turn.getFrameType()).to.equal(BowlingFrameType.STRIKE);
    expect(turn.getThrow(0)).to.equal(10);
  });

  it('should be a spare', () => {
    const turn: BowlingFrame = new BowlingFrame(game, 1, '3/');
    expect(turn.getFrameType()).to.equal(BowlingFrameType.SPARE);
    expect(turn.getThrow(0)).to.equal(3);
    expect(turn.getThrow(1)).to.equal(7);
  });

  it('should be an open frame', () => {
    const turn: BowlingFrame = new BowlingFrame(game, 1, '35');
    expect(turn.getFrameType()).to.equal(BowlingFrameType.OPEN);
    expect(turn.getThrow(0)).to.equal(3);
    expect(turn.getThrow(1)).to.equal(5);
  });

  it('should score 30', () => {
    const turn: BowlingFrame = new BowlingFrame(game, 1, 'XXX');
    expect(turn.getTotalFrameValue()).to.equal(30);
  });
});
