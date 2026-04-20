"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  role: "admin" | "lecturer" | "student";
};

export default function Sidebar({ role }: Props) {
  const pathname = usePathname();

  const menu = {
    admin: [
      { name: "Dashboard", icon: "dashboard", path: "/admin/dashboard" },
      { name: "Users", icon: "group", path: "/admin/users" },
      { name: "Courses", icon: "menu_book", path: "/admin/courses" },
      { name: "Analytics", icon: "insights", path: "/admin/analytics" },
    ],

    // ✅ CHỈ SỬA lecturer theo hình: CLASS / TASK / COURSE / EXAM
    lecturer: [
      { name: "CLASS", icon: "groups", path: "/lecturer/dashboard" },
      { name: "TASK", icon: "checklist", path: "/lecturer/tasks" },
      { name: "COURSE", icon: "menu_book", path: "/lecturer/courses" },
      { name: "EXAM", icon: "quiz", path: "/lecturer/exams" },
    ],

    student: [
      { name: "Dashboard", icon: "dashboard", path: "/student/dashboard" },
      { name: "My Learning", icon: "school", path: "/student/courses" },
      { name: "Assignments", icon: "assignment", path: "/student/assignments" },
      { name: "AI Insights", icon: "auto_awesome", path: "/student/analytics" },
      { name: "Messages", icon: "chat", path: "/student/messages" },
    ],
  };

  const items = menu[role];
  const isLecturer = role === "lecturer";

  // ✅ Chiều cao taskbar/topbar: h-16 = 64px
  // Nếu header của bạn cao khác, đổi 2 chỗ này:
  // - top-16
  // - h-[calc(100vh-64px)]
  return (
    <aside
      className={[
        // ✅ Đẩy xuống dưới header để không bị đè
        "hidden md:flex w-64 fixed left-0 top-16 flex-col py-6",
        // ✅ Tr��� chiều cao header khỏi chiều cao sidebar
        "h-[calc(100vh-64px)]",
        // ✅ lecturer theo hình: nền trắng sạch
        isLecturer ? "bg-white" : "bg-slate-50",
      ].join(" ")}
    >
      {/* Logo - giữ nguyên (nếu muốn lecturer bỏ logo cũng được) */}
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
          <span className="material-symbols-outlined">school</span>
        </div>

        <div>
          <h1 className="text-lg font-black text-gray-900">Academic Curator</h1>
          <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            Enterprise Learning
          </p>
        </div>
      </div>

      {/* Menu */}
      <nav
        className={[
          "flex-1",
          // lecturer theo hình: padding giống “gọn”
          isLecturer ? "px-6 space-y-2" : "px-2 space-y-1",
        ].join(" ")}
      >
        {items.map((item) => {
          const active = pathname === item.path;

          // ✅ lecturer style theo hình
          if (isLecturer) {
            return (
              <Link
                key={item.path}
                href={item.path}
                className={[
                  "w-full flex items-center gap-3",
                  "rounded-full px-4 py-2.5",
                  "text-[12px] font-semibold uppercase tracking-[0.14em]",
                  "transition-colors",
                  active
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-700",
                ].join(" ")}
              >
                <span
                  className={[
                    "material-symbols-outlined text-[20px]",
                    active ? "text-indigo-700" : "text-slate-400",
                  ].join(" ")}
                >
                  {item.icon}
                </span>
                {item.name}
              </Link>
            );
          }

          // ✅ admin/student giữ nguyên UI cũ của bạn
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`mx-2 px-4 py-3 flex items-center gap-3 rounded-full text-sm transition
              ${
                active
                  ? "bg-indigo-100 text-indigo-700 font-semibold"
                  : "text-gray-700 hover:bg-slate-200"
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom - giữ nguyên */}
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
  );
}