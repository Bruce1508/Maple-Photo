export default function CropFrame({
  spec,
  note,
  className,
}: {
  spec: string;
  note: string;
  className?: string;
}) {
  return (
    <div className={`bg-surface rounded-[var(--radius-sm)] shadow-[var(--shadow-card)] ${className ?? ""}`}>
      <div className="flex flex-col items-center justify-center gap-2 px-8 py-8 text-center">
        <p className="font-display text-[clamp(1.5rem,2.2vw,2.25rem)] text-ink leading-none">{spec}</p>
        <p className="text-[length:var(--step-small)] text-ink-soft">{note}</p>
      </div>
    </div>
  );
}
