"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import MapleMark from "@/components/ui/MapleMark";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        setError("Incorrect password. Please try again.");
        setPassword("");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-svh bg-bg flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <MapleMark className="w-8 h-8 text-accent mx-auto" />
          <h1 className="font-display text-xl text-ink mt-2">Maple Photo Imaging</h1>
          <p className="text-sm text-ink-soft mt-1">Admin access</p>
        </div>

        <div className="bg-surface rounded-[var(--radius-card)] p-7">
          <h2 className="text-base font-semibold text-ink mb-6">Sign in</h2>

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-ink mb-1.5">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full border border-border rounded-[var(--radius-sm)] px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                placeholder="Enter admin password"
              />
            </div>

            {error && (
              <p className="text-sm text-accent mb-4" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full bg-ink hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-[var(--radius-sm)] text-sm transition-colors"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-ink-soft mt-4">
          <a href="/" className="hover:text-accent transition-colors">
            ← Back to website
          </a>
        </p>
      </div>
    </div>
  );
}
