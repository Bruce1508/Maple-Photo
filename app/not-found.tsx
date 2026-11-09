import Link from "next/link";
import MapleMark from "@/components/ui/MapleMark";

export default function NotFound() {
  return (
    <div className="min-h-svh bg-bg flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <MapleMark className="w-12 h-12 text-accent mx-auto mb-6" />
        <h1 className="font-display text-4xl text-ink mb-3">Page not found</h1>
        <p className="text-ink-soft mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Head back to our
          homepage to find what you need.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-ink text-white font-medium px-6 py-3 rounded-[var(--radius-pill)] hover:bg-accent transition-colors"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
