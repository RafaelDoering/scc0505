import PromptsAdapter from "./adapters/prompts-adapter";
import ReadInput from "./core/read-input";

const proptsAdapter = new PromptsAdapter();
const readInput = new ReadInput(proptsAdapter);

async function main(): Promise<void> {
  const {
    automaton,
    chains,
  } = await readInput.readInput();

  for (const chain of chains) {
    if (automaton.processChain(chain)) {
      console.log("aceita");
    } else {
      console.log("rejeita");
    }
  }
}

main();
