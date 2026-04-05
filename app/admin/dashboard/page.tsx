import StatsCards from "../components/StatsCards"

export default function AdminDashboard() {
  return (
    <div>

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Dashboard
        </h1>

        <p className="text-gray-600 mt-2 max-w-xl">
          Overview of your academic platform.
        </p>

      </div>

      <StatsCards />

    </div>
  )
}