"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpen,
  ClipboardList,
  FolderOpen,
  GraduationCap,
  Info,
  MessageSquare,
  NotebookPen,
  Play,
  PlayCircle,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  isActive?: (pathname: string) => boolean;
};

type NavGroup = {
  title: string;
  items: NavItem[];
};

const NAV_GROUPS: NavGroup[] = [
  {
    title: "Course",
    items: [
      {
        href: "/admin/courses",
        label: "Overview",
        icon: Info,
        isActive: (pathname) => pathname.startsWith("/admin/courses"),
      },
      {
        href: "#",
        label: "Curriculum",
        icon: BookOpen,
      },
      {
        href: "#",
        label: "Resources",
        icon: FolderOpen,
      },
    ],
  },
  {
    title: "Learning",
    items: [
      {
        href: "#",
        label: "Continue Learning",
        icon: PlayCircle,
      },
      {
        href: "#",
        label: "Assignments",
        icon: ClipboardList,
      },
      {
        href: "#",
        label: "Notes",
        icon: NotebookPen,
      },
    ],
  },
  {
    title: "Progress",
    items: [
      {
        href: "#",
        label: "My Progress",
        icon: TrendingUp,
      },
      {
        href: "#",
        label: "Performance",
        icon: BarChart3,
      },
    ],
  },
  {
    title: "Community",
    items: [
      {
        href: "#",
        label: "Discussions",
        icon: MessageSquare,
      },
      {
        href: "#",
        label: "Instructors",
        icon: GraduationCap,
      },
    ],
  },
];

export default function CourseSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-16 z-40 hidden h-[calc(100vh-4rem)] w-72 shrink-0 overflow-hidden bg-[#f7f7fb] px-5 py-6 md:flex md:flex-col dark:bg-slate-900">
      {/* Nav */}
      <nav className="flex-1 space-y-5 leading-relaxed tracking-tight text-slate-700 dark:text-slate-300 overflow-hidden">
        {NAV_GROUPS.map((group) => (
          <div key={group.title}>
            <h2 className="px-3 text-[0.6rem] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
              {group.title}
            </h2>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active = item.isActive ? item.isActive(pathname) : false;

                const className = active
                  ? "flex items-center gap-3 rounded-xl bg-indigo-100 px-3 py-2 text-indigo-700 font-semibold dark:bg-indigo-900/40 dark:text-indigo-300"
                  : "flex items-center gap-3 rounded-xl px-3 py-2 text-slate-500 transition-colors hover:bg-indigo-50 hover:text-indigo-700 dark:text-slate-400 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-300";

                return (
                  <li key={item.label}>
                    <Link href={item.href} className={className}>
                      <item.icon
                        className="h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* CTA Button */}
      <div className="mt-4 pt-4 border-t border-indigo-100 dark:border-slate-700">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 shadow-sm"
        >
          <Play className="h-4 w-4" aria-hidden="true" />
          Resume Last Lecture
        </button>
      </div>
    </aside>
  );
}
