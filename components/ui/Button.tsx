"use client"

import { cn } from "@/lib/utils"

export default function Button({
  children,
  loading,
  className,
  ...props
}: any) {

  return (
    <button
      {...props}
      className={cn(
        "w-full py-4 rounded-full font-semibold transition flex items-center justify-center gap-2",
        "bg-indigo-600 text-white hover:shadow-lg active:scale-[0.98]",
        className
      )}
      disabled={loading}
    >

      {loading && (
        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"/>
      )}

      {children}

    </button>
  )
}