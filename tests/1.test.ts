import Automaton from "../src/core/automaton";

test('Ex 1', () => {
  const automaton = new Automaton;

  const numberOfStates = 3
  automaton.setNumberOfStates(numberOfStates);

  const terminalSymbols = ["a", "b"];
  for (const terminalSymbol of terminalSymbols) {
    automaton.addTerminalSymbol(terminalSymbol);
  }

  const acceptanceStates = [2];
  for (const acceptanceState of acceptanceStates) {
    automaton.addAcceptanceState(acceptanceState);
  }

  const transitions = [
    {
      start: 0,
      character: "a",
      end: 1,
    },
    {
      start: 0,
      character: "b",
      end: 1,
    },
    {
      start: 1,
      character: "a",
      end: 1,
    },
    {
      start: 1,
      character: "b",
      end: 2,
    },
    {
      start: 2,
      character: "a",
      end: 0,
    },
    {
      start: 2,
      character: "b",
      end: 2,
    },
  ];
  for (const transition of transitions) {
    automaton.addTransition(transition);
  }

  const chains = [
    "abbbba",
    "aabbbb",
    "bbabbabbabbb",
    "bbbbbbbbbbb",
    "-",
    "abababababab",
    "bbbbaabbbb",
    "abba",
    "a",
    "aaa",
  ];

  const expectedResult = [
    false,
    true,
    true,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
  ];

  const result = [];
  for (const chain of chains) {
    result.push(automaton.processChain(chain));
  }

  expect(result).toEqual(expectedResult);
});