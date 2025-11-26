type ContinueButtonProps = {
  loading?: boolean;
  onClick: () => void;
};

export function ContinueButton({ loading, onClick }: ContinueButtonProps) {
  return (
    <button
      className="rounded-lg px-4 py-2 text-lg font-medium bg-[var(--secondary)] text-[var(--primary)] hover:bg-[var(--hover-active)] hover:text-[var(--secondary)] transition disabled:opacity-60 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={loading}
      type="button"
    >
      {loading ? "Continuing..." : "Continue Writing"}
    </button>
  );
}
