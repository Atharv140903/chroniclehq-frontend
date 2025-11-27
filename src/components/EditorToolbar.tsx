// src/components/EditorToolbar.tsx
import { FaBold, FaItalic, FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify } from "react-icons/fa";

type EditorToolbarProps = {
  onBold?: () => void;
  onItalic?: () => void;
  // alignment handlers can be added later
};


export function EditorToolbar({ onBold, onItalic }: EditorToolbarProps) {
  return (
    <div className="flex items-center justify-center gap-1 bg-[var(--c1)] border border-[var(--hover-active)] rounded-lg px-2 py-1.5">
      {/* Bold Button */}
      <button 
        className="flex items-center gap-1 px-2 py-1 rounded hover:bg-[var(--hover-active)] text-[var(--secondary)] font-bold"
        title="Bold"
        type="button"
        onClick={onBold}
      >
        <FaBold className="w-4 h-4" />
      </button>

      {/* Italic Button */}
      <button 
        className="flex items-center gap-1 px-2 py-1 rounded hover:bg-[var(--hover-active)] text-[var(--secondary)] italic"
        title="Italic"
        type="button"
        onClick={onItalic}
      >
        <FaItalic className="w-4 h-4" />
      </button>

      {/* Divider */}
      <div className="w-px h-5 bg-[var(--hover-active)] mx-1" />



      {/* Small Dropdown */}
      <button className="flex items-center gap-1 px-2 py-1 rounded hover:bg-[var(--hover-active)] text-xs text-[var(--secondary)]">
        <span>Small</span>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Divider */}
      <div className="w-px h-5 bg-[var(--hover-active)] mx-1" />

      {/* Left Align Button */}
      <button 
        className="flex items-center gap-1 px-2 py-1 rounded hover:bg-[var(--hover-active)] text-[var(--secondary)]"
        title="Align Left"
      >
        <FaAlignLeft className="w-4 h-4" />
      </button>

      {/* Center Align Button */}
      <button 
        className="flex items-center gap-1 px-2 py-1 rounded hover:bg-[var(--hover-active)] text-[var(--secondary)]"
        title="Align Center"
      >
        <FaAlignCenter className="w-4 h-4" />
      </button>

      {/* Right Align Button */}
      <button 
        className="flex items-center gap-1 px-2 py-1 rounded hover:bg-[var(--hover-active)] text-[var(--secondary)]"
        title="Align Right"
      >
        <FaAlignRight className="w-4 h-4" />
      </button>

      {/* Justify Button */}
      <button 
        className="flex items-center gap-1 px-2 py-1 rounded hover:bg-[var(--hover-active)] text-[var(--secondary)]"
        title="Justify"
      >
        <FaAlignJustify className="w-4 h-4" />
      </button>
    </div>
  );
}