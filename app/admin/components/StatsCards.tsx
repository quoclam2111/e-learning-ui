export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="p-6 bg-indigo-50 rounded-2xl">

        <div className="flex items-center gap-3 text-indigo-600 mb-2">
          <span className="material-symbols-outlined">group</span>
          <span className="text-xs font-bold uppercase">Total Users</span>
        </div>

        <div className="text-3xl font-bold">1,248</div>

        <div className="text-xs text-green-600 font-bold mt-1">
          +12% this month
        </div>

      </div>

      <div className="p-6 bg-slate-100 rounded-2xl">

        <div className="flex items-center gap-3 text-slate-600 mb-2">
          <span className="material-symbols-outlined">verified_user</span>
          <span className="text-xs font-bold uppercase">Active Users</span>
        </div>

        <div className="text-3xl font-bold">94.2%</div>

        <div className="text-xs text-slate-500 mt-1">
          1,176 verified accounts
        </div>

      </div>

      <div className="p-6 bg-slate-100 rounded-2xl">

        <div className="flex items-center gap-3 text-slate-600 mb-2">
          <span className="material-symbols-outlined">history_edu</span>
          <span className="text-xs font-bold uppercase">Pending Review</span>
        </div>

        <div className="text-3xl font-bold">24</div>

        <div className="text-xs text-slate-500 mt-1">
          New registrations waiting
        </div>

      </div>

    </div>
  )
}