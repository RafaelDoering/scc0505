export default class Automaton {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  private numberOfStates: number = 0;
  private terminalSymbols: string[] = [];
  private initialStates: number[] = [0];
  private acceptanceStates: number[] = [];
  private transitions: Transition[] = [];

  setNumberOfStates(numberOfStates: number): void {
    this.numberOfStates = numberOfStates;
  }

  addTerminalSymbol(terminalSymbol: string): void {
    this.terminalSymbols.push(terminalSymbol);
  }

  addInitialState(state: number): void {
    this.initialStates.push(state);
  }

  addAcceptanceState(state: number): void {
    this.acceptanceStates.push(state);
  }

  addTransition(transition: Transition): void {
    this.transitions.push(transition);
  }

  processChain(chain: string): boolean {
    for (const initialState of this.initialStates) {
      if (this.isAccepted(initialState, chain)) {
        return true;
      }
    }

    return false;
  }

  private isAccepted(initialState: number, chain: string): boolean {
    const characters = chain.split('');
    let currentState = initialState;

    if (characters[0] === '-') {
      return this.acceptanceStates.includes(currentState);
    }

    for (const currentCharacter of characters) {
      const transiction = this.transitions.find(({ start, character }) => {
        return currentState === start && currentCharacter === character;
      });

      if (transiction) {
        currentState = transiction.end;
      } else {
        return false;
      }
    }

    return this.acceptanceStates.includes(currentState);
  }
}

type Transition = {
  start: number;
  character: string;
  end: number;
}