import prompts from 'prompts';

import Input from '../ports/input';

export default class PromptsAdapter implements Input {
  async getNumber(message: string): Promise<number> {
    return (await prompts([
      {
        type: 'number',
        name: 'value',
        message,
      }
    ])).value;
  }
  async getChar(message: string): Promise<string> {
    return (await prompts([
      {
        type: 'text',
        name: 'value',
        message,
      }
    ])).value;
  }

}