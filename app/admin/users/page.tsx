import UserTable from "../components/UserTable"

export default function UsersPage() {
  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            User Management
          </h1>

          <p className="text-slate-500 mt-1">
            Manage students, lecturers and admins
          </p>
        </div>

        <button className="bg-indigo-600 text-white px-5 py-3 rounded-full flex items-center gap-2 hover:bg-indigo-700">

          <span className="material-symbols-outlined">
            person_add
          </span>

          Create User

        </button>

      </div>

      <UserTable />

    </div>
  )
}