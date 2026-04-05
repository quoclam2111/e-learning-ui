export default function StudentDashboard() {
  return (
    <div className="max-w-5xl mx-auto">

      <header className="mb-12">

        <h1 className="text-4xl font-bold mb-2">
          Welcome back, Alex.
        </h1>

        <p className="text-slate-500">
          Your academic journey starts here.
        </p>

      </header>

      <div className="bg-white rounded-3xl p-12 shadow text-center">

        <span className="material-symbols-outlined text-indigo-600 text-6xl mb-6">
          auto_stories
        </span>

        <h2 className="text-2xl font-bold mb-3">
          No active courses yet
        </h2>

        <p className="text-slate-500 mb-8">
          Start your journey by exploring courses
        </p>

        <div className="flex gap-4 justify-center">

          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold">
            Explore Courses
          </button>

          <button className="bg-indigo-100 text-indigo-700 px-8 py-3 rounded-full font-semibold">
            View Roadmap
          </button>

        </div>

      </div>

    </div>
  )
}