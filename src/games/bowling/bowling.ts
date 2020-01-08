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
    this.frames = framesInput
      .split('-')
      .map((frame: string, index: number) => new BowlingFrame(this, index + 1, frame.trim()));
  }
}
