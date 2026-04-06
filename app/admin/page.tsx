import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ExternalLink, LogOut, Calendar } from "lucide-react";
import Link from "next/link";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("admin-auth");

  if (!auth) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Header */}
      <header className="bg-white border-b border-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl" aria-hidden="true">🍁</span>
          <div>
            <p className="text-sm font-semibold text-text-primary">
              Maple Photo Imaging
            </p>
            <p className="text-xs text-text-secondary">Admin Dashboard</p>
          </div>
        </div>

        <form action="/api/admin/logout" method="POST">
          <button
            type="submit"
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors cursor-pointer"
          >
            <LogOut size={15} />
            Sign out
          </button>
        </form>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="font-heading text-2xl text-text-primary mb-8">
          Dashboard
        </h1>

        {/* Calendly card */}
        <div className="bg-white rounded-2xl border border-border p-7 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Calendar size={20} className="text-primary" />
            </div>
            <div className="flex-grow">
              <h2 className="font-semibold text-text-primary mb-1">
                Upcoming Bookings
              </h2>
              <p className="text-sm text-text-secondary mb-4">
                View and manage appointments in your Calendly dashboard.
              </p>
              <a
                href="https://calendly.com/event_types/user/me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-primary-dark transition-colors"
              >
                Open Calendly Dashboard
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className="bg-white rounded-2xl border border-border p-7">
          <h2 className="font-semibold text-text-primary mb-4">Quick Links</h2>
          <ul className="space-y-3" role="list">
            {[
              { label: "View website", href: "/" },
              {
                label: "Google Business Profile",
                href: "https://business.google.com",
                external: true,
              },
              {
                label: "Calendly settings",
                href: "https://calendly.com",
                external: true,
              },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  {link.label}
                  {link.external && <ExternalLink size={12} />}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center text-xs text-text-secondary mt-8">
          <Link href="/" className="hover:text-primary transition-colors">
            ← Back to website
          </Link>
        </p>
      </main>
    </div>
  );
}
