export default abstract class Game {
  constructor(protected input: string) {}

  public abstract getScore(): number;

  public printScore(): void {
    console.log(`The score is: ${this.getScore()}`);
  }
}
