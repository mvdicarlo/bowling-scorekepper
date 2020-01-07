import { Turn } from '../interfaces/turn.interface';
import Bowling from './bowling';
import { BowlingFrame } from './bowling-frame.enum';

export default class BowlingTurn implements Turn {
  private turn: number;
  private bowlingThrows: number[] = [];
  private frameType: BowlingFrame;

  constructor(private game: Bowling, turn: number, value: string) {
    this.turn = turn;
    this.calculateThrows(value.toLocaleLowerCase().trim());
  }

  public getTurnNumber(): number {
    return this.turn;
  }

  public getThrow(throwNumber: number): number {
    return this.bowlingThrows[throwNumber] || 0;
  }

  public getFrameType(): BowlingFrame {
    return this.frameType;
  }

  private calculateThrows(value: string): void {
    if (value.includes('x')) {
      this.frameType = BowlingFrame.STRIKE;
      this.bowlingThrows = [10, 0];
    } else if (value.includes('/')) {
      this.frameType = BowlingFrame.SPARE;
      const firstThrow: number = parseInt(value[0], 10);
      this.bowlingThrows = [firstThrow, 10 - firstThrow];
    } else {
      this.frameType = BowlingFrame.OPEN;
      this.bowlingThrows = [parseInt(value[0], 10), parseInt(value[1], 10)];
    }
  }
}
