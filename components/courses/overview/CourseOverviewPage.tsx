import type { Course } from "../types";

import CourseOverviewContent from "./CourseOverviewContent";
import CourseOverviewHero from "./CourseOverviewHero";
import CourseOverviewSidebar from "./CourseOverviewSidebar";

export default function CourseOverviewPage({ course }: { course: Course }) {
  const ratingLabel =
    course.rating == null
      ? "No ratings yet"
      : `${course.rating} (2.4k reviews)`;

  return (
    <>
      <CourseOverviewHero
        categoryLabel={course.category}
        title={course.title}
        instructorName="Dr. Aris Thorne"
        instructorAvatarUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAKp0G30K37cexAZ-C00-rQjBJtsAZ4x8C7Rc9AT1UHFrMGIMz11qqgU5YOEmL7Z2XIQDJOQ2cNW-j47jEBJiS3tbo_qApHMmz8OLYZtGfwipFmaLiLjWaxOnmQ376c5Y8Ua6sT3EFjmA6mUN1gK-9sfQ71Dh89x9dqi9i8EUjwcJqwsQ7dg4mNYK_SbwHUeW1ntJQWIW0nI7J4r6bGrNCcTKlmNtg5dUIp3EUrBowr1knuRBnh9zjDwEsy2AnKIdhw5cZYbRv28YB-"
        ratingLabel={ratingLabel}
        studentsLabel={`${course.students.toLocaleString()} Students`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <CourseOverviewContent
            about={[
              "Dive into the fascinating world of quantum mechanics and its revolutionary application to computing. This course bridges the gap between theoretical physics and computer science, taking you on a journey from the fundamental concept of superposition to the ultimate goal of quantum supremacy.",
              "You will explore how quantum bits (qubits) differ from classical bits, enabling exponentially faster calculations for specific types of problems. Through rigorous theory and practical simulations, you’ll learn to design basic quantum circuits and understand the underlying mathematics that power these next-generation machines.",
            ]}
            learningOutcomes={[
              "Understand fundamental principles of quantum mechanics",
              "Analyze quantum complexity and algorithm efficiency",
              "Design basic quantum circuits using modern frameworks",
              "Explore potential applications in cryptography and materials",
            ]}
            curriculum={[
              {
                title: "Module 1: The Quantum Foundation",
                meta: "4 Lessons • 2h 15m",
              },
              {
                title: "Module 2: Qubits and Superposition",
                meta: "6 Lessons • 3h 40m",
              },
              {
                title: "Module 3: Entanglement & Teleportation",
                meta: "5 Lessons • 2h 50m",
              },
              {
                title: "Module 4: Quantum Gates",
                meta: "Next up • 4 Lessons • 2h 00m",
                variant: "active",
              },
            ]}
            instructor={{
              name: "Dr. Aris Thorne",
              title: "Lead Researcher, Quantum Dynamics Inst.",
              bio: "Dr. Thorne has spent the last decade working at the intersection of theoretical physics and applied computer science. He holds a Ph.D. from MIT and has published numerous papers on quantum error correction protocols.",
              avatarUrl:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCxD5dt3y4HdlaGu1lf_YxRg6qepWfYqV3FPcVGUVoFOUb0HlsGy5QyjS0he9ixZCBZBh3t_tmO6sxt4ahzHGRMdIDcXod5PD7PcTnm8q9a9wrxkMIG6Vv3LZ_K6_Qphkh8zBf2USlIsHM528tS7PP-ieieWTCm1S-xs0wcOle_sdcLh8Agvy6TrNkoqKwojdmfQgcHfiMOUrgtz_otcDRely8PitaYUN7_jQYzSwP2O6EL-LlvrKVV1VQvIh0lQA5gNo-6nm6vroj7",
            }}
          />
        </div>

        <div>
          <CourseOverviewSidebar progressPercent={65} />
        </div>
      </div>
    </>
  );
}
