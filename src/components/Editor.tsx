// src/components/Editor.tsx
import { useEffect, useRef } from "react";
import { EditorView } from "prosemirror-view";
import { EditorState } from "prosemirror-state";
import { schema } from "prosemirror-schema-basic";
import { exampleSetup } from "prosemirror-example-setup";

type EditorProps = {
  value: string;
  onChange: (text: string) => void;
  onReady?: (view: EditorView) => void;
};

export function Editor({ value, onChange, onReady }: EditorProps) {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const viewRef = useRef<EditorView | null>(null);

  // 1. Setup on mount
  useEffect(() => {
    if (!editorRef.current) return;

    const state = EditorState.create({
      schema,
      plugins: exampleSetup({
        schema,
        menuBar: false,
      }),
      doc: schema.node("doc", null, [
        schema.node("paragraph", null, value ? [schema.text(value)] : []),
      ]),
    });

    const view = new EditorView(editorRef.current, {
      state,
      dispatchTransaction(tr) {
        const newState = view.state.apply(tr);
        view.updateState(newState);
        const text = newState.doc.textContent;
        onChange(text);
      },
      attributes: {
        class: "ProseMirror",
      },
    });

    viewRef.current = view;
    onReady?.(view); 
    
    return () => {
      view.destroy();
      viewRef.current = null;
    };
  }, []);

  // 2. Sync when parent `value` changes
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;

    const current = view.state.doc.textContent;
    if (current === value) return;

    const state = EditorState.create({
      schema,
      plugins: exampleSetup({
        schema,
        menuBar: false,
      }),
      doc: schema.node("doc", null, [
        schema.node("paragraph", null, value ? [schema.text(value)] : []),
      ]),
    });

    view.updateState(state);
  }, [value]);

  // 3. Layout + placeholder overlay
  const isEmpty = !value.trim();

  return (
    <div className="min-h-[360px] rounded-lg bg-[var(--primary)] flex items-center justify-center p-4">
      <div className="w-full pm-editor-container relative">
        {/* Placeholder overlay */}
        {isEmpty && (
          <div className="pointer-events-none absolute left-6 top-5 text-left text-2xl text-[var(--accent)] z-10 leading-[1.6]">
            Write something
          </div>
        )}

        {/* ProseMirror host */}
        <div ref={editorRef} />
      </div>
    </div>
  );
}
