import { assert, expect } from 'chai';
import 'mocha';
import Bowling from '../src/games/bowling';

describe('Bowling Game', () => {
  it('should throw an exception on empty input', () => {
    try {
      const game: Bowling = new Bowling('');
      assert.fail();
    } catch (error) {
      expect(error.message).to.equal('No input provided');
    }
  });
});
