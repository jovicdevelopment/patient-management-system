"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  UserPlus,
  HeartPulse,
  Stethoscope,
  Microscope,
  Pill,
  ReceiptText,
  HeartHandshake,
  Settings2,
  Search,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutGrid },
  { label: "Reception", href: "/reception", icon: UserPlus },
  { label: "Triage", href: "/triage", icon: HeartPulse, alert: true },
  { label: "Consultation", href: "/consultation", icon: Stethoscope },
  { label: "Laboratory", href: "/laboratory", icon: Microscope },
  { label: "Pharmacy", href: "/pharmacy", icon: Pill },
  { label: "Billing", href: "/billing", icon: ReceiptText },
  { label: "Nursing", href: "/nursing", icon: HeartHandshake },
  { label: "Back Office", href: "/back-office", icon: Settings2 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-[260px] flex-col border-r border-border bg-card">
      {/* Brand */}
      <div className="flex items-center gap-2.5 px-5 pt-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold leading-tight text-foreground">
            Hospital PMS
          </p>
          <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
            Clinical Console
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="px-5 pt-6">
        <div className="flex h-[33px] items-center gap-2 rounded-md border border-border bg-background px-3">
          <Search className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Search clinic...</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1 px-5 pt-6">
        {NAV_ITEMS.map(({ label, href, icon: Icon, alert }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex h-[38px] items-center gap-3 rounded-md px-3 text-sm font-medium transition-colors",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/80 hover:bg-muted"
              )}
            >
              <Icon className="h-[18px] w-[18px] shrink-0" />
              <span className="flex-1">{label}</span>
              {alert && !active && (
                <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer / user */}
      <div className="border-t border-border px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="h-[38px] w-[38px] shrink-0 rounded-full bg-muted" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-foreground">
              Dr. Sarah Jenkins
            </p>
            <p className="truncate text-xs text-muted-foreground">
              Chief Medical Officer
            </p>
          </div>
          <LogOut className="h-4 w-4 shrink-0 text-muted-foreground" />
        </div>
      </div>
    </aside>
  );
}
