import { Turn } from '../interfaces/turn.interface';
import Bowling from './bowling';
import { BowlingFrameType } from './bowling-frame.enum';

export default class BowlingFrame implements Turn {
  private turn: number;
  private bowlingThrows: number[] = [];
  private frameType: BowlingFrameType;

  constructor(private game: Bowling, turn: number, value: string) {
    this.turn = turn;
    this.calculateThrows(value.toLowerCase().trim());
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
    if (value[0] === 'x') {
      this.frameType = BowlingFrameType.STRIKE;
    } else if (value.includes('/')) {
      this.frameType = BowlingFrameType.SPARE;
    } else {
      this.frameType = BowlingFrameType.OPEN;
    }

    const values: number[] = [];
    Array.from(value).forEach((v: string, index: number) => {
      if (v === 'x') {
        values.push(10);
      } else if (v === '/') {
        values.push(10 - values[index - 1]);
      } else {
        values.push(parseInt(v, 10) || 0);
      }
    });

    this.bowlingThrows = values;

    // Requirement: Spare when the bowler knocks down all 10 pins using two throws
    if (this.getFrameType() === BowlingFrameType.OPEN) {
      if (this.bowlingThrows[0] + this.bowlingThrows[1] === 10) {
        this.frameType = BowlingFrameType.SPARE;
      }
    }

    if (this.getTurnNumber() !== 10) {
      this.bowlingThrows = this.bowlingThrows.slice(0, 2);
    }
  }
}
