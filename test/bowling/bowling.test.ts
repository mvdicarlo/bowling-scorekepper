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

  it('should equal 118', () => {
    const game: Bowling = new Bowling('1/-1/-1/-1/-1/-1/-1/-1/-1/-1/-9');
    expect(game.getScore()).to.equal(118);
  });

  it('should equal 50', () => {
    const game: Bowling = new Bowling('00-00-00-00-00-00-00-00-1/-XXX');
    expect(game.getScore()).to.equal(50);
  });

  it('should equal 29', () => {
    const game: Bowling = new Bowling('00-00-00-00-00-00-00-00-00-XX9');
    expect(game.getScore()).to.equal(29);
  });

  it('should equal 30', () => {
    const game: Bowling = new Bowling('X-X-00-00-00-00-00-00-00-00');
    expect(game.getScore()).to.equal(30);
  });

  it('should equal 60', () => {
    const game: Bowling = new Bowling('X-X-X-00-00-00-00-00-00-00');
    expect(game.getScore()).to.equal(60);
  });

  it('should equal 14', () => {
    const game: Bowling = new Bowling('00-00-00-00-X-11-00-00-00-00');
    expect(game.getScore()).to.equal(14);
  });

  it('should equal 32', () => {
    const game: Bowling = new Bowling('1/-1/-1/-00-00-00-00-00-00-00');
    expect(game.getScore()).to.equal(32);
  });

  it('should equal 30', () => {
    const game: Bowling = new Bowling('00-00-00-00-00-00-00-00-1/-1/9');
    expect(game.getScore()).to.equal(30);
  });

  it('should equal 20', () => {
    const game: Bowling = new Bowling('00-00-00-00-00-00-00-00-00-X7/');
    expect(game.getScore()).to.equal(20);
  });

  it('should equal 20', () => {
    const game: Bowling = new Bowling('00-00-00-00-00-00-00-00-00-9/X');
    expect(game.getScore()).to.equal(20);
  });

  it('should equal 20', () => {
    const game: Bowling = new Bowling('00-00-00-9/-50-00-00-00-00-00');
    expect(game.getScore()).to.equal(20);
  });

  it('should equal 20', () => {
    const game: Bowling = new Bowling('00-00-00-91-50-00-00-00-00-00');
    expect(game.getScore()).to.equal(20);
  });
});
