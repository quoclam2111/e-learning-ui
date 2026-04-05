interface Props {
  label: string
  type?: string
  placeholder?: string
}

export default function Input({
  label,
  type = "text",
  placeholder
}: Props) {
  return (
    <div>

      <label className="block text-sm font-semibold text-gray-800 uppercase tracking-wider">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full mt-2 px-4 py-4 rounded-xl bg-gray-100
        focus:ring-2 focus:ring-indigo-500 outline-none
        text-gray-900 placeholder:text-gray-400"
      />

    </div>
  )
}