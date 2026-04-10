"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, Search, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/", label: "Home" },
  { href: "/class/class-dashboard", label: "Class" },
  { href: "/admin/tasks/overview", label: "Task" },
  { href: "/admin/courses", label: "Course" },
  { href: "/admin/analytics", label: "Exam" },
  { href: "/admin/tasks", label: "Homework" },
  { href: "/student/ai-insights", label: "AI" },
];

export default function Topbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 shadow-[0px_20px_40px_rgba(21,28,39,0.06)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80">
      <div className="flex h-16 items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-8">
          <Link
            href="/class/class-dashboard"
            className="text-xl font-bold tracking-tighter text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-400"
          >
            The Academic Curator
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              const linkClassName = isActive
                ? "border-b-2 border-indigo-600 pb-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400"
                : "text-sm font-medium text-slate-500 transition hover:text-indigo-500 dark:text-slate-400";

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={linkClassName}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden flex-1 justify-center md:flex">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative w-full max-w-md"
          >
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              aria-label="Search"
              placeholder="Search..."
              className="h-9 w-full rounded-full border border-slate-200 bg-white/70 pl-9 pr-4 text-sm text-slate-700 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-indigo-200 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-200"
            />
          </form>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            type="button"
            aria-label="Notifications"
            className="rounded-lg p-2 text-slate-500 transition-all hover:bg-indigo-50/50 hover:text-indigo-600 active:scale-95 dark:text-slate-300 dark:hover:bg-indigo-900/20"
          >
            <Bell className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Settings"
            className="rounded-lg p-2 text-slate-500 transition-all hover:bg-indigo-50/50 hover:text-indigo-600 active:scale-95 dark:text-slate-300 dark:hover:bg-indigo-900/20"
          >
            <Settings className="h-5 w-5" />
          </button>

          <div className="ml-2 h-10 w-10 overflow-hidden rounded-full border-2 border-primary-fixed bg-slate-200">
            <Image
              src="https://i.pravatar.cc/80?img=11"
              alt="Lecturer profile picture"
              width={40}
              height={40}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
