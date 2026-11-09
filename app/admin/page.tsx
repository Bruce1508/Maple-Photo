import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ExternalLink, LogOut, Calendar } from "lucide-react";
import Link from "next/link";
import MapleMark from "@/components/ui/MapleMark";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("admin-auth");

  if (!auth) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-svh bg-bg">
      <header className="bg-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <MapleMark className="w-5 h-5 text-accent" />
          <div>
            <p className="text-sm font-semibold text-ink">Maple Photo Imaging</p>
            <p className="text-xs text-ink-soft">Admin dashboard</p>
          </div>
        </div>

        <form action="/api/admin/logout" method="POST">
          <button
            type="submit"
            className="flex items-center gap-2 text-sm text-ink-soft hover:text-accent transition-colors cursor-pointer"
          >
            <LogOut size={15} />
            Sign out
          </button>
        </form>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="font-display text-2xl text-ink mb-8">Dashboard</h1>

        <div className="bg-white border border-border p-7 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Calendar size={20} className="text-accent" />
            </div>
            <div className="flex-grow">
              <h2 className="font-semibold text-ink mb-1">Upcoming bookings</h2>
              <p className="text-sm text-ink-soft mb-4">
                View and manage appointments in your Calendly dashboard.
              </p>
              <a
                href="https://calendly.com/event_types/user/me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ink text-white text-sm font-semibold px-5 py-2.5 hover:bg-accent transition-colors"
              >
                Open Calendly dashboard
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border p-7">
          <h2 className="font-semibold text-ink mb-4">Quick links</h2>
          <ul className="space-y-3" role="list">
            {[
              { label: "View website", href: "/" },
              { label: "Google Business Profile", href: "https://business.google.com", external: true },
              { label: "Calendly settings", href: "https://calendly.com", external: true },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-sm text-accent hover:underline"
                >
                  {link.label}
                  {link.external && <ExternalLink size={12} />}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center text-xs text-ink-soft mt-8">
          <Link href="/" className="hover:text-accent transition-colors">
            ← Back to website
          </Link>
        </p>
      </main>
    </div>
  );
}
