"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import AdminShell from "../../components/layout/AdminShell";
import FocusedWorkspaceShell from "../../components/layout/FocusedWorkspaceShell";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const isAssignmentWorkspaceRoute =
    segments[0] === "admin" &&
    segments[1] === "courses" &&
    ((segments[2] === "assignments" && segments.length === 4) ||
      (segments[3] === "assignments" && segments.length === 5));

  if (isAssignmentWorkspaceRoute) {
    return <FocusedWorkspaceShell>{children}</FocusedWorkspaceShell>;
  }

  return <AdminShell>{children}</AdminShell>;
}
