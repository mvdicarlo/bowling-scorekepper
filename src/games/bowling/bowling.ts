import Game from '../game.abstract';
import BowlingFrame from './bowling-frame';

export default class Bowling extends Game {
  private frames: BowlingFrame[] = [];

  constructor(protected input: string) {
    super(input);
    this.parseFrames(input);
  }

  public getScore(): number {
    return this.frames.reduce((accumulator, current) => accumulator + current.getTurnScore(), 0);
  }

  public getFrame(frameNumber: number): BowlingFrame | undefined {
    return this.frames.slice(0, 10).find((f: BowlingFrame) => f.getTurnNumber() === frameNumber);
  }

  private parseFrames(framesInput: string): void {
    framesInput
      .split('-')
      .forEach((frame: string) => {
      this.frames.push(new BowlingFrame(this, this.frames.length + 1, frame));
    });
  }
}
