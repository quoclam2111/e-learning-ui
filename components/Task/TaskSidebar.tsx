"use client";

import Link from "next/link";
import {
  BarChart3,
  CalendarDays,
  FolderOpen,
  HelpCircle,
  LayoutGrid,
  LogOut,
  Orbit,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";

const TASK_NAV_ITEMS = [
  { href: "#", label: "Overview", icon: LayoutGrid },
  { href: "#", label: "Members", icon: Users },
  { href: "/admin/tasks", label: "Schedule", icon: CalendarDays },
  { href: "#", label: "Resources", icon: FolderOpen },
  { href: "#", label: "Analytics", icon: BarChart3 },
];

export default function TaskSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-slate-200 bg-[#eceef4] px-3 py-6 md:flex md:flex-col">
      <div className="mb-8 px-3">
        <div className="mb-1 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
            <Orbit className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-[28px] leading-7 font-bold text-slate-900">
              Advanced Physics
            </h2>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              PHS-402 • Fall 2024
            </p>
          </div>
        </div>
      </div>

      <nav className="space-y-1 px-1">
        {TASK_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href !== "#" &&
            (pathname === item.href || pathname.startsWith(`${item.href}/`));

          return (
            <Link
              key={item.label}
              href={item.href}
              className={
                isActive
                  ? "flex items-center gap-3 rounded-full bg-indigo-200/70 px-4 py-2.5 text-sm font-medium text-indigo-700"
                  : "flex items-center gap-3 rounded-full px-4 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-200/50"
              }
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-1 border-t border-slate-200/70 px-1 pt-5">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-full px-4 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-200/50"
        >
          <HelpCircle className="h-4 w-4" />
          Support
        </button>
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-full px-4 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-200/50"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
