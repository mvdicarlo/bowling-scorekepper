import Game from './game.abstract';

export default class Bowling extends Game {
  constructor(protected input: string) {
    super(input);
  }

  public getScore(): number {
    throw new Error('Method not implemented.');
  }
}
