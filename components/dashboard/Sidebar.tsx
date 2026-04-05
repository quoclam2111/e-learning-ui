"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {
  role: "admin" | "lecturer" | "student"
}

export default function Sidebar({ role }: Props) {
  const pathname = usePathname()

  const menu = {
    admin: [
      { name: "Dashboard", icon: "dashboard", path: "/admin/dashboard" },
      { name: "Users", icon: "group", path: "/admin/users" },
      { name: "Courses", icon: "menu_book", path: "/admin/courses" },
      { name: "Analytics", icon: "insights", path: "/admin/analytics" },
    ],

    lecturer: [
      { name: "Dashboard", icon: "dashboard", path: "/lecturer/dashboard" },
      { name: "Courses", icon: "menu_book", path: "/lecturer/courses" },
      { name: "Students", icon: "groups", path: "/lecturer/students" },
      { name: "Assignments", icon: "assignment", path: "/lecturer/assignments" },
    ],

    student: [
      { name: "Dashboard", icon: "dashboard", path: "/student/dashboard" },
      { name: "My Learning", icon: "school", path: "/student/courses" },
      { name: "Assignments", icon: "assignment", path: "/student/assignments" },
      { name: "Messages", icon: "chat", path: "/student/messages" },
    ],
  }

  const items = menu[role]

  return (
    <aside className="hidden md:flex h-screen w-64 fixed left-0 top-0 bg-slate-50 flex-col py-6">

      {/* Logo */}
      <div className="px-6 mb-8 flex items-center gap-3">

        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
          <span className="material-symbols-outlined">school</span>
        </div>

        <div>
          <h1 className="text-lg font-black text-gray-900">
            Academic Curator
          </h1>

          <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            Enterprise Learning
          </p>
        </div>

      </div>

      {/* Menu */}
      <nav className="flex-1 px-2 space-y-1">

        {items.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`mx-2 px-4 py-3 flex items-center gap-3 rounded-full text-sm transition
            ${
              pathname === item.path
                ? "bg-indigo-100 text-indigo-700 font-semibold"
                : "text-gray-700 hover:bg-slate-200"
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.name}
          </Link>
        ))}

      </nav>

      {/* Bottom */}
      <div className="px-2 border-t pt-4 space-y-1">

        <Link
          href="/settings"
          className="mx-2 px-4 py-3 flex items-center gap-3 rounded-full text-sm text-gray-700 hover:bg-slate-200"
        >
          <span className="material-symbols-outlined">settings</span>
          Settings
        </Link>

        <button className="mx-2 px-4 py-3 flex items-center gap-3 rounded-full text-sm text-red-600 hover:bg-red-50 w-full">
          <span className="material-symbols-outlined">logout</span>
          Logout
        </button>

      </div>

    </aside>
  )
}