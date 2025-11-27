type ThemeSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

type ToneOption = {
  value: string;
  label: string;
  characteristics: string;
};

const TONES: ToneOption[] = [
  {
    value: "Professional",
    label: "Professional",
    characteristics: "Clear, structured, business-focused, objective",
  },
  {
    value: "Casual",
    label: "Casual",
    characteristics: "Relaxed, informal, conversational, approachable",
  },
  {
    value: "Friendly",
    label: "Friendly",
    characteristics: "Warm, welcoming, personable, engaging",
  },
  {
    value: "Formal",
    label: "Formal",
    characteristics: "Official, structured, respectful, traditional",
  },
  {
    value: "Conversational",
    label: "Conversational",
    characteristics: "Natural, dialogue-like, easy-going, relatable",
  },
  {
    value: "Authoritative",
    label: "Authoritative",
    characteristics: "Expert, confident, decisive, knowledgeable",
  },
  {
    value: "Empathetic",
    label: "Empathetic",
    characteristics: "Understanding, supportive, compassionate, caring",
  },
  {
    value: "Enthusiastic",
    label: "Enthusiastic",
    characteristics: "Energetic, positive, excited, motivating",
  },
  {
    value: "Persuasive",
    label: "Persuasive",
    characteristics: "Convincing, compelling, sales-oriented, influential",
  },
  {
    value: "Educational",
    label: "Educational",
    characteristics: "Informative, clear, instructional, helpful",
  },
  {
    value: "Inspirational",
    label: "Inspirational",
    characteristics: "Motivating, uplifting, encouraging, aspirational",
  },
  {
    value: "Technical",
    label: "Technical",
    characteristics: "Detailed, precise, specialized, accurate",
  },
];

export function ThemeSelector({ value, onChange }: ThemeSelectorProps) {
  const selectedTone = TONES.find((tone) => tone.value === value);
  
  return (
    <div>
      <select
        className="w-full bg-[var(--c1)] border border-gray-700 rounded-lg p-2 text-[var(--secondary)] text-lg focus:outline-none hover:bg-[var(--hover-active)] transition-colors duration-200"        
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {TONES.map((tone) => (
          <option key={tone.value} value={tone.value}>
            {tone.label}
          </option>
        ))}
      </select>
      {selectedTone && (
        <p 
        className="mt-2 text-xs text-[var(--secondary)] opacity-70">
          {selectedTone.characteristics}
        </p>
      )}
    </div>
  );
}
