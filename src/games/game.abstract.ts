export default abstract class Game {
  constructor(protected input: string) {
    if (!input) {
      throw new Error('No input provided');
    }
  }

  public abstract getScore(): number;

  public printScore(): void {
    console.log(`The score is: ${this.getScore()}`);
  }
}
