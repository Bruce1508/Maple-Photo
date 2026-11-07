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
    <div className={`bg-paper ${className ?? ""}`}>
      <div className="flex flex-col items-center justify-center gap-2 px-10 py-10 text-center">
        <p className="font-display text-[clamp(1.75rem,2.4vw,2.5rem)] text-ink leading-none">{spec}</p>
        <p className="text-[length:var(--step-small)] text-ink-soft">{note}</p>
      </div>
    </div>
  );
}
