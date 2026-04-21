"use client";

import { useMemo, useRef, useState } from "react";

type Props = { assignmentId: string };

type Resource = {
  name: string;
  meta: string;
  icon: string;
  iconClass: string;
};

type Submission = {
  attempt: string;
  timestamp: string;
  file: string;
  statusLabel: string;
  statusClass: string;
};

function cls(...xs: Array<string | false | undefined | null>) {
  return xs.filter(Boolean).join(" ");
}

export default function AssignmentSubmitClient({ assignmentId }: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [pickedFile, setPickedFile] = useState<File | null>(null);

  const resources: Resource[] = useMemo(
    () => [
      {
        name: "lab_template.pdf",
        meta: "2.4 MB • PDF Document",
        icon: "picture_as_pdf",
        iconClass: "text-red-500",
      },
      {
        name: "dataset_q1_raw.csv",
        meta: "142 KB • CSV Data",
        icon: "data_table",
        iconClass: "text-indigo-500",
      },
    ],
    []
  );

  const submissions: Submission[] = useMemo(
    () => [
      {
        attempt: "#02",
        timestamp: "Oct 18, 2023 • 02:15 PM",
        file: "lab_final_rev.pdf",
        statusLabel: "Draft Saved",
        statusClass: "bg-surface-container-high text-on-surface-variant",
      },
      {
        attempt: "#01",
        timestamp: "Oct 15, 2023 • 09:42 AM",
        file: "initial_draft.pdf",
        statusLabel: "Submitted",
        statusClass: "bg-green-100 text-green-700",
      },
    ],
    []
  );

  function onBrowse() {
    fileInputRef.current?.click();
  }

  function onPicked(f: File | null) {
    setPickedFile(f);
  }

  return (
    <main className="min-h-[calc(100vh-64px)] bg-surface">
      {/* ✅ FULL WIDTH trong vùng content (sau Sidebar), không bị “lọt vô trong” */}
      <div className="w-full px-6 md:px-10 py-8 md:py-10">
        {/* ✅ Giới hạn nhẹ nhưng bám trái (không mx-auto) để nhìn rộng & gọn */}
        <div className="w-full max-w-[1400px]">
          {/* Breadcrumb + Title */}
          <header className="mb-8 md:mb-10">
            <nav className="flex items-center gap-2 text-on-surface-variant mb-3 text-[11px] font-bold tracking-[0.12em] uppercase">
              <span className="hover:text-primary transition-colors cursor-pointer">My Learning</span>
              <span className="material-symbols-outlined text-[14px] leading-none">chevron_right</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Advanced Physics</span>
              <span className="material-symbols-outlined text-[14px] leading-none">chevron_right</span>
              <span className="text-on-surface">Assignments</span>
            </nav>

            <div className="flex flex-col gap-3">
              <div className="flex items-end justify-between gap-6">
                <h1 className="text-[34px] md:text-[44px] font-extrabold tracking-[-0.04em] text-on-surface leading-[1.05]">
                  Quantum Entanglement Lab
                  <span className="ml-2 text-xs font-semibold text-on-surface-variant align-middle">
                    (ID: {assignmentId})
                  </span>
                </h1>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[11px] font-extrabold rounded-full">
                  In Progress
                </span>
                <span className="text-on-surface-variant text-sm font-medium">
                  Due October 24, 2023 • 11:59 PM
                </span>
              </div>
            </div>
          </header>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-start">
            {/* Left */}
            <div className="lg:col-span-8 space-y-8">
              {/* Instructions */}
              <section className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 ambient-shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
                <h2 className="text-lg md:text-xl font-extrabold mb-5 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">description</span>
                  Assignment Instructions
                </h2>

                <div className="space-y-4 text-on-surface-variant leading-relaxed">
                  <p>
                    This lab requires you to simulate a Bell state measurement using the provided experimental
                    parameters. You must demonstrate a clear understanding of non-local correlation and the violation of
                    Bell&apos;s inequality within a controlled quantum system.
                  </p>

                  <h3 className="text-on-surface font-semibold pt-3">Core Requirements:</h3>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Complete statistical analysis of spin-state correlations for 1,000 detection events.",
                      "Derived proof of the CHSH inequality violation (S > 2).",
                      "Visual representation of the coincidence counts across varied polarizer angles.",
                    ].map((txt) => (
                      <li key={txt} className="flex items-start gap-3 bg-surface-container-low p-4 rounded-xl">
                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                        <span className="text-sm">{txt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-surface-container-high">
                    <h4 className="text-[11px] font-extrabold text-on-surface uppercase tracking-[0.14em] mb-4">
                      Resources &amp; Attachments
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {resources.map((r) => (
                        <button
                          key={r.name}
                          type="button"
                          className="flex items-center gap-3 px-4 py-3 bg-surface-container-low hover:bg-surface-container-high transition-colors rounded-2xl ghost-border"
                        >
                          <span className={cls("material-symbols-outlined", r.iconClass)}>{r.icon}</span>
                          <div className="text-left">
                            <p className="text-xs font-extrabold text-on-surface">{r.name}</p>
                            <p className="text-[10px] text-on-surface-variant">{r.meta}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* History */}
              <section className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 ambient-shadow">
                <h2 className="text-lg md:text-xl font-extrabold mb-5 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">history</span>
                  Submission History
                </h2>

                <div className="overflow-x-auto rounded-xl">
                  <table className="w-full text-left border-collapse min-w-[640px]">
                    <thead>
                      <tr className="bg-surface-container-low text-on-surface-variant text-[10px] uppercase tracking-widest">
                        <th className="px-6 py-4 font-bold">Attempt</th>
                        <th className="px-6 py-4 font-bold">Timestamp</th>
                        <th className="px-6 py-4 font-bold">Files</th>
                        <th className="px-6 py-4 font-bold">Status</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-surface-container">
                      {submissions.map((s) => (
                        <tr key={s.attempt} className="hover:bg-surface-container-low/50 transition-colors group">
                          <td className="px-6 py-5 text-sm font-extrabold text-on-surface">{s.attempt}</td>
                          <td className="px-6 py-5 text-sm text-on-surface-variant">{s.timestamp}</td>
                          <td className="px-6 py-5 text-sm text-on-surface-variant">
                            <div className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-xs">attach_file</span>
                              {s.file}
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <span
                              className={cls("px-2 py-1 text-[10px] font-extrabold rounded uppercase", s.statusClass)}
                            >
                              {s.statusLabel}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Feedback */}
              <section className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 ambient-shadow border-2 border-dashed border-surface-container-high">
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="h-16 w-16 bg-surface-container-low rounded-full flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-on-surface-variant text-3xl">forum</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-on-surface mb-2">Feedback &amp; Comments</h3>
                  <p className="text-on-surface-variant text-sm max-w-xs">
                    Feedback will appear here after your instructor has reviewed and graded your submission.
                  </p>
                </div>
              </section>
            </div>

            {/* Right */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-8">
              {/* Submit Work */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 ambient-shadow">
                <h2 className="text-lg font-extrabold mb-5 text-on-surface">Submit Work</h2>

                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={(e) => onPicked(e.target.files?.[0] ?? null)}
                />

                <button
                  type="button"
                  onClick={onBrowse}
                  className="w-full border-2 border-dashed border-indigo-100 rounded-2xl p-8 mb-6 flex flex-col items-center justify-center bg-indigo-50/30 hover:bg-indigo-50/60 transition-all cursor-pointer group"
                >
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary">upload_file</span>
                  </div>

                  <p className="text-sm font-extrabold text-on-surface mb-1 text-center">
                    {pickedFile ? pickedFile.name : "Drag & Drop your work here"}
                  </p>
                  <p className="text-xs text-on-surface-variant text-center">
                    {pickedFile ? "File selected (demo)." : "or click to browse local files"}
                  </p>
                </button>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-[11px] font-extrabold uppercase tracking-widest text-on-surface-variant">
                    <span>Supported formats</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["PDF", "ZIP", "DOCX"].map((x) => (
                      <span
                        key={x}
                        className="px-2 py-1 bg-surface-container text-on-surface-variant text-[10px] font-extrabold rounded-full"
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full h-[56px] signature-gradient text-white font-extrabold rounded-2xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
                >
                  Turn In
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>

                <button
                  type="button"
                  className="w-full mt-3 h-[48px] bg-transparent text-primary font-bold rounded-2xl hover:bg-surface-container-high transition-colors"
                >
                  Save as Draft
                </button>
              </div>

              {/* Instructor */}
              <div className="bg-surface-container-low rounded-2xl p-6 relative overflow-hidden">
                <h4 className="text-[11px] font-extrabold text-on-surface-variant uppercase tracking-widest mb-4">
                  Assigned by
                </h4>

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-surface-container-high">
                    <img
                      alt="Instructor avatar"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEtnFgueH9npF1zvnxAGO9L1JuYUzU2NDKlNSGZtFp_LVqKB395GIejqp8ikrErXleCNPC_rTLexOZ-IA37sCCqCpDEuqISCP6CjzihRb9UkbOlb8gJTrRdYSJqQXT26ri7bfHpPrrgr_zvdTYaDcOmYPYVdMMQaIEd7w4Ugl5LroI2DKf5jof7EQ7XyCAlrMaGtzXFAqxUtN0kQCeGtpaV5k8_dAeXi2uuuEfDWhcLnSqg5tbk2D03VzKrqgqAYUCw4vFTPcN191P"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-on-surface">Dr. Julian Vance</p>
                    <p className="text-[11px] text-on-surface-variant font-medium">Head of Theoretical Physics</p>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-4 w-full py-2 bg-white text-on-surface text-xs font-extrabold rounded-xl ghost-border flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">mail</span>
                  Contact Instructor
                </button>
              </div>

              {/* Tip */}
              <div className="bg-tertiary-fixed text-on-tertiary-fixed rounded-2xl p-6 flex items-start gap-4">
                <span className="material-symbols-outlined text-tertiary">auto_awesome</span>
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-wider mb-1">Academic Tip</p>
                  <p className="text-sm leading-relaxed">
                    Ensure all LaTeX formulas are rendered correctly in your PDF before final submission to avoid
                    formatting deductions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* NOTE: Icon hiện chữ (CHEVRON_RIGHT/description/...) là do font Material Symbols chưa load trong layout/head. */}
        </div>
      </div>
    </main>
  );
}