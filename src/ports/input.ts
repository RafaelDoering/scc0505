export default interface Input {
  getNumber(message: string): Promise<number>;
  getChar(message: string): Promise<string>;
}