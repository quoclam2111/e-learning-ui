import AssignmentSubmitClient from "./AssignmentSubmitClient";
import TopNavbar from "@/components/Topbar";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-background text-on-surface overflow-x-hidden">
      <TopNavbar />

      {/* Chừa đúng topbar (h-16) + sidebar (w-64) */}
      <div className="pt-16 pl-64">
        <AssignmentSubmitClient assignmentId={id} />
      </div>
    </div>
  );
}