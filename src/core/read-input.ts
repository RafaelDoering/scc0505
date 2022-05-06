import Input from "../ports/input";
import Automaton from "./automaton";

export default class ReadInput {
  constructor(public input: Input) { }

  public async readInput(): Promise<{ automaton: Automaton, chains: string[] }> {
    const automaton = new Automaton();

    automaton.addInitialState(0);

    automaton.setNumberOfStates(await this.input.getNumber("Numero de estados:"));

    const numberOfTerminalSymbols = await this.input.getNumber("Numero de simbolos terminais:");
    for (let i = 0; i < numberOfTerminalSymbols; i++) {
      automaton.addTerminalSymbol(await this.input.getChar(`Simbolo terminal ${i + 1}:`));
    }

    const numberOfAcceptanceStates = await this.input.getNumber("Numero de estados de aceitacao:");
    for (let i = 0; i < numberOfAcceptanceStates; i++) {
      automaton.addAcceptanceState(await this.input.getNumber(`Estado de aceitacao ${i + 1}:`));
    }

    const numberOfTransitions = await this.input.getNumber("Numero de transicoes:");
    for (let i = 0; i < numberOfTransitions; i++) {
      const start = await this.input.getNumber(`Inicio da transicao ${i + 1}:`);
      const character = await this.input.getChar(`Caracter da transicao ${i + 1}:`);
      const end = await this.input.getNumber(`Fim da transicao ${i + 1}:`);

      automaton.addTransition({
        start,
        character,
        end
      });
    }

    const numberOfChains = await this.input.getNumber("Numero de cadeias de entrada:");

    const chains = [];
    for (let i = 0; i < numberOfChains; i++) {
      chains.push(await this.input.getChar(`Cadeia ${i + 1}:`));
    }

    return {
      automaton,
      chains,
    };
  }
}