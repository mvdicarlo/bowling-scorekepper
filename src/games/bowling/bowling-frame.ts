import { Turn } from '../interfaces/turn.interface';
import Bowling from './bowling';
import { BowlingFrameType } from './bowling-frame.enum';

export default class BowlingFrame implements Turn {
  private turn: number;
  private bowlingThrows: number[] = [];
  private frameType: BowlingFrameType;

  constructor(private game: Bowling, turn: number, value: string) {
    this.turn = turn;
    this.calculateThrows(value.toLocaleLowerCase().trim());
  }

  public getTotalFrameValue(): number {
    return this.bowlingThrows.reduce((accumulator, current) => accumulator + current, 0);
  }

  public getTurnScore(): number {
    let value: number = this.getTotalFrameValue();
    let additionalFrame1: BowlingFrame;

    switch (this.frameType) {
      case BowlingFrameType.STRIKE:
      case BowlingFrameType.SPARE:
        additionalFrame1 = this.game.getFrame(this.turn + 1);
        break;
    }

    if (this.turn !== 10) {
      if (additionalFrame1) {
        value += additionalFrame1.getThrow(0);
        if (this.frameType === BowlingFrameType.STRIKE) {
          const secondThrow = additionalFrame1.getThrow(1);
          value +=
            secondThrow !== undefined ? secondThrow : this.game.getFrame(this.turn + 2).getThrow(0);
        }
      }
    }

    return value;
  }

  public getTurnNumber(): number {
    return this.turn;
  }

  public getThrow(throwNumber: number): number {
    return this.bowlingThrows[throwNumber];
  }

  public getFrameType(): BowlingFrameType {
    return this.frameType;
  }

  private calculateThrows(value: string): void {
    if (value.includes('x')) {
      this.frameType = BowlingFrameType.STRIKE;
      this.bowlingThrows = Array.from(value).map((v) => {
        if (v === 'x') {
          return 10;
        }
        return parseInt(v, 10);
      });
    } else if (value.includes('/')) {
      this.frameType = BowlingFrameType.SPARE;
      const thrown = Array.from(value).map((v) => {
        if (v === 'x') {
          return 10;
        } else if (v === '/') {
          return -1;
        }
        return parseInt(v, 10);
      });
      thrown[1] = 10 - thrown[0];
      this.bowlingThrows = thrown;
    } else {
      this.frameType = BowlingFrameType.OPEN;
      this.bowlingThrows = [parseInt(value[0], 10) || 0, parseInt(value[1], 10) || 0];
    }
  }
}
