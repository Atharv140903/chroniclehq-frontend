// src/state/editorMachine.ts
import { createMachine } from "xstate";

export const editorMachine = createMachine({
  id: "editor",
  initial: "idle",
  states: {
    idle: {
      on: {
        CONTINUE: "generating",
      },
    },
    generating: {
      on: {
        SUCCESS: "idle",
        FAILURE: "error",
      },
    },
    error: {
      on: {
        RETRY: "generating",
        RESET: "idle",
      },
    },
  },
});
