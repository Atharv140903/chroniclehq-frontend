import React from "react";

type InstructionBoxProps = {
  value: string;
  onChange: (value: string) => void;
};

export function InstructionBox({ value, onChange }: InstructionBoxProps) {
  return (
    <div>
      <label className="block text-sm mb-1">Instructions</label>
      <textarea
        rows={6}
        className="w-full bg-[var(--c2)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-[var(--secondary)] text-sm resize-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Give the AI extra context, e.g. tone, audience, slide type..."
      />
    </div>
  );
}
