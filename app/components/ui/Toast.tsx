export default function Toast({ message }: any) {

  return (
    <div className="fixed top-8 right-8 bg-red-100 text-red-800 px-6 py-4 rounded-xl shadow-lg animate-in fade-in slide-in-from-right-4">

      <p className="font-semibold">Authentication failed</p>

      <p className="text-sm opacity-80">
        {message}
      </p>

    </div>
  )
}