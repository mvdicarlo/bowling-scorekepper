import { expect } from 'chai';
import 'mocha';
import Bowling from '../../src/games/bowling/bowling';
import { BowlingFrame } from '../../src/games/bowling/bowling-frame.enum';
import BowlingTurn from '../../src/games/bowling/bowling-turn';

describe('Bowling Turn', () => {
  const game: Bowling = new Bowling('');
  it('should be a strike', () => {
    const turn: BowlingTurn = new BowlingTurn(game, 1, 'X');
    expect(turn.getFrameType()).to.equal(BowlingFrame.STRIKE);
    expect(turn.getThrow(0)).to.equal(10);
  });

  it('should be a spare', () => {
    const turn: BowlingTurn = new BowlingTurn(game, 1, '3/');
    expect(turn.getFrameType()).to.equal(BowlingFrame.SPARE);
    expect(turn.getThrow(0)).to.equal(3);
    expect(turn.getThrow(1)).to.equal(7);
  });

  it('should be an open frame', () => {
    const turn: BowlingTurn = new BowlingTurn(game, 1, '35');
    expect(turn.getFrameType()).to.equal(BowlingFrame.OPEN);
    expect(turn.getThrow(0)).to.equal(3);
    expect(turn.getThrow(1)).to.equal(5);
  });
});
