const users = [
  {
    name: "Dr. Elena Rodriguez",
    email: "elena.rodriguez@university.edu",
    role: "Lecturer",
    status: "Active",
  },
  {
    name: "Marcus Chen",
    email: "m.chen@student.university.edu",
    role: "Student",
    status: "Active",
  },
  {
    name: "Sarah Jenkins",
    email: "s.jenkins@admin.university.edu",
    role: "Admin",
    status: "Inactive",
  },
]

export default function UserTable() {
  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-50">

          <tr>

            <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase">
              User
            </th>

            <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase">
              Role
            </th>

            <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase">
              Status
            </th>

            <th className="px-6 py-4"></th>

          </tr>

        </thead>

        <tbody>

          {users.map((user, index) => (

            <tr
              key={index}
              className="border-t hover:bg-slate-50 transition"
            >

              <td className="px-6 py-4">

                <div className="font-semibold text-slate-900">
                  {user.name}
                </div>

                <div className="text-sm text-slate-500">
                  {user.email}
                </div>

              </td>

              <td className="px-6 py-4">

                <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold">
                  {user.role}
                </span>

              </td>

              <td className="px-6 py-4">

                <span
                  className={`text-sm font-medium ${
                    user.status === "Active"
                      ? "text-green-600"
                      : "text-slate-400"
                  }`}
                >
                  {user.status}
                </span>

              </td>

              <td className="px-6 py-4 text-right">

                <button className="text-slate-400 hover:text-indigo-600">

                  <span className="material-symbols-outlined">
                    edit
                  </span>

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  )
}