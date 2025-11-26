// src/pages/EditorPage.tsx
import { useState } from "react";
import { useMachine } from "@xstate/react";
import { editorMachine } from "../state/editorMachine";
import { Editor } from "../components/Editor";
import { EditorToolbar } from "../components/EditorToolbar";
import { ThemeSelector } from "../components/ThemeSelector";
import { ContinueButton } from "../components/ContinueButton";
import { continueWritingWithAI } from "../services/aiService";

import type { EditorView } from "prosemirror-view";
import { toggleMark } from "prosemirror-commands";
import { schema } from "prosemirror-schema-basic";

export default function EditorPage() {
  const [state, send] = useMachine(editorMachine);
  const isLoading = state.matches("generating");

  const [tone, setTone] = useState("Professional");
  const [editorText, setEditorText] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [editorView, setEditorView] = useState<EditorView | null>(null);

  const runCommand = (fn: (view: EditorView) => void) => {
    if (!editorView) return;
    fn(editorView);
    editorView.focus();
  };

  const handleBold = () => {
    runCommand((view) => {
      toggleMark(schema.marks.strong)(view.state, view.dispatch);
    });
  };

  const handleItalic = () => {
    runCommand((view) => {
      toggleMark(schema.marks.em)(view.state, view.dispatch);
    });
  };

  const handleContinue = async () => {
    if (!editorText.trim() || isLoading) return;

    send({ type: "CONTINUE" });
    setError(null);

    try {
      const aiText = await continueWritingWithAI({
        text: editorText,
        tone,
      });

      setEditorText((prev) => {
        const sep = prev && !prev.endsWith(" ") ? " " : "";
        return prev + sep + aiText;
      });

      send({ type: "SUCCESS" });
    }  catch (err: unknown) {
      const message = err instanceof Error 
        ? err.message 
        : "Something went wrong while generating continuation.";
      setError(message);
      send({ type: "FAILURE" });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--c2)] text-[var(--secondary)] flex flex-col items-center justify-center gap-6 p-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-[var(--accent)] mb-2">AI Assisted Editor</h1>
      
      
      {/* WHOLE BIG BOX */}
      <div className="w-full max-w-6xl bg-[var(--primary)] rounded-lg p-6 shadow-xl flex flex-col gap-5 items-center">
        {/* EDITOR CONTROLS (TOP) */}
        <div className="w-fit">
          <EditorToolbar onBold={handleBold} onItalic={handleItalic} />
        </div>

        {/* EDITOR BOX */}
        <div className="w-full bg-[var(--primary)] rounded-lg p-4">
          <Editor
            value={editorText}
            onChange={setEditorText}
            onReady={setEditorView} 
          />
        </div>
      </div>

      {/* BOTTOM CONTROLS (below big box) */}
      <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div className="w-full sm:w-auto">
          <ThemeSelector value={tone} onChange={setTone} />
        </div>

        <div className="w-full sm:w-auto flex flex-col items-start sm:items-end">
          <ContinueButton loading={isLoading} onClick={handleContinue} />
          {error && (
            <p className="mt-1 text-xs text-red-400">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
