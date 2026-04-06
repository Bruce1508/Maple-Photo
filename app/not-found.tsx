import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">🍁</div>
        <h1 className="font-heading text-4xl text-text-primary mb-3">
          Page Not Found
        </h1>
        <p className="text-text-secondary mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Head back to our
          homepage to find what you need.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary-dark transition-colors"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
